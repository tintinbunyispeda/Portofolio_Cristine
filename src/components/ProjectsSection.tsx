import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Eye, X } from "lucide-react";

import projectHospital from "@/assets/project-hospital.jpg";
import projectProductivity from "@/assets/project-productivity.jpg";
import projectFace from "@/assets/project-facerecog.jpg";
import projectFood from "@/assets/project-food.jpg";

const projects = [
  {
    title: "Hospital Management System",
    description: "Full-stack web application for managing doctors, patients, and appointments with database CRUD operations and form validation.",
    details: "Built a comprehensive hospital management platform featuring patient registration, doctor scheduling, appointment booking, and medical record tracking. Implemented secure CRUD operations with input validation, session management, and responsive dashboard views for administrators and medical staff.",
    stack: ["PHP", "MySQL", "JavaScript"],
    image: projectHospital,
  },
  {
    title: "Productivity Mobile App",
    description: "Android productivity application that allows users to manage tasks and productivity data using Firebase for real-time cloud storage and synchronization.",
    details: "Developed a full-featured Android productivity app with task creation, categorization, priority levels, and progress tracking. Integrated Firebase Realtime Database for cloud synchronization across devices, with offline support and push notifications for deadline reminders.",
    stack: ["Java", "Firebase", "Android Studio"],
    image: projectProductivity,
  },
  {
    title: "Study Buddy – AI Face Recognition",
    description: "AI-powered study monitoring system using a custom CNN face recognition model for identity verification and focus monitoring.",
    details: "Designed and trained a custom Convolutional Neural Network for face embedding extraction and identity verification. The system monitors study sessions by verifying the user's identity through facial recognition and tracks focus levels using gaze detection algorithms.",
    stack: ["Python", "CNN", "Computer Vision"],
    image: projectFace,
  },
  {
    title: "AI Food Detection & Nutrition Analyzer",
    description: "AI system using YOLOv8 to detect food items from images and calculate nutritional values such as calories, protein, carbohydrates, and fat.",
    details: "Implemented a YOLOv8-based object detection pipeline trained on food datasets to identify individual food items from photographs. Integrated a nutrition database API to calculate and display detailed macronutrient breakdowns. Built a React + TypeScript frontend for image upload and results visualization.",
    stack: ["Python", "YOLOv8", "React", "TypeScript"],
    image: projectFood,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, duration: 0.4, bounce: 0 } },
};

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <>
      <section id="projects" className="py-16 section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", duration: 0.4, bounce: 0 }}
          className="text-3xl sm:text-4xl font-bold text-foreground mb-10 text-center"
        >
          Projects
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={item}
              whileHover={{ scale: 1.02, y: -6 }}
              transition={{ type: "spring", duration: 0.4, bounce: 0 }}
              className="group bg-card rounded-[20px] overflow-hidden card-shadow hover:card-shadow-hover transition-shadow"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((t) => (
                    <span key={t} className="inline-flex items-center h-7 px-3 rounded-md bg-secondary text-secondary-foreground text-xs font-medium">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/tintinbunyispeda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  >
                    GitHub <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" /> View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/40 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0 }}
            className="bg-card rounded-[20px] max-w-lg w-full overflow-hidden card-shadow"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-52">
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-card transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-2">{selectedProject.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{selectedProject.details}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.stack.map((t) => (
                  <span key={t} className="inline-flex items-center h-7 px-3 rounded-md bg-secondary text-secondary-foreground text-xs font-medium">
                    {t}
                  </span>
                ))}
              </div>
              <a
                href="https://github.com/tintinbunyispeda"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
              >
                View on GitHub <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default ProjectsSection;
