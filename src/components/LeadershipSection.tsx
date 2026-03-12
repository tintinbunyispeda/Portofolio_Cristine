import { motion } from "framer-motion";

const LeadershipSection = () => {
  return (
    <section className="py-16 section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", duration: 0.4, bounce: 0 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-10 text-center">Leadership</h2>

        <div className="bg-card rounded-[20px] p-6 sm:p-8 card-shadow">
          <p className="text-sm font-medium text-primary mb-1">Organization</p>
          <h3 className="text-xl font-bold text-foreground mb-1">Vice Chairperson</h3>
          <p className="text-sm text-muted-foreground mb-4">Buddhist Student Association (KMB Ashokavardana)</p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Responsible for managing internal communication, maintaining external partnerships, resolving organizational issues,
            and helping design operational workflows for the organization.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default LeadershipSection;
