
import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";

// Project categories for filtering
type Category = "All" | "Web" | "Mobile" | "Java" | "PHP" | "Python" | "ML/AI";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const projects = [
    // Featured Web Projects
    {
      title: "Sports Portfolio",
      description: "A responsive sports portfolio website built with React and CSS.",
      fullDescription: "A modern, responsive sports portfolio website built with React and CSS. This project showcases sports achievements, events, and profiles with a clean and interactive user interface. The site features responsive design principles ensuring it works well across all devices and includes dynamic content loading and smooth animations.",
      technologies: ["React", "CSS", "JavaScript", "Responsive Design"],
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      demoLink: "https://siddu-us.vercel.app",
      codeLink: "https://github.com/karravulachandra/sports-portfolio",
      category: "Web",
      featured: true
    },
    {
      title: "Village Agency",
      description: "A real estate platform for property listings and management.",
      fullDescription: "A comprehensive real estate platform that helps users find and manage properties. Built with JavaScript, HTML, and CSS, it includes property listings with advanced search functionality, detailed property information pages, contact forms, and responsive design for all devices. The platform is designed to provide a seamless experience for both property buyers and sellers.",
      technologies: ["JavaScript", "HTML", "CSS", "Responsive Design"],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      codeLink: "https://github.com/karravulachandra/VillageAgency.1.0.0-",
      category: "Web",
      featured: true
    },

    // PHP Projects
    {
      title: "Hotel Booking Management System",
      description: "A PHP-based hotel booking and management system.",
      fullDescription: "A comprehensive hotel booking management system built with PHP and MySQL. Features include room booking with date selection, user registration and authentication, admin dashboard for hotel management, booking history tracking, and secure payment processing integration. The system allows hotel administrators to efficiently manage bookings, room inventory, and customer information through an intuitive interface.",
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      codeLink: "https://github.com/karravulachandra/miniproject",
      category: "PHP",
      featured: true
    },

    // Java Projects
    {
      title: "Online Job Portal System",
      description: "A Java-based job portal application for job seekers and employers.",
      fullDescription: "An online job portal system developed in Java that connects job seekers with employers. The application allows users to create and manage profiles, search for jobs using multiple filters, apply to positions, and track application status. Employers can post job listings, review applications, schedule interviews, and manage their hiring process through an intuitive dashboard. The system includes email notifications and reporting features.",
      technologies: ["Java", "JSP", "Servlet", "MySQL", "HTML", "CSS", "Bootstrap"],
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      codeLink: "https://github.com/karravulachandra/Java-Project",
      category: "Java",
      featured: true
    },
    {
      title: "Java Lab Exercises",
      description: "Collection of Java programming exercises and solutions.",
      fullDescription: "A comprehensive collection of Java programming exercises and their solutions covering fundamental to advanced concepts. This repository includes implementations of various data structures (arrays, linked lists, trees, graphs), algorithms (sorting, searching, dynamic programming), and object-oriented programming concepts. It serves as both a learning resource for beginners and a reference for experienced Java developers.",
      technologies: ["Java", "OOP", "Data Structures", "Algorithms", "Design Patterns"],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      codeLink: "https://github.com/karravulachandra/javalabexercise",
      category: "Java"
    },

    // Mobile Projects
    {
      title: "Mobile Application Development",
      description: "Android mobile application development projects and templates.",
      fullDescription: "A collection of Android mobile application development projects, templates, and examples. This repository showcases various mobile app implementations, UI designs, and functionality examples for Android development. It includes both complete applications and reusable components for features like user authentication, data storage, API integration, and responsive layouts for different screen sizes.",
      technologies: ["Java", "Android", "XML", "SQLite", "RESTful APIs"],
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      codeLink: "https://github.com/karravulachandra/mobile-application-development",
      category: "Mobile",
      featured: true
    },

    // ML/AI Projects
    {
      title: "Object Detection System",
      description: "Object detection using TensorFlow and deep learning techniques.",
      fullDescription: "An object detection system built with TensorFlow that can identify and locate multiple objects in images and video streams. The project implements state-of-the-art deep learning models for real-time object detection with high accuracy. It includes both still image processing and live webcam detection capabilities, with customizable confidence thresholds and support for multiple object classes.",
      technologies: ["Python", "TensorFlow", "Deep Learning", "Computer Vision", "Jupyter Notebook"],
      image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      codeLink: "https://github.com/karravulachandra/Object-Detection-By-Ankan",
      category: "ML/AI",
      featured: true
    },
    {
      title: "Malware Detection System",
      description: "Machine learning and deep learning approach to detect malware.",
      fullDescription: "A malware detection system that uses machine learning and deep learning techniques to identify malicious software. The project implements various classification algorithms to analyze file characteristics and behavior patterns to distinguish between benign and malicious files. The system achieves high accuracy in detecting both known and previously unseen malware variants through feature extraction and model optimization.",
      technologies: ["Python", "Machine Learning", "Deep Learning", "Jupyter Notebook", "Data Analysis"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      codeLink: "https://github.com/karravulachandra/Malware-detection-with-ML-and-deep-learning",
      category: "ML/AI"
    },
    {
      title: "MLOps Fundamentals",
      description: "Implementation of MLOps principles and practices for ML projects.",
      fullDescription: "A comprehensive exploration of MLOps (Machine Learning Operations) fundamentals, covering the entire ML lifecycle from data preparation to model deployment and monitoring. The project includes implementations of data transformation pipelines, experiment tracking with MLflow, model serving with BentoML, and workflow orchestration. It demonstrates best practices for creating reproducible, scalable, and production-ready machine learning systems.",
      technologies: ["Python", "MLflow", "Kafka", "BentoML", "Docker", "Orchestration"],
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      codeLink: "https://github.com/karravulachandra/Fundamentals-of-MLOps",
      category: "ML/AI"
    },

    // Python Projects
    {
      title: "Mini Desktop Assistant",
      description: "Voice-controlled desktop assistant with multiple functionalities.",
      fullDescription: "A voice-controlled desktop assistant built with Python that responds to various voice commands. Features include web searches on Google and YouTube, reading information from Wikipedia, playing random movies from a collection, providing time updates, and more. The assistant uses speech recognition and text-to-speech technologies to create a hands-free user experience for everyday computer tasks.",
      technologies: ["Python", "Speech Recognition", "Text-to-Speech", "APIs", "Automation"],
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      codeLink: "https://github.com/karravulachandra/Mini-Desktop-Assistant",
      category: "Python"
    }
  ];

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  const categories: Category[] = ["All", "Web", "Mobile", "Java", "PHP", "Python", "ML/AI"];

  return (
    <div className="pt-20">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 fade-in-section">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h1>
            <p className="text-muted-foreground">
              A collection of my work, ranging from web applications to design projects.
            </p>
          </div>

          <div className="mb-12 flex justify-center fade-in-section">
            <div className="inline-flex bg-secondary/50 p-1 rounded-lg">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    activeCategory === category
                      ? "bg-white shadow-soft text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                fullDescription={project.fullDescription}
                technologies={project.technologies}
                image={project.image}
                demoLink={project.demoLink}
                codeLink={project.codeLink}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
