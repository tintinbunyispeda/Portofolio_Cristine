import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:Cristinevalentina@gmail.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.email}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="py-32 section-container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", duration: 0.4, bounce: 0 }}
        className="text-3xl sm:text-4xl font-bold text-foreground mb-10 text-center"
      >
        Get in Touch
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", duration: 0.4, bounce: 0 }}
        className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        {/* Links */}
        <div className="flex flex-col gap-4 justify-center">
          <a href="mailto:Cristinevalentina@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
            <Mail className="w-5 h-5 text-primary" /> Cristinevalentina@gmail.com
          </a>
          <a href="https://github.com/tintinbunyispeda" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
            <Github className="w-5 h-5 text-primary" /> github.com/tintinbunyispeda
          </a>
          <a href="https://linkedin.com/in/cristine-valentina" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin className="w-5 h-5 text-primary" /> linkedin.com/in/cristine-valentina
          </a>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="h-12 rounded-lg px-4 bg-background text-foreground text-sm input-border focus:input-focus outline-none transition-shadow"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="h-12 rounded-lg px-4 bg-background text-foreground text-sm input-border focus:input-focus outline-none transition-shadow"
          />
          <textarea
            placeholder="Your Message"
            required
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="rounded-lg px-4 py-3 bg-background text-foreground text-sm input-border focus:input-focus outline-none transition-shadow resize-none"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98, y: 0 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0 }}
            className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full bg-primary text-primary-foreground font-medium text-sm btn-shadow hover:btn-shadow-hover transition-shadow self-start"
          >
            <Send className="w-4 h-4" /> Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactSection;
