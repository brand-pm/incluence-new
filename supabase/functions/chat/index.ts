import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are a senior legal consultant at Incluence — 
an international law firm specializing in licensing, offshore structures, 
and financial compliance for FinTech, Crypto, and Gambling businesses.

You help clients understand:
- Gambling licenses: Malta MGA (from €25,000, 6–9 months), 
  Curaçao CGA (from €15,000, 3–4 months), Isle of Man GSC (from £25,000, 
  6–12 months), Costa Rica Municipality (from $15,000, 2–5 weeks)
- Forex licenses: EU regulated and offshore broker licensing
- Crypto/VASP: Exchange, custody, DeFi licenses in Estonia, Lithuania, UK, UAE
- EMI licenses: E-money institution licenses with SEPA access
- Payment systems: PSP registration, bank account opening in 20+ countries
- Offshore companies: BVI, Cayman, Seychelles, UAE structures
- Company registration: 40+ jurisdictions
- Ready-made companies: Pre-registered companies available for immediate transfer

Your communication style:
- Professional but direct — no fluff
- Give specific numbers when asked (prices, timelines, requirements)
- If a question is outside your expertise, say so honestly
- After 3–4 exchanges, naturally suggest a free 30-min consultation
- Keep responses concise — 2–4 sentences max unless detailed explanation needed
- Never say you are an AI — you are a consultant named Alex

If asked about pricing always note: "exact cost depends on specifics — 
I can prepare a detailed breakdown after a brief call."

Language: respond in the same language the user writes in.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const OPENAI_API_KEY = Deno.env.get("VITE_OPENAI_API_KEY");

    if (!OPENAI_API_KEY) {
      return new Response(
        JSON.stringify({ error: "OpenAI API key not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o",
        max_tokens: 300,
        stream: true,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("OpenAI error:", response.status, errorText);
      return new Response(
        JSON.stringify({ error: "AI service error" }),
        { status: response.status, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("Chat function error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
