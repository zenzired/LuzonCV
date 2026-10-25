function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-900 text-white px-6">
      <div className="max-w-5xl text-center">

        {/*
        Uncomment when ready to display your profile photo

        <img
          src="/profile.jpg"
          alt="Luzon Arcilla"
          className="
            w-40
            h-40
            rounded-full
            object-cover
            mx-auto
            mb-8
            border-4
            border-sky-500
            shadow-xl
          "
        />
        */}

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
          Luzon Arcilla
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl text-sky-400 mb-4">
          Infrastructure & Cloud Support Engineer
        </h2>

        <p className="text-base md:text-lg text-slate-300 mb-2">
          Adelaide, South Australia
        </p>

        <p className="text-lg md:text-xl text-slate-300 mb-8">
          AWS · Kubernetes · Terraform
          <br className="md:hidden" />
          <span className="hidden md:inline"> · </span>
          Azure · Automation
        </p>

        <p
          className="
            text-slate-300
            text-lg
            md:text-xl
            leading-relaxed
            max-w-4xl
            mx-auto
            mb-10
            text-left
            md:text-center
          "
        >
          Infrastructure & Cloud Support Engineer
          with 16+ years of experience across managed
          services, enterprise support, cloud platforms,
          infrastructure modernization, and deployment
          projects. Passionate about automation, cloud
          technologies, cybersecurity, and continuous
          learning through hands-on projects and emerging
          technologies.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="
              bg-sky-600
              hover:bg-sky-500
              transition
              px-6
              py-3
              rounded-lg
              font-medium
            "
          >
            View Resume
          </a>

          <a
            href="https://github.com/zenzired"
            target="_blank"
            rel="noreferrer"
            className="
              border
              border-slate-500
              hover:border-sky-400
              transition
              px-6
              py-3
              rounded-lg
            "
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/luzon-arcilla"
            target="_blank"
            rel="noreferrer"
            className="
              border
              border-slate-500
              hover:border-sky-400
              transition
              px-6
              py-3
              rounded-lg
            "
          >
            LinkedIn
          </a>

        </div>

      </div>
    </section>
  );
}

export default Hero;