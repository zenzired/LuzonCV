function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-sm border-b border-slate-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="font-bold text-white">
          Luzon Arcilla
        </h1>

        <div className="flex gap-6 text-slate-300">

          <a href="#about" className="hover:text-sky-400">
            About
          </a>

          <a href="#skills" className="hover:text-sky-400">
            Skills
          </a>

          <a href="#projects" className="hover:text-sky-400">
            Projects
          </a>

          <a href="#contact" className="hover:text-sky-400">
            Contact
          </a>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;