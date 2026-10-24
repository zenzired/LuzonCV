function Skills() {
  const skills = [
    "Azure",
    "AWS",
    "PowerShell",
    "Python",
    "Kubernetes",
    "Windows",
    "Linux",
    "Microsoft 365",
    "DNS",
    "Networking"
  ];

  return (
    <section
      id="skills"
      className="max-w-5xl mx-auto px-6 py-24"
    >
      <h2 className="text-4xl font-bold mb-8">
        Skills
      </h2>

      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-slate-800 text-sky-400 px-4 py-2 rounded-lg"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;