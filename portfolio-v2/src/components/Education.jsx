function Education() {
  return (
    <section
      id="education"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Education & Professional Development
      </h2>

      <p
        className="
          text-slate-300
          text-lg
          md:text-xl
          leading-relaxed
          max-w-5xl
          mx-auto
          mb-12
          text-left
          md:text-center
        "
      >
        Continuous learning has been a key part of my
        professional journey, helping me stay current
        with emerging technologies across cloud,
        infrastructure, automation, artificial
        intelligence and cybersecurity.
      </p>

      <div className="space-y-8">

        <div
          className="
            bg-slate-800/80
            backdrop-blur-sm
            border border-slate-700
            rounded-2xl
            p-6
            hover:border-sky-400
            hover:shadow-lg
            hover:shadow-sky-500/10
            transition-all
            duration-300
          "
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            Post Graduate Program in Artificial Intelligence
            & Machine Learning
          </h3>

          <p className="text-sky-400 text-lg font-medium mb-4">
            California Institute of Technology (Caltech)
          </p>

          <p className="text-slate-300 leading-relaxed">
            Advanced studies focused on Artificial
            Intelligence, Machine Learning, Data Science,
            Predictive Analytics and practical AI
            applications.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">

            <span className="bg-slate-700 text-sky-400 px-3 py-2 rounded-full text-sm font-medium">
              Artificial Intelligence
            </span>

            <span className="bg-slate-700 text-sky-400 px-3 py-2 rounded-full text-sm font-medium">
              Machine Learning
            </span>

            <span className="bg-slate-700 text-sky-400 px-3 py-2 rounded-full text-sm font-medium">
              Data Science
            </span>

            <span className="bg-slate-700 text-sky-400 px-3 py-2 rounded-full text-sm font-medium">
              Analytics
            </span>

          </div>
        </div>

        <div
          className="
            bg-slate-800/80
            backdrop-blur-sm
            border border-slate-700
            rounded-2xl
            p-6
            hover:border-sky-400
            hover:shadow-lg
            hover:shadow-sky-500/10
            transition-all
            duration-300
          "
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            Bachelor of Science in Electronics &
            Communications Engineering
          </h3>

          <p className="text-sky-400 text-lg font-medium mb-4">
            AMA University
          </p>

          <p className="text-slate-300 leading-relaxed">
            Developed a strong technical foundation in
            engineering principles, communications systems,
            networking concepts, analytical problem solving
            and technology troubleshooting.
          </p>
        </div>

        <div
          className="
            bg-slate-800/80
            backdrop-blur-sm
            border border-slate-700
            rounded-2xl
            p-6
            hover:border-sky-400
            hover:shadow-lg
            hover:shadow-sky-500/10
            transition-all
            duration-300
          "
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
            Professional Development
          </h3>

          <div className="flex flex-wrap gap-3">

            <span className="bg-slate-700 text-sky-400 px-3 py-2 rounded-full text-sm font-medium">
              AWS
            </span>

            <span className="bg-slate-700 text-sky-400 px-3 py-2 rounded-full text-sm font-medium">
              Azure
            </span>

            <span className="bg-slate-700 text-sky-400 px-3 py-2 rounded-full text-sm font-medium">
              Kubernetes
            </span>

            <span className="bg-slate-700 text-sky-400 px-3 py-2 rounded-full text-sm font-medium">
              Terraform
            </span>

            <span className="bg-slate-700 text-sky-400 px-3 py-2 rounded-full text-sm font-medium">
              PowerShell
            </span>

            <span className="bg-slate-700 text-sky-400 px-3 py-2 rounded-full text-sm font-medium">
              Python
            </span>

            <span className="bg-slate-700 text-sky-400 px-3 py-2 rounded-full text-sm font-medium">
              Cybersecurity
            </span>

            <span className="bg-slate-700 text-sky-400 px-3 py-2 rounded-full text-sm font-medium">
              Microsoft 365
            </span>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Education;