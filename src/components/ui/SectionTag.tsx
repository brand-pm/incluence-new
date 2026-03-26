import React from "react";

export const SectionTag = ({ children }: { children: string }) => (
  <span className="block text-[11px] font-medium text-[#444CE7] uppercase tracking-[0.12em] mb-4">
    — {children}
  </span>
);
