function Experience() {
  const experiences = [
    {
      role: "Cloud Support Engineer",
      company: "Current Role",
      period: "Present",
      description:
        "Supporting cloud technologies, troubleshooting complex technical issues, and improving operational reliability through automation."
    },
    {
      role: "Technical Support Engineer",
      company: "Previous Role",
      period: "Previous Experience",
      description:
        "Provided technical support across Microsoft technologies, Windows environments, and customer-facing support operations."
    },
    {
      role: "Associate Engineer",
      company: "Lumen Technologies",
      period: "Foundation",
      description:
        "Built a strong technical foundation in engineering principles, communications systems, and analytical problem solving."
    }
  ];

  return (
    <section
      id="experience"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <h2 className="text-4xl font-bold mb-12">
        Experience
      </h2>

      <div className="space-y-6">

        {experiences.map((job) => (
          <div
            key={job.role}
            className="bg-slate-800 border border-slate-700 rounded-xl p-6"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3">

              <h3 className="text-2xl font-semibold text-white">
                {job.role}
              </h3>

              <span className="text-sky-400">
                {job.period}
              </span>

            </div>

            <p className="text-slate-300 font-medium mb-3">
              {job.company}
            </p>

            <p className="text-slate-400">
              {job.description}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Experience;