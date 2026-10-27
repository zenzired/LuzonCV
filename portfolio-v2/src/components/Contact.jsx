import { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ loading: false, success: null, error: null });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      const endpoint =
        import.meta.env.VITE_API_ENDPOINT || "/api/ContactForm";

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        setStatus({ loading: false, success: "Message sent successfully!", error: null });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({ loading: false, success: null, error: result.error || "Failed to send message." });
      }
    } catch (err) {
      setStatus({ loading: false, success: null, error: "Network error. Please try again." });
    }
  };

  return (
    <motion.section
      id="contact"
      className="max-w-6xl mx-auto px-6 py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
        <span className="h-3 w-3 rounded-full bg-sky-400 animate-pulse" />
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Contact
        </h2>
      </div>

      <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-5xl mx-auto mb-12 text-left md:text-center">
        Whether you'd like to discuss cloud technologies, infrastructure
        projects, automation solutions, or potential opportunities, I'd be happy
        to connect.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="
          max-w-6xl
          mx-auto
          bg-slate-800/60
          backdrop-blur-md
          border border-slate-700/80
          hover:border-sky-500/40
          rounded-2xl
          p-6 md:p-10
          shadow-lg
          transition-all
          duration-300
        "
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {status.success && (
            <div className="p-4 bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 rounded-xl">
              {status.success}
            </div>
          )}
          {status.error && (
            <div className="p-4 bg-rose-500/20 border border-rose-500/50 text-rose-300 rounded-xl">
              {status.error}
            </div>
          )}

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className="w-full bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              required
              value={formData.subject}
              onChange={handleChange}
              placeholder="How can I help?"
              className="w-full bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows="6"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project, opportunity, or question..."
              className="w-full bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition resize-none"
            ></textarea>
          </div>

          <div className="flex justify-center md:justify-end">
            <button
              type="submit"
              disabled={status.loading}
              className="w-full md:w-auto bg-sky-600 hover:bg-sky-500 hover:scale-105 shadow-md shadow-sky-600/20 transition-all px-8 py-3 rounded-xl font-medium disabled:opacity-50"
            >
              {status.loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </motion.div>
    </motion.section>
  );
}

export default Contact;