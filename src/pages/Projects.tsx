
import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";

// Project categories for filtering
type Category = "All" | "Web" | "Mobile" | "Design";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online store with cart, checkout, and payment integration.",
      fullDescription: "A comprehensive e-commerce solution built with React, Node.js, and Stripe integration. Features include product catalog, user accounts, shopping cart, secure checkout, order management, and an admin dashboard for inventory control. The platform is fully responsive and optimized for all devices, with a focus on accessibility and user experience.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      demoLink: "https://example.com",
      codeLink: "https://github.com/example",
      category: "Web",
    },
    {
      title: "Task Management App",
      description: "A productivity app for organizing tasks, projects, and deadlines.",
      fullDescription: "A feature-rich task management application designed to help users organize their work efficiently. Built with React Native for cross-platform support, it includes features like task creation, due dates, priority levels, project organization, team collaboration, notifications, and detailed progress analytics. The app syncs data across devices and works offline.",
      technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
      image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
      demoLink: "https://example.com",
      codeLink: "https://github.com/example",
      category: "Mobile",
    },
    {
      title: "Financial Dashboard",
      description: "Interactive dashboard for visualizing financial data and metrics.",
      fullDescription: "A sophisticated financial analytics dashboard that provides real-time insights into financial performance. Built with React, D3.js, and a Node.js backend, it features interactive charts, customizable widgets, data filtering, export capabilities, and automated reports. The dashboard integrates with multiple financial data sources and offers personalized views for different user roles.",
      technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      demoLink: "https://example.com",
      codeLink: "https://github.com/example",
      category: "Web",
    },
    {
      title: "Health & Fitness App",
      description: "Mobile application for tracking workouts, nutrition, and health goals.",
      fullDescription: "A comprehensive health and fitness mobile application that helps users achieve their wellness goals. Built with Flutter for a seamless cross-platform experience, it includes workout tracking, nutrition monitoring, progress visualization, personalized recommendations, social sharing, and integration with wearable devices. The app emphasizes privacy and data security while providing valuable insights.",
      technologies: ["Flutter", "Dart", "Firebase", "Google Fit API"],
      image: "https://images.unsplash.com/photo-1544932503-b94999de7df7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      demoLink: "https://example.com",
      codeLink: "https://github.com/example",
      category: "Mobile",
    },
    {
      title: "Brand Identity System",
      description: "Complete brand identity design for a technology startup.",
      fullDescription: "A comprehensive brand identity system created for a tech startup entering the market. The project included research, strategy development, logo design, typography selection, color palette creation, iconography, application guidelines, and marketing materials. The identity system was designed to be flexible, modern, and scalable across digital and physical touchpoints.",
      technologies: ["Figma", "Illustrator", "Photoshop", "InDesign"],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      demoLink: "https://example.com",
      category: "Design",
    },
    {
      title: "Real Estate Platform",
      description: "Web application for property listings, searches, and management.",
      fullDescription: "A feature-rich real estate platform that connects property buyers, sellers, and agents. Built with Next.js and a Node.js backend, it includes property listings with advanced search, interactive maps, virtual tours, saved searches, agent directories, mortgage calculators, and a CMS for property management. The platform is optimized for SEO and features responsive design for all devices.",
      technologies: ["Next.js", "Node.js", "MongoDB", "MapBox API"],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      demoLink: "https://example.com",
      codeLink: "https://github.com/example",
      category: "Web",
    },
  ];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const categories: Category[] = ["All", "Web", "Mobile", "Design"];

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
