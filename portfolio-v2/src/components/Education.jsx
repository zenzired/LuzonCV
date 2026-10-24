function Education() {
  return (
    <section
      id="education"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <h2 className="text-4xl font-bold mb-12">
        Education & Professional Development
      </h2>

      <div className="space-y-6">

        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <h3 className="text-2xl font-semibold mb-3 text-sky-400">
            Post Graduate Program in AI and Machine Learning
          </h3>

          <p className="text-slate-300 mb-2">
            California Institute of Technology (Caltech)
          </p>

          <p className="text-slate-400">
            Advanced studies in Artificial Intelligence,
            Machine Learning, Predictive Analytics,
            Data Science, and modern AI applications.
          </p>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <h3 className="text-2xl font-semibold mb-3">
            Bachelor of Science in Electronics and
            Communications Engineering
          </h3>

          <p className="text-slate-400">
            Strong foundation in engineering principles,
            communications systems, networking,
            analytical problem solving, and
            technical troubleshooting.
          </p>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <h3 className="text-2xl font-semibold mb-3">
            Professional Development
          </h3>

          <div className="flex flex-wrap gap-3 mt-4">

            <span className="bg-slate-700 text-sky-400 px-3 py-2 rounded-md">
              Azure
            </span>

            <span className="bg-slate-700 text-sky-400 px-3 py-2 rounded-md">
              AWS
            </span>

            <span className="bg-slate-700 text-sky-400 px-3 py-2 rounded-md">
              PowerShell
            </span>

            <span className="bg-slate-700 text-sky-400 px-3 py-2 rounded-md">
              Kubernetes
            </span>

            <span className="bg-slate-700 text-sky-400 px-3 py-2 rounded-md">
              Cybersecurity
            </span>

            <span className="bg-slate-700 text-sky-400 px-3 py-2 rounded-md">
              Microsoft 365
            </span>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Education;