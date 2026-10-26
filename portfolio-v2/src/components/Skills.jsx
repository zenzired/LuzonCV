import { motion } from "framer-motion";

function Skills() {
  const skillGroups = [
    {
      category: "Cloud Platforms",
      skills: ["AWS", "Azure", "GCP"],
    },
    {
      category: "Containers & Orchestration",
      skills: ["Kubernetes", "Docker"],
    },
    {
      category: "Infrastructure as Code",
      skills: ["Terraform", "GitHub Actions", "CI/CD"],
    },
    {
      category: "Automation",
      skills: ["Python", "Bash", "PowerShell"],
    },
    {
      category: "Platforms",
      skills: [
        "Windows Server",
        "Linux",
        "Microsoft 365",
        "Entra ID",
      ],
    },
    {
      category: "Networking",
      skills: [
        "DNS",
        "DHCP",
        "TCP/IP",
        "VPN",
        "Firewalls",
      ],
    },
  ];

  return (
    <motion.section
      id="skills"
      className="max-w-6xl mx-auto px-6 py-24"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Technical Skills
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
        Technologies, platforms and tools gained through
        enterprise support, cloud operations, infrastructure
        engineering and continuous professional development.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            className="
              bg-slate-800/80
              backdrop-blur-sm
              border
              border-slate-700
              rounded-2xl
              p-6
              hover:border-sky-400
              hover:shadow-lg
              hover:shadow-sky-500/10
              transition-all
              duration-300
            "
          >
            <h3 className="text-sky-400 text-xl font-semibold mb-5">
              {group.category}
            </h3>

            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <span
                  key={skill}
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
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Skills;