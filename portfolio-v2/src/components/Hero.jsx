import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaFilePdf,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-900 text-white px-6">
      <motion.div
        className="max-w-5xl text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/*
        Uncomment when ready to display your profile photo

        <img
          src="/profile.jpg"
          alt="Luzon Arcilla"
          className="w-40 h-40 rounded-full object-cover mx-auto mb-8 border-4 border-sky-500 shadow-xl"
        />
        */}

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Luzon Arcilla
        </motion.h1>

        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl text-sky-400 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Infrastructure & Cloud Support Engineer
        </motion.h2>

        <motion.p
          className="text-base md:text-lg text-slate-300 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Adelaide, South Australia
        </motion.p>

        <motion.p
          className="text-lg md:text-xl text-slate-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          AWS · Kubernetes · Terraform
          <br className="md:hidden" />
          <span className="hidden md:inline"> · </span>
          Azure · Automation
        </motion.p>

        <motion.p
          className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-10 text-left md:text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Infrastructure & Cloud Support Engineer with 16+ years of
          experience across managed services, enterprise support,
          cloud platforms, infrastructure modernization, and deployment
          projects. Passionate about automation, cloud technologies,
          cybersecurity, and continuous learning through hands-on
          projects and emerging technologies.
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-500 hover:scale-105 transition-all px-6 py-3 rounded-lg font-medium"
          >
            <FaFilePdf />
            View Resume
          </a>

          <a
            href="https://github.com/zenzired"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-slate-500 hover:border-sky-400 hover:scale-105 transition-all px-6 py-3 rounded-lg"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/luzon-arcilla"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-slate-500 hover:border-sky-400 hover:scale-105 transition-all px-6 py-3 rounded-lg"
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