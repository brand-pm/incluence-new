import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center" style={{ background: "#080808", fontFamily: "Manrope, sans-serif" }}>
      <div className="text-center px-5">
        <span
          style={{
            fontSize: 11,
            color: "#444CE7",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            fontWeight: 500,
          }}
        >
          — Error
        </span>
        <h1
          style={{
            fontSize: "clamp(64px, 10vw, 120px)",
            fontWeight: 300,
            color: "#F0EBE0",
            lineHeight: 1,
            margin: "16px 0",
          }}
        >
          4<span style={{ color: "#444CE7" }}>0</span>4
        </h1>
        <p style={{ fontSize: 16, color: "#9A9590", marginBottom: 32, lineHeight: 1.6 }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2"
          style={{
            background: "#444CE7",
            color: "#fff",
            padding: "12px 24px",
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            textDecoration: "none",
          }}
        >
          Return to Home <ArrowRight size={13} />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
