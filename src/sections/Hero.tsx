"use client";

import { useState, useEffect } from "react";
import { useRole } from "@/sections/RoleContext";

type RoleKey = "developer" | "instructor" | "ICT Officer";

const roles: {
  key: RoleKey;
  label: string;
  description: string;
}[] = [
  {
    key: "developer",
    label: "FullStack Software Developer",
    description:
      "Full-stack applications, scalable backend systems, payment integrations and production-ready deployments,Database architecture, APIs, system design, authentication, infrastructure and performance optimization"
  },
  {
    key: "instructor",
    label: "Technical Instructor & Lecturer",
    description:
      "Curriculum design, Teaching programming and ICT disciplines with structured, industry-aligned learning approaches, mentoring capstone projects and bridging engineering with education."
  },
  {
    key: "ICT Officer",
    label: "ICT Officer",
    description:
      "Supporting enterprise systems, infrastructure operations, and organizational IT environments."
  },

  /*
  {
    key: "backend",
    label: "Backend Developer",
    description:
      "Database architecture, APIs, system design, authentication, infrastructure and performance optimization."
  },
  {
    key: "freelance",
    label: "Freelance Software Developer",
    description:
      "Delivering custom web solutions and business platforms for real-world clients."
  },
  {
    key: "architect",
    label: "Systems Architect",
    description:
      "Designing modular, maintainable systems aligned with enterprise needs and long-term scalability."
  }
      */
];

// 👇 ADDITION 1: URL param mapping for shareable links
const roleToUrlParam = {
  developer: "dev",
  instructor: "instructor",
  "ICT Officer": "ict",
} as const;

const urlParamToRole = Object.entries(roleToUrlParam).reduce(
  (acc, [key, value]) => ({ ...acc, [value]: key as RoleKey }),
  {} as Record<string, RoleKey>
);

export default function Hero() {
  const { role, setRole } = useRole();
  const selectedRole = roles.find(r => r.key === role);

  const [isOpen, setIsOpen] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  /*relevant work section developer to be default so projects show even when no role selected*/
  useEffect(() => {
    // 👇 ADDITION 2a: Read URL param on mount + fallback to default
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const urlRole = params.get("role");

      if (urlRole && urlParamToRole[urlRole]) {
        setRole(urlParamToRole[urlRole]);
        return;
      }
    }

    setRole("developer");
  }, [setRole]);

  // 👇 ADDITION 2b: Update URL when role changes (for shareability)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);

    if (role && role in roleToUrlParam) {
      params.set(
        "role",
        roleToUrlParam[role as RoleKey]
      );
    } else {
      params.delete("role");
    }

    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, "", newUrl);
  }, [role]);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const activeHeroRole = roles[heroIndex];

  const handleRoleClick = (key: RoleKey) => {
    setRole(key);
    setIsOpen(false);
  };

  // 👇 ADDITION 3: Handler for pill buttons
  const handlePillClick = (key: RoleKey) => {
    setRole(key);
  };

  // 👇 ADDITION 4: Inline SVG icons (no dependencies)
  const CodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );

  const GraduationIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
    </svg>
  );

  const ServerIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  );

  return (
    <section
      id="hero"
      className="section"
      style={{ paddingTop: "5rem", paddingBottom: "1rem" }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center"
          }}
          className="hero-grid"
        >
          {/* LEFT */}
          <div>
            <h1 className="accent-glow">
              Benson Ngatia
            </h1>

            <p
              style={{
                marginTop: "1.5rem",
                fontSize: "1.05rem",
                lineHeight: "1.9"
              }}
            >
              📞{" "}
              <a
                href="tel:0707501094"
                style={{ color: "#cbd5e1", textDecoration: "none" }}
              >
                0707501094
              </a>
              <br />

              ✉️{" "}
              <a
                href="mailto:mukuhabenson@gmail.com"
                style={{ color: "#cbd5e1", textDecoration: "none" }}
              >
                mukuhabenson@gmail.com
              </a>{" "}
              <br />

              <a
                href="https://www.linkedin.com/in/ngatiaben"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#cbd5e1", textDecoration: "none" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1 4.98 2.12 4.98 3.5zM.24 8h4.5v16h-4.5V8zm7.26 0h4.32v2.19h.06c.6-1.13 2.07-2.32 4.26-2.32 4.56 0 5.4 3 5.4 6.89V24h-4.5v-7.58c0-1.81-.03-4.14-2.52-4.14-2.52 0-2.91 1.97-2.91 4.01V24h-4.5V8z"/>
                </svg>{" "}
                www.linkedin.com/in/ngatiaben
              </a>

              <br />

              <a
                href="https://github.com/mukuhaben"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#cbd5e1", textDecoration: "none" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 5.09 3.29 9.41 7.86 10.93.57.11.78-.25.78-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.73-1.52-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.3 1.18-3.11-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.95 10.95 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.85 1.18 3.11 0 4.43-2.69 5.4-5.25 5.68.41.35.77 1.04.77 2.1 0 1.52-.01 2.75-.01 3.13 0 .31.21.67.79.56A11.26 11.26 0 0 0 23.25 11.75C23.25 5.48 18.27.5 12 .5z"/>
                </svg>{" "}
                github.com/mukuhaben
              </a>

              <br />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}