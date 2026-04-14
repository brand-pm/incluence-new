import React, { useRef } from "react";
import { useLeadForm } from "@/hooks/useLeadForm";

interface FormBlockProps {
  bgColor?: string;
  fields?: string[];
  textareaLabel?: string;
  buttonText?: string;
}

const FormBlock = ({
  bgColor = "#080808",
  fields = ["Full Name", "Company Name", "Service Interest", "Budget Range"],
  textareaLabel = "Additional details — target markets, timeline, requirements...",
  buttonText = "SEND REQUEST →",
}: FormBlockProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const { submitLead, submitting } = useLeadForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const data = new FormData(form);
    const success = await submitLead({
      name: (data.get("Full Name") || data.get("Name") || "") as string,
      email: (data.get("Email") || data.get("email") || "") as string,
      company: (data.get("Company Name") || data.get("Company") || "") as string,
      service: (data.get("Service Interest") || "") as string,
      message: (data.get("message") || "") as string,
    });

    if (success) form.reset();
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        {fields.map((label) => (
          <div key={label}>
            <label className="text-[10px] text-[#5A5550] uppercase tracking-[0.1em] mb-2 block">{label}</label>
            <input
              type={label.toLowerCase().includes("email") ? "email" : "text"}
              name={label}
              required={label.toLowerCase().includes("name") && !label.toLowerCase().includes("company")}
              className="w-full border border-white/[0.08] focus:border-[#444CE7]/50 text-[#F0EBE0] text-[14px] placeholder:text-[#5A5550] px-4 py-3 outline-none"
              style={{ fontFamily: "inherit", background: bgColor }}
            />
          </div>
        ))}
      </div>
      <div className="mb-5">
        <label className="text-[10px] text-[#5A5550] uppercase tracking-[0.1em] mb-2 block">{textareaLabel}</label>
        <textarea
          name="message"
          className="w-full border border-white/[0.08] focus:border-[#444CE7]/50 text-[#F0EBE0] text-[14px] placeholder:text-[#5A5550] px-4 py-3 outline-none min-h-[100px] resize-none"
          style={{ fontFamily: "inherit", background: bgColor }}
        />
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="w-full px-8 py-3 bg-[#444CE7] hover:bg-[#3538CD] disabled:opacity-50 text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors cursor-pointer border-0"
        style={{ fontFamily: "inherit" }}
      >
        {submitting ? "SENDING..." : buttonText}
      </button>
    </form>
  );
};

export default FormBlock;
