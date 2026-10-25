function Projects() {
  const projects = [
    {
      title: "Azure Portfolio Website",
      description:
        "Personal portfolio built using React, Vite and Tailwind CSS, designed for deployment to Azure Static Web Apps with GitHub-based CI/CD workflows.",
      technologies: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Azure Static Web Apps"
      ],
      link: "https://github.com/zenzired"
    },

    {
      title: "Azure Functions Contact Platform",
      description:
        "Serverless contact solution that will integrate Azure Functions with Microsoft Graph to securely deliver portfolio enquiries directly to Outlook.",
      technologies: [
        "Azure Functions",
        "Microsoft Graph",
        "Serverless"
      ],
      link: "https://github.com/zenzired"
    },

    {
      title: "PowerShell Automation Toolkit",
      description:
        "Collection of PowerShell scripts focused on automation, troubleshooting, reporting and operational efficiency across enterprise environments.",
      technologies: [
        "PowerShell",
        "Windows",
        "Automation"
      ],
      link: "https://github.com/zenzired"
    },

    {
      title: "Infrastructure Automation Lab",
      description:
        "Ongoing learning environment focused on infrastructure automation, cloud provisioning and deployment workflows using infrastructure-as-code principles.",
      technologies: [
        "Terraform",
        "AWS",
        "CI/CD"
      ],
      link: "https://github.com/zenzired"
    }
  ];

  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Projects
      </h2>

      <p
        className="
          text-slate-300
          text-lg
          md:text-xl
          leading-relaxed
          max-w-5xl
          mx-auto
          mb-12
          text-left
          md:text-center
        "
      >
        A selection of projects focused on cloud
        technologies, automation, infrastructure,
        modern web development and continuous learning.
      </p>

      <div className="grid md:grid-cols-2 gap-8">

        {projects.map((project) => (
          <div
            key={project.title}
            className="
              bg-slate-800/80
              backdrop-blur-sm
              border border-slate-700
              rounded-2xl
              p-6
              hover:border-sky-400
              hover:shadow-lg
              hover:shadow-sky-500/10
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
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
                    bg-slate-700
                    text-sky-400
                    px-3
                    py-2
                    rounded-full
                    text-sm
                    font-medium
                  "
                >
                  {tech}
                </span>
              ))}

            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex
                text-sky-400
                font-medium
                hover:text-sky-300
                transition
              "
            >
              View Project →
            </a>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Projects;