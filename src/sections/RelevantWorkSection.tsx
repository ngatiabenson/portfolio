"use client";

import { projects } from "@/data/projects";
import { useRole } from "./RoleContext";

export default function RelevantWorkSection() {
  const { role } = useRole();

  if (!role) return null;

  // Instructor view
  
if (role === "instructor") {
  const filtered = projects.filter((p) =>
    p.roles.includes("instructor")
  );

  return (
            
      <section
        id="work"   // <-- add this
        className="section"
        style={{
          padding: "1rem 0",
          borderTop: "0px solid var(--border-subtle)",
        }}
      >


      <div className="container fade-up" key={role}>
        <h2 className="section-title">Teaching Portfolio</h2>

        <p style={{ marginBottom: "1rem", maxWidth: "700px" }}>
            I teach Systems Analysis and Design (DICT 4202), Programming (DICT 4201 & DICT 4205), Database Management (DICT 4206), 
            and Networking Fundamentals (DICT 4204), emphasizing practical skills and real-world problem solving.

        </p>

        {filtered.length === 0 ? (
          <p>Teaching-related projects are currently being added.</p>
        ) : (
          <div className="projects-grid">
            {filtered.map((project) => (
              <div
                key={project.slug}
                className="glass card-hover"
                style={{ padding: "2rem" }}
              >
                <h3 style={{ marginBottom: "0.5rem" }}>
                  {project.title}
                </h3>

                <p style={{ marginBottom: "1.5rem" }}>
                  {project.shortDescription}
                </p>

                {/* Evidence tags 
                {project.evidence && (
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                      marginBottom: "1rem",
                    }}
                  >
                    {project.evidence.map((e) => (
                      <span key={e} className="tech-tag">
                        {e}
                      </span>
                    ))}
                  </div>
                )}
                  */}

                {/* Curriculum styled like tech */}

                    {project.curriculum && project.curriculum.length > 0 && (
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "0.5rem",
                          paddingTop: "1rem",
                          borderTop: "1px solid var(--border-subtle)",
                          marginBottom: "1.5rem",
                        }}
                      >
                        {project.curriculum.map((c) => (
                          <span key={c} className="tech-tag">
                            {c}
                          </span>
                        ))}
                      </div>
                    )}


                {/* CTA */}
                <p style={{ fontSize: "0.85rem", opacity: 0.7 }}>
  Includes Schemes of work, lesson plan, lab guide, and assessment rubric
</p>

                <a
                  href={project.lessonPlanUrl}
                  target="_blank"
                  style={{
                    color: "var(--accent-secondary)",
                    fontWeight: 500,
                  }}
                >
                  View Teaching Materials →
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}


//ICT OFFICER
  const filtered = projects.filter((p) =>
    p.roles.includes(role)
  );

  return (
    <section
      id="work"
      className="section"
      style={{ borderTop: "1px solid var(--border-subtle)" }}
    >
<div className="container fade-up" key={role}>
  {filtered.length === 0 ? (
    <p>
      Relevant projects for this role are currently being added.
    </p>
  ) : (
    <div className="projects-grid">
      {filtered.map((project) => (
        <div
          key={project.slug}
          className="glass card-hover"
          style={{
            padding: "2rem",
          }}
        >
          <h3 style={{ marginBottom: "0.5rem" }}>
            {project.title}
          </h3>

          <p style={{ marginBottom: "1.5rem" }}>
            {project.shortDescription}
          </p>

          {/* TECH TAGS (RESTORED) */}
          {project.tech && project.tech.length > 0 && (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
                paddingTop: "1rem",
                borderTop: "1px solid var(--border-subtle)",
                marginBottom: "1.5rem",
              }}
            >
              {project.tech.map((t) => (
                <span key={t} className="tech-tag">
                  {t}
                </span>
              ))}
            </div>
          )}

          <a
            href={project.liveUrl}
            target="_blank"
            style={{
              color: "var(--accent-secondary)",
              fontWeight: 500,
            }}
          >
            View Project →
          </a>
        </div>
      ))}
    </div>
  )}
</div>

    </section>
  );
}
