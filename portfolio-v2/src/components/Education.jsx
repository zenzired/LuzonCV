import { motion } from "framer-motion";

function Education() {
  const educationCards = [
    {
      title:
        "Post Graduate Program in Artificial Intelligence & Machine Learning",
      institution: "California Institute of Technology (Caltech)",
      description:
        "Advanced studies focused on Artificial Intelligence, Machine Learning, Data Science, Predictive Analytics and practical AI applications.",
      tags: [
        "Artificial Intelligence",
        "Machine Learning",
        "Data Science",
        "Analytics",
      ],
    },
    {
      title:
        "Bachelor of Science in Electronics & Communications Engineering",
      institution: "AMA University",
      description:
        "Developed a strong technical foundation in engineering principles, communications systems, networking concepts, analytical problem solving and technology troubleshooting.",
      tags: [
        "Engineering",
        "Communications",
        "Networking",
        "Problem Solving",
      ],
    },
    {
      title: "Professional Development",
      institution: "Continuous Learning",
      description:
        "Ongoing professional development across cloud computing, automation, infrastructure engineering and cybersecurity.",
      tags: [
        "AWS",
        "Azure",
        "Kubernetes",
        "Terraform",
        "PowerShell",
        "Python",
        "Cybersecurity",
        "Microsoft 365",
      ],
    },
  ];

  return (
    <motion.section
      id="education"
      className="max-w-6xl mx-auto px-6 py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
        <span className="h-3 w-3 rounded-full bg-sky-400 animate-pulse" />
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Education & Professional Development
        </h2>
      </div>

      <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-5xl mx-auto mb-12 text-left md:text-center">
        Continuous learning has been a key part of my professional journey,
        helping me stay current with emerging technologies across cloud,
        infrastructure, automation, artificial intelligence and cybersecurity.
      </p>

      <div className="space-y-8">
        {educationCards.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
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
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
              {item.title}
            </h3>

            <p className="text-sky-400 text-lg font-medium mb-4">
              {item.institution}
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              {item.description}
            </p>

            <div className="flex flex-wrap gap-3">
              {item.tags.map((tag) => (
                <span
                  key={tag}
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
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Education;