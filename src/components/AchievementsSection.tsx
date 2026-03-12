import { motion } from "framer-motion";
import { Award } from "lucide-react";

const AchievementsSection = () => {
  return (
    <section className="py-16 section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", duration: 0.4, bounce: 0 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-10 text-center">Achievements</h2>

        <div className="bg-card rounded-[20px] p-6 sm:p-8 card-shadow flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
            <Award className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground mb-1">Jababeka Scholarship Awardee</h3>
            <p className="text-sm text-muted-foreground">2024</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AchievementsSection;
