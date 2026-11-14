import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Projects() {
  const [selectedTech, setSelectedTech] = useState("All");

  const projects = [
    {
      title: "Multi-Node Raspberry Pi Home Lab",
      description:
        "Four-node Raspberry Pi infrastructure running MicroK8s with Kyverno and Trivy DevSecOps guardrails, n8n workflow automation, Pi-hole DNS filtering, and centralized Prometheus/Grafana observability.",
      technologies: ["Kubernetes", "Observability", "Docker", "DevSecOps", "Automation"],
      link: "https://github.com/zenzired/homelab-observability-devsecops",
      walkthroughLink: "/projects/homelab-walkthrough.html",
    },
    {
      title: "Azure Portfolio Website",
      description:
        "Personal portfolio built using React, Vite and Tailwind CSS, designed for deployment to Azure Static Web Apps with GitHub-based CI/CD workflows.",
      technologies: ["React", "Vite", "Tailwind CSS", "Azure"],
      link: "https://github.com/zenzired",
    },
    {
      title: "Azure Functions Contact Platform",
      description:
        "Serverless contact solution that will integrate Azure Functions with Microsoft Graph to securely deliver portfolio enquiries directly to Outlook.",
      technologies: ["Azure", "Microsoft Graph", "Serverless"],
      link: "https://github.com/zenzired",
    },
    {
      title: "PowerShell Automation Toolkit",
      description:
        "Collection of PowerShell scripts focused on automation, troubleshooting, reporting and operational efficiency across enterprise environments.",
      technologies: ["PowerShell", "Windows", "Automation"],
      link: "https://github.com/zenzired",
    },
    {
      title: "Infrastructure Automation Lab",
      description:
        "Ongoing learning environment focused on infrastructure automation, cloud provisioning and deployment workflows using infrastructure-as-code principles.",
      technologies: ["Terraform", "AWS", "CI/CD", "Automation"],
      link: "https://github.com/zenzired",
    },
  ];

  const techFilters = [
    "All",
    "Kubernetes",
    "Observability",
    "Azure",
    "AWS",
    "Terraform",
    "Automation",
    "React",
    "PowerShell",
  ];

  const filteredProjects =
    selectedTech === "All"
      ? projects
      : projects.filter((p) => p.technologies.includes(selectedTech));

  return (
    <motion.section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
        <span className="h-3 w-3 rounded-full bg-sky-400 animate-pulse" />
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Projects
        </h2>
      </div>

      <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-5xl mx-auto mb-8 text-left md:text-center">
        A selection of projects focused on cloud technologies, automation,
        infrastructure, modern web development and continuous learning.
      </p>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {techFilters.map((tech) => (
          <button
            key={tech}
            onClick={() => setSelectedTech(tech)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
              selectedTech === tech
                ? "bg-sky-500 text-white shadow-md shadow-sky-500/20 scale-105"
                : "bg-slate-800/90 text-slate-400 hover:text-white hover:bg-slate-700/80 border border-slate-700/60"
            }`}
          >
            {tech}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              className="
                flex flex-col justify-between
                bg-slate-800/60
                backdrop-blur-md
                border border-slate-700/80
                hover:border-sky-500/40
                rounded-2xl
                p-6 md:p-8
                transition-all
                duration-300
                hover:shadow-xl
                hover:shadow-sky-500/5
                hover:-translate-y-1
              "
            >
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  {project.title}
                </h3>

                <p className="text-slate-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
                        bg-slate-800/90
                        text-sky-300
                        border border-slate-700/60
                        hover:border-sky-400/50
                        hover:text-sky-200
                        hover:bg-slate-700/60
                        transition-all
                        duration-200
                        px-3.5 py-1.5
                        rounded-full
                        text-sm
                        font-medium
                        cursor-default
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                {project.walkthroughLink && (
                  <a
                    href={project.walkthroughLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-sky-500/20 hover:bg-sky-400 transition"
                  >
                    Interactive Walkthrough ↗
                  </a>
                )}

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sky-400 font-medium hover:text-sky-300 transition"
                >
                  {project.walkthroughLink ? "View Source →" : "View Project →"}
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}

export default Projects;