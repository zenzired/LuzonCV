import { motion } from "framer-motion";

function Education() {
  const educationCards = [
    {
      title:
        "Post Graduate Program in Artificial Intelligence & Machine Learning",
      institution:
        "California Institute of Technology (Caltech)",
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
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Education & Professional Development
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
        Continuous learning has been a key part of my
        professional journey, helping me stay current
        with emerging technologies across cloud,
        infrastructure, automation, artificial
        intelligence and cybersecurity.
      </p>

      <div className="space-y-8">
        {educationCards.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{
              opacity: 0,
              y: 150,
              scale: 0.85,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: false,
              amount: 0.2,
            }}
            transition={{
              duration: 1.2,
              delay: index * 0.25,
              ease: "easeOut",
            }}
            className="
              bg-slate-800/80
              backdrop-blur-sm
              border border-slate-700
              rounded-2xl
              p-6
              hover:border-sky-400
              hover:shadow-lg
              hover:shadow-sky-500/10
              transition-all
              duration-300
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
                    bg-slate-700
                    text-sky-400
                    px-3
                    py-2
                    rounded-full
                    text-sm
                    font-medium
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