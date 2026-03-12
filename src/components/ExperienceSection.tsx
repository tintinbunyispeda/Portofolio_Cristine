import { motion } from "framer-motion";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", duration: 0.4, bounce: 0 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-10 text-center">Experience</h2>

        <div className="bg-card rounded-[20px] p-6 sm:p-8 card-shadow">
          <p className="text-sm font-medium text-primary mb-1">Internship</p>
          <h3 className="text-xl font-bold text-foreground mb-1">Talent Acquisition Intern</h3>
          <p className="text-sm text-muted-foreground mb-4">President University's Internship and Career Center (ICC)</p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Reviewed 1,000+ resumes using structured evaluation criteria to identify skill patterns and competency gaps.
            Contributed to improving candidate evaluation efficiency through systematic resume screening.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
