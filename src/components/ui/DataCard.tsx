import React from "react";

export const DataCard = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`bg-[#0d0d0d] p-7 relative overflow-hidden group cursor-pointer transition-all duration-300 hover:bg-[#111111] ${className}`}
  >
    <div className="absolute bottom-0 left-0 h-[2px] bg-[#444CE7] w-0 group-hover:w-full transition-all duration-300" />
    {children}
  </div>
);
