import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="border-t border-slate-800 bg-slate-900/50 mt-24 relative">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col items-center text-center">
          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            title="Back to Top"
            className="
              mb-8
              p-3
              bg-slate-800
              hover:bg-sky-500
              text-slate-300
              hover:text-white
              rounded-full
              border
              border-slate-700
              hover:border-sky-400
              transition-all
              duration-300
              hover:scale-110
              shadow-md
            "
          >
            <FaArrowUp className="text-lg" />
          </button>

          {/* Header Info */}
          <h3 className="text-2xl font-bold text-white mb-2">
            Luzon Arcilla
          </h3>

          <p className="text-sky-400 font-medium mb-4">
            Infrastructure & Cloud Support Engineer
          </p>

          <p className="text-slate-400 text-sm md:text-base max-w-md mb-6">
            AWS • Kubernetes • Terraform • Azure • Automation
          </p>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-slate-400">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-sky-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8 text-2xl">
            <a
              href="https://github.com/zenzired"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub Profile"
              className="
                text-slate-400
                hover:text-sky-400
                hover:scale-110
                transition-all
                duration-200
              "
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/luzon-arcilla"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn Profile"
              className="
                text-slate-400
                hover:text-sky-400
                hover:scale-110
                transition-all
                duration-200
              "
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:luzon.arcilla@outlook.com"
              aria-label="Email"
              title="Send Email"
              className="
                text-slate-400
                hover:text-sky-400
                hover:scale-110
                transition-all
                duration-200
              "
            >
              <FaEnvelope />
            </a>
          </div>

          {/* Footer Metadata */}
          <div className="text-slate-500 text-xs md:text-sm space-y-1">
            <p>Built with React, Vite & Tailwind CSS</p>
            <p>Hosted on Azure Static Web Apps</p>
            <p>© {new Date().getFullYear()} Luzon Arcilla. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;