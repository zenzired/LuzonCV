function Navbar() {
  return (
    <nav
      className="
        fixed
        top-0
        w-full
        bg-slate-900/90
        backdrop-blur-sm
        border-b
        border-slate-800
        z-50
      "
    >
      <div
        className="
          max-w-6xl
          mx-auto
          px-6
          py-4
          flex
          justify-between
          items-center
        "
      >
        <a
          href="#"
          className="
            text-lg
            md:text-xl
            font-bold
            text-white
            hover:text-sky-400
            transition
          "
        >
          Luzon Arcilla
        </a>

        <div
          className="
            hidden
            md:flex
            gap-6
            text-slate-300
            text-sm
            lg:text-base
          "
        >
          <a
            href="#about"
            className="hover:text-sky-400 transition"
          >
            About
          </a>

          <a
            href="#skills"
            className="hover:text-sky-400 transition"
          >
            Skills
          </a>

          <a
            href="#experience"
            className="hover:text-sky-400 transition"
          >
            Experience
          </a>

          <a
            href="#education"
            className="hover:text-sky-400 transition"
          >
            Education
          </a>

          <a
            href="#projects"
            className="hover:text-sky-400 transition"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="hover:text-sky-400 transition"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;