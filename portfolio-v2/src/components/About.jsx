import { motion } from "framer-motion";

function About() {
  const paragraphVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="about"
      className="max-w-6xl mx-auto px-6 py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
        <span className="h-3 w-3 rounded-full bg-sky-400 animate-pulse" />
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          About Me
        </h2>
      </div>

      <motion.div
        variants={paragraphVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="
          text-slate-300
          text-lg
          md:text-xl
          leading-relaxed
          max-w-5xl
          mx-auto
          space-y-6
          text-left
          md:text-center
        "
      >
        <p>
          I'm an Infrastructure & Cloud Support Engineer based in Adelaide,
          South Australia, with a passion for solving complex technical
          challenges and finding practical ways to improve reliability,
          efficiency, and user experience through technology.
        </p>

        <p>
          Throughout my career, I've worked across managed services, enterprise
          support, cloud platforms, infrastructure deployments, and
          modernization projects. I enjoy troubleshooting difficult issues,
          understanding how systems work, and building automation solutions
          that reduce manual effort and improve operational outcomes.
        </p>

        <p>
          Outside of my day-to-day role, I'm continually exploring new
          technologies including cloud architecture, cybersecurity, artificial
          intelligence, and machine learning. I enjoy hands-on learning,
          building personal projects, and expanding my skills through
          experimentation and continuous professional development.
        </p>
      </motion.div>
    </motion.section>
  );
}

export default About;