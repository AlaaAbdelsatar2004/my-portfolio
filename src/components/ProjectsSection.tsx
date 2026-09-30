import { FolderKanban, Github, ExternalLink, HeartPulse, Car, Stethoscope, Plane, Languages, Scan, FileSpreadsheet } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    icon: Car,
    title: "Traffic Sign Detection & MLOps",
    description: "Real-time Traffic Sign Detection system using YOLOv8 on GTSDB dataset, achieving 95% accuracy. Built end-to-end MLOps pipeline serving via FastAPI, containerized with Docker.",
    tech: ["YOLOv8", "FastAPI", "Docker", "Streamlit", "MLOps"],
    link: "https://github.com/AlaaAbdelsatar2004/Machine-Learning-Internship-Tasks/tree/main/Task_8_Traffic_Sign_Recognition",
    badge: "95% Accuracy"
  },
  {
    icon: Stethoscope,
    title: "PneumoAI",
    description: "EfficientNet-based Deep Learning model to classify Chest X-ray images into Normal, Bacterial, and Viral Pneumonia. Achieved 83.73% Validation Accuracy with real-time Streamlit app.",
    tech: ["EfficientNet", "TensorFlow", "OpenCV", "Streamlit"],
    link: "https://github.com/AlaaAbdelsatar2004/pneumonia-xray-detector",
    demo: "https://xray-detectorpneumoai-app-myzpgpnz4prappjpiffbq5n.streamlit.app/",
    badge: "83.73% Accuracy"
  },
  {
    icon: HeartPulse,
    title: "Stroke Risk Predictor",
    description: "10-year stroke risk prediction model using XGBoost and Random Forest. Handled severe class imbalance (>95%) with SMOTE, boosting Recall from ~0.40 to 0.85–0.90. Deployed via Streamlit.",
    tech: ["XGBoost", "Random Forest", "SMOTE", "Streamlit"],
    link: "https://github.com/AlaaAbdelsatar2004/-stroke-risk-predicto",
    demo: "https://stroke-risk-predicto-app.streamlit.app/",
    badge: "Recall 0.85+"
  },
  {
    icon: Languages,
    title: "Translator App",
    description: "AI-powered translation application supporting multiple languages with real-time text translation. Built with modern NLP techniques and an interactive user interface.",
    tech: ["Python", "NLP", "Streamlit", "Transformers"],
    link: "https://github.com/AlaaAbdelsatar2004/AI-Translator-App",
    demo: "https://ai-translator-alaa.streamlit.app/",
    badge: "NLP"
  },
  {
    icon: Plane,
    title: "AI Recommendation System",
    description: "AI-powered recommendation engine for a travel app suggesting accommodations based on user interests. Used TF-IDF, Cosine Similarity, and TensorFlow Neural Network. Deployed via FastAPI on Hugging Face.",
    tech: ["TensorFlow", "TF-IDF", "FastAPI", "Hugging Face"],
    link: "https://github.com/AlaaAbdelsatar2004/graduation-project",
    badge: "Travel App"
  },
  {
    icon: Scan,
    title: "Coronary Heart Surgery Outliers",
    description: "Applied Keras Autoencoder architecture to detect anomalies in clinical datasets, identifying 15% unusual mortality trends. Cleaned data using KNN imputation across 10+ risk factors.",
    tech: ["Autoencoders", "Keras", "Anomaly Detection", "Data Cleaning"],
    link: "https://github.com/AlaaAbdelsatar2004/cardiac-surgery-analysis1",
    badge: "15% Anomalies"
  },
  {
    icon: FileSpreadsheet,
    title: "Interactive Classification Web App",
    description: "Streamlit web app supporting CSV/Excel uploads (10k+ rows) with automated preprocessing. Compared Logistic Regression, KNN, and SVM, improving accuracy by 12% on unseen datasets.",
    tech: ["Streamlit", "Scikit-learn", "Pandas", "Data Processing"],
    link: "https://github.com/AlaaAbdelsatar2004/classification-app-streamlit",
    demo: "https://classification-app-app.streamlit.app/",
    badge: "10k+ Rows"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 sm:py-20 relative overflow-hidden bg-background">
      {/* Ambient Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] font-semibold tracking-wider uppercase mb-4">
            <FolderKanban size={13} />
            <span>Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading mb-4 text-foreground tracking-tight leading-[1.1]">
            Featured <span className="text-gradient">AI Projects</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base font-mono max-w-xl mx-auto">
            A collection of machine learning, deep learning, and MLOps applications built to solve real-world problems.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.08 * idx }}
                className="group relative rounded-2xl bg-card/60 backdrop-blur-xl p-5 border border-border/60 hover:border-primary/50 hover:shadow-[0_12px_35px_rgba(var(--primary),0.18)] hover:-translate-y-1 transition-all duration-300 overflow-hidden shadow-md flex flex-col"
              >
                {/* Corner glow */}
                <div className="absolute -top-12 -right-12 w-28 h-28 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/30 transition-all duration-500 pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shrink-0 shadow-[0_0_25px_rgba(16,185,129,0.25)]">
                      <Icon size={20} />
                    </div>
                    <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-secondary/80 border border-border/50 text-muted-foreground">
                      {project.badge}
                    </span>
                  </div>

                  <h3 className="font-bold text-foreground text-base font-heading group-hover:text-primary transition-colors leading-tight mb-2">
                    {project.title}
                  </h3>

                  <p className="text-[12px] text-muted-foreground leading-relaxed font-mono mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-1.5 py-0.5 text-[10px] rounded-md bg-secondary/60 border border-border/50 hover:border-primary/40 hover:bg-primary/10 text-muted-foreground hover:text-foreground transition-all duration-200 font-mono font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 mt-auto pt-3 border-t border-border/40">
                    {project.demo && project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground text-xs font-bold transition-all hover:opacity-90 hover:-translate-y-0.5 shadow-sm"
                      >
                        <ExternalLink size={12} /> Live Demo
                      </a>
                    )}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-border/60 bg-secondary/60 text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all text-xs font-bold ${(!project.demo || project.demo === "#") ? "flex-1" : ""}`}
                    >
                      <Github size={12} /> GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;