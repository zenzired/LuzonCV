function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-900 text-white px-6">
      <div className="max-w-4xl text-center">

        <h1 className="text-6xl md:text-7xl font-bold mb-4">
          Luzon Arcilla
        </h1>

        <h2 className="text-2xl md:text-3xl text-sky-400 mb-4">
          Cloud Support Engineer
        </h2>

        <p className="text-lg text-slate-300 mb-2">
          Adelaide, South Australia
        </p>

        <p className="text-xl text-slate-300 mb-8">
          Azure • AWS • PowerShell • Kubernetes
        </p>

        <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
          Building reliable cloud solutions, automation workflows,
          and modern support experiences while exploring
          cybersecurity and artificial intelligence technologies.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="bg-sky-600 hover:bg-sky-500 transition px-6 py-3 rounded-lg font-medium"
          >
            View Resume
          </a>

          <a
            href="https://github.com/zenzired"
            target="_blank"
            rel="noreferrer"
            className="border border-slate-500 hover:border-sky-400 transition px-6 py-3 rounded-lg"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/luzon-arcilla"
            target="_blank"
            rel="noreferrer"
            className="border border-slate-500 hover:border-sky-400 transition px-6 py-3 rounded-lg"
          >
            LinkedIn
          </a>

        </div>

      </div>
    </section>
  );
}

export default Hero;