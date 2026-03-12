import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const spring = { type: "spring" as const, duration: 0.4, bounce: 0 };

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-svh flex items-center section-container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center w-full py-20">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.1 }}
          className="order-2 md:order-1"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
            Portfolio
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Cristine Valentina
          </h1>
          <p className="text-lg text-muted-foreground font-medium mb-6">
            AI Engineer · Computer Vision Developer · Full Stack Developer
          </p>
          <p className="text-muted-foreground max-w-[65ch] mb-8 leading-relaxed">
            Computer Science student passionate about Artificial Intelligence, Computer Vision, and intelligent software systems.
            Experienced in building AI-powered applications, full-stack web systems, and mobile applications.
          </p>

          <div className="flex flex-wrap gap-3">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98, y: 0 }}
              transition={spring}
              className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-primary text-primary-foreground font-medium text-sm btn-shadow hover:btn-shadow-hover transition-shadow"
            >
              View Projects <ArrowDown className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98, y: 0 }}
              transition={spring}
              className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-secondary text-secondary-foreground font-medium text-sm btn-shadow hover:btn-shadow-hover transition-shadow"
            >
              <Download className="w-4 h-4" /> Download CV
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98, y: 0 }}
              transition={spring}
              className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-secondary text-secondary-foreground font-medium text-sm btn-shadow hover:btn-shadow-hover transition-shadow"
            >
              <Mail className="w-4 h-4" /> Contact Me
            </motion.a>
          </div>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...spring, delay: 0.25 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="gradient-border rounded-full p-1">
            <img
              src={profilePhoto}
              alt="Cristine Valentina"
              className="w-40 h-40 sm:w-52 sm:h-52 lg:w-64 lg:h-64 rounded-full object-cover bg-card"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
