import { motion } from "framer-motion";

function Experience() {
  const experiences = [
    {
      role: "IT Field Services & Deployment Engineer",
      company: "Enbridge | Adelaide, SA",
      period: "May 2026 - Present",
      summary:
        "Delivering infrastructure modernization and deployment projects including Windows 11 migrations, Microsoft Intune Autopilot implementations, network rollouts, POS systems, telephony, CCTV and enterprise site implementations.",
      highlights: [
        "Infrastructure Modernization",
        "Windows 11 Migration",
        "Microsoft Intune",
        "Network Deployment",
      ],
    },
    {
      role: "Cloud Support Engineer",
      company: "Thought Machine | Singapore",
      period: "Jun 2021 - Feb 2025",
      summary:
        "Supported enterprise banking platforms across AWS, GCP and Kubernetes environments while leveraging Terraform, automation, observability tooling and cloud-native technologies.",
      highlights: [
        "AWS",
        "Kubernetes",
        "Terraform",
        "Python & Bash",
      ],
    },
    {
      role: "Technical Support Engineer",
      company: "Lumen Technologies | Singapore",
      period: "Mar 2017 - Jun 2021",
      summary:
        "Delivered Level 2 infrastructure support across Windows Server, Linux, VMware and Active Directory environments for enterprise customers.",
      highlights: [
        "Windows Server",
        "Linux",
        "VMware",
        "Incident Response",
      ],
    },
    {
      role: "Associate Engineer",
      company: "Lumen Technologies | Singapore",
      period: "Dec 2011 - Mar 2017",
      summary:
        "Provided frontline infrastructure operations, hosting support, incident triage and maintenance across Windows and Linux environments.",
      highlights: [
        "Hosting Support",
        "Windows",
        "Linux",
        "Operations",
      ],
    },
    {
      role: "Technical Support Engineer",
      company: "iConz-Webvisions | Singapore",
      period: "Jun 2010 - Dec 2011",
      summary:
        "Supported web hosting and infrastructure environments across Linux and Windows platforms including DNS, email systems, VMware and data centre operations.",
      highlights: [
        "Linux Hosting",
        "Windows Server",
        "DNS & Email",
        "VMware",
      ],
    },
  ];

  return (
    <motion.section
      id="experience"
      className="max-w-6xl mx-auto px-6 py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
        <span className="h-3 w-3 rounded-full bg-sky-400 animate-pulse" />
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Professional Experience
        </h2>
      </div>

      <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-5xl mx-auto mb-12 text-left md:text-center">
        Infrastructure & Cloud Support Engineer with 16+ years of experience
        delivering enterprise support, cloud operations, infrastructure
        modernization and deployment services.
      </p>

      <div className="space-y-8">
        {experiences.map((job, index) => (
          <motion.div
            key={`${job.company}-${job.role}`}
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
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-4">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {job.role}
                </h3>
                <p className="text-sky-400 text-lg font-medium">
                  {job.company}
                </p>
              </div>

              <span className="self-start text-slate-400 bg-slate-700/70 border border-slate-600/50 px-4 py-1.5 rounded-lg text-sm font-medium">
                {job.period}
              </span>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              {job.summary}
            </p>

            <div className="flex flex-wrap gap-3">
              {job.highlights.map((item) => (
                <span
                  key={item}
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
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Experience;