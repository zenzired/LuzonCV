import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-10">

        <div className="text-center">

          <h3 className="text-2xl font-bold text-white mb-2">
            Luzon Arcilla
          </h3>

          <p className="text-sky-400 mb-4">
            Infrastructure & Cloud Support Engineer
          </p>

          <p className="text-slate-400 mb-6">
            AWS • Kubernetes • Terraform • Azure • Automation
          </p>

          <div className="flex justify-center gap-8 mb-8 text-2xl">

            <a
              href="https://github.com/zenzired"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub Profile"
              className="
                text-slate-300
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
                text-slate-300
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
                text-slate-300
                hover:text-sky-400
                hover:scale-110
                transition-all
                duration-200
              "
            >
              <FaEnvelope />
            </a>

          </div>

          <div className="text-slate-500 text-sm space-y-2">

            <p>
              Built with React, Vite and Tailwind CSS
            </p>

            <p>
              Hosted on Azure Static Web Apps
            </p>

            <p>
              © {new Date().getFullYear()} Luzon Arcilla
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;