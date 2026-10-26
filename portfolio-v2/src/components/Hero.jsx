import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-transparent text-white px-6">
      <motion.div
        className="max-w-5xl text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight"
        >
          Luzon Arcilla
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-xl sm:text-2xl md:text-3xl text-sky-400 mb-4 font-semibold tracking-wide"
        >
          Infrastructure & Cloud Support Engineer
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-slate-300 mb-2"
        >
          Adelaide, South Australia
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-slate-300 mb-8"
        >
          AWS · Kubernetes · Terraform
          <br className="md:hidden" />
          <span className="hidden md:inline"> · </span>
          Azure · Automation
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-10 text-left md:text-center"
        >
          Infrastructure & Cloud Support Engineer with 16+ years of
          experience across managed services, enterprise support, cloud
          platforms, infrastructure modernization, and deployment projects.
          Passionate about automation, cloud technologies, cybersecurity, and
          continuous learning.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex gap-4 justify-center flex-wrap"
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-500 hover:scale-105 shadow-md shadow-sky-600/20 transition-all px-6 py-3 rounded-xl font-medium"
          >
            <FaFilePdf />
            View Resume
          </a>

          <a
            href="https://github.com/zenzired"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-slate-800/80 border border-slate-700 hover:border-sky-400 hover:text-sky-300 hover:scale-105 transition-all px-6 py-3 rounded-xl font-medium"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/luzon-arcilla"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-slate-800/80 border border-slate-700 hover:border-sky-400 hover:text-sky-300 hover:scale-105 transition-all px-6 py-3 rounded-xl font-medium"
          >
            <FaLinkedin />
            LinkedIn
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;