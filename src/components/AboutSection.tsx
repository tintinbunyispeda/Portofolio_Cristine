import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", duration: 0.4, bounce: 0 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">About Me</h2>
        <p className="text-muted-foreground leading-relaxed">
          Computer Science student focused on Artificial Intelligence and intelligent system development.
          Experienced in computer vision, machine learning integration, and full-stack development.
          Passionate about building practical AI solutions and scalable software systems.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;
