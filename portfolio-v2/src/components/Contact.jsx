function Contact() {
  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Contact
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
        Whether you'd like to discuss cloud technologies,
        infrastructure projects, automation solutions, or
        potential opportunities, I'd be happy to connect.
      </p>

      <div
        className="
          max-w-6xl
          mx-auto
          bg-slate-800/80
          backdrop-blur-sm
          border border-slate-700
          rounded-2xl
          p-6 md:p-8
        "
      >
        <form className="space-y-6">

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-slate-300 mb-2"
            >
              Name
            </label>

            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className="
                w-full
                bg-slate-700
                border border-slate-600
                rounded-xl
                px-4
                py-3
                text-white
                placeholder-slate-400
                focus:outline-none
                focus:border-sky-400
              "
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-300 mb-2"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              className="
                w-full
                bg-slate-700
                border border-slate-600
                rounded-xl
                px-4
                py-3
                text-white
                placeholder-slate-400
                focus:outline-none
                focus:border-sky-400
              "
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-slate-300 mb-2"
            >
              Subject
            </label>

            <input
              id="subject"
              type="text"
              placeholder="How can I help?"
              className="
                w-full
                bg-slate-700
                border border-slate-600
                rounded-xl
                px-4
                py-3
                text-white
                placeholder-slate-400
                focus:outline-none
                focus:border-sky-400
              "
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-slate-300 mb-2"
            >
              Message
            </label>

            <textarea
              id="message"
              rows="6"
              placeholder="Tell me about your project, opportunity, or question..."
              className="
                w-full
                bg-slate-700
                border border-slate-600
                rounded-xl
                px-4
                py-3
                text-white
                placeholder-slate-400
                focus:outline-none
                focus:border-sky-400
                resize-none
              "
            ></textarea>
          </div>

          <div className="flex justify-center md:justify-end">

            <button
              type="submit"
              className="
                w-full
                md:w-auto
                bg-sky-600
                hover:bg-sky-500
                transition
                px-8
                py-3
                rounded-xl
                font-medium
              "
            >
              Send Message
            </button>

          </div>

        </form>
      </div>
    </section>
  );
}

export default Contact;