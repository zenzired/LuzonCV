import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("All");

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
      skills: ["Windows Server", "Linux", "Microsoft 365", "Entra ID"],
    },
    {
      category: "Networking",
      skills: ["DNS", "DHCP", "TCP/IP", "VPN", "Firewalls"],
    },
  ];

  const categories = ["All", ...skillGroups.map((g) => g.category)];

  const filteredGroups =
    selectedCategory === "All"
      ? skillGroups
      : skillGroups.filter((g) => g.category === selectedCategory);

  return (
    <motion.section
      id="skills"
      className="max-w-6xl mx-auto px-6 py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
        <span className="h-3 w-3 rounded-full bg-sky-400 animate-pulse" />
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Technical Skills
        </h2>
      </div>

      <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-5xl mx-auto mb-8 text-left md:text-center">
        Technologies, platforms and tools gained through enterprise support,
        cloud operations, infrastructure engineering and continuous professional
        development.
      </p>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
              selectedCategory === cat
                ? "bg-sky-500 text-white shadow-md shadow-sky-500/20 scale-105"
                : "bg-slate-800/90 text-slate-400 hover:text-white hover:bg-slate-700/80 border border-slate-700/60"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredGroups.map((group, index) => (
            <motion.div
              key={group.category}
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
              <h3 className="text-sky-400 text-xl font-semibold mb-5">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
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
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}

export default Skills;