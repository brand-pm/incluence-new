import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useConsultation, serviceFromPath } from "@/hooks/useConsultation";

/**
 * Global click interceptor: any click on a link pointing to "/contact"
 * (anywhere on the site) opens the consultation popup instead of navigating,
 * and pre-fills "Service of interest" based on the current page URL.
 *
 * Exception: when the user is already on /contact, links keep their default
 * behavior (no interception). Modifier-key clicks (cmd/ctrl/shift/middle click)
 * are also left alone so users can still open in new tabs.
 */
const ContactCTAInterceptor = () => {
  const { open } = useConsultation();
  const location = useLocation();

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      // Don't hijack on the dedicated contact page itself
      if (location.pathname === "/contact") return;

      // Respect modifier keys / non-primary clicks
      if (e.defaultPrevented) return;
      if (e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const target = e.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest("a") as HTMLAnchorElement | null;
      if (!anchor) return;

      // Skip explicit new-tab / download / non-self targets
      if (anchor.target && anchor.target !== "" && anchor.target !== "_self") return;
      if (anchor.hasAttribute("download")) return;
      if (anchor.dataset.noIntercept === "true") return;

      // Resolve the path the link points to
      const hrefAttr = anchor.getAttribute("href") || "";
      let path = "";
      try {
        const url = new URL(anchor.href, window.location.origin);
        if (url.origin !== window.location.origin) return;
        path = url.pathname;
      } catch {
        path = hrefAttr;
      }

      if (path !== "/contact") return;

      e.preventDefault();
      e.stopPropagation();
      open({ service: serviceFromPath(location.pathname) });
    };

    // Capture phase so we run before React Router's own click handling
    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler, true);
  }, [open, location.pathname]);

  return null;
};

export default ContactCTAInterceptor;
