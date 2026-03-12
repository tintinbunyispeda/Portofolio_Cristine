import { motion } from "framer-motion";
import { Code2, Brain, Globe, Smartphone, Wrench } from "lucide-react";

const categories = [
  { title: "Programming", icon: Code2, items: ["Python", "JavaScript", "TypeScript", "PHP", "Java", "C++"] },
  { title: "AI & Data", icon: Brain, items: ["Computer Vision", "CNN", "YOLOv8", "Machine Learning"] },
  { title: "Web Development", icon: Globe, items: ["React", "MySQL", "REST APIs"] },
  { title: "Mobile & Cloud", icon: Smartphone, items: ["Firebase", "Android Studio"] },
  { title: "Tools", icon: Wrench, items: ["Git", "VS Code"] },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, duration: 0.4, bounce: 0 } },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 section-container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", duration: 0.4, bounce: 0 }}
        className="text-3xl sm:text-4xl font-bold text-foreground mb-10 text-center"
      >
        Technical Skills
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
      >
        {categories.map((cat) => (
          <motion.div
            key={cat.title}
            variants={item}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0 }}
            className="bg-card rounded-[20px] p-6 card-shadow hover:card-shadow-hover transition-shadow"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <cat.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-bold text-foreground mb-3">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((s) => (
                <span key={s} className="inline-flex items-center h-7 px-3 rounded-md bg-secondary text-secondary-foreground text-xs font-medium">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SkillsSection;
