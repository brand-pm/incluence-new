import { createContext, useCallback, useContext, useMemo, useState, ReactNode } from "react";

export type ServiceInterest =
  | "Crypto / MiCA"
  | "Forex"
  | "EMI / PSP"
  | "Gambling"
  | "Company Formation"
  | "Banking & Merchant"
  | "Buy Ready-Made Company"
  | "Other"
  | "";

interface OpenOpts {
  service?: ServiceInterest;
}

interface Ctx {
  isOpen: boolean;
  defaultService: ServiceInterest;
  open: (opts?: OpenOpts) => void;
  close: () => void;
}

const ConsultationContext = createContext<Ctx | null>(null);

export const ConsultationProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [defaultService, setDefaultService] = useState<ServiceInterest>("");

  const open = useCallback((opts?: OpenOpts) => {
    setDefaultService(opts?.service ?? "");
    setIsOpen(true);
  }, []);
  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo(() => ({ isOpen, defaultService, open, close }), [isOpen, defaultService, open, close]);

  return <ConsultationContext.Provider value={value}>{children}</ConsultationContext.Provider>;
};

export const useConsultation = () => {
  const ctx = useContext(ConsultationContext);
  if (!ctx) {
    // Safe fallback so components don't crash if used outside provider
    return {
      isOpen: false,
      defaultService: "" as ServiceInterest,
      open: () => {
        if (typeof window !== "undefined") {
          window.location.href = "/contact";
        }
      },
      close: () => {},
    };
  }
  return ctx;
};

/**
 * Best-effort mapping of a route path to a default Service Interest value.
 * Used by page-level CTA buttons to pre-fill the consultation form.
 */
export function serviceFromPath(pathname: string): ServiceInterest {
  const p = pathname.toLowerCase();
  if (p.includes("mica") || p.includes("crypto")) return "Crypto / MiCA";
  if (p.includes("forex")) return "Forex";
  if (p.includes("emi") || p.includes("payment") || p.includes("psp")) return "EMI / PSP";
  if (p.includes("gamble") || p.includes("gambl") || p.includes("gaming")) return "Gambling";
  if (p.includes("ready-made") || p.includes("readymade") || p.includes("marketplace") || p.includes("buy")) return "Buy Ready-Made Company";
  if (p.includes("bank") || p.includes("merchant")) return "Banking & Merchant";
  if (p.includes("company") || p.includes("offshore") || p.includes("registration")) return "Company Formation";
  return "";
}
