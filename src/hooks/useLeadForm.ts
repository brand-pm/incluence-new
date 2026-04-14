import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface LeadData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  message?: string;
  source_page?: string;
}

export const useLeadForm = () => {
  const [submitting, setSubmitting] = useState(false);

  const submitLead = async (data: LeadData): Promise<boolean> => {
    if (!data.name?.trim() || !data.email?.trim()) {
      toast.error("Please fill in required fields");
      return false;
    }

    setSubmitting(true);
    try {
      const { error } = await supabase.from("leads" as any).insert([{
        name: data.name.trim(),
        email: data.email.trim(),
        phone: data.phone?.trim() || null,
        company: data.company?.trim() || null,
        service: data.service?.trim() || null,
        message: data.message?.trim() || null,
        source_page: data.source_page || window.location.pathname,
      }]);

      if (error) throw error;

      toast.success("Message sent successfully", {
        description: "We'll get back to you within 24 hours.",
      });
      return true;
    } catch (err) {
      console.error("Lead submission error:", err);
      toast.error("Something went wrong. Please try again.");
      return false;
    } finally {
      setSubmitting(false);
    }
  };

  return { submitLead, submitting };
};
