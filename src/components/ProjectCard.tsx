
import { useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoLink?: string;
  codeLink?: string;
  fullDescription?: string;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  image,
  demoLink,
  codeLink,
  fullDescription,
}: ProjectCardProps) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <div
        className="fade-in-section rounded-xl overflow-hidden card-glass card-hover cursor-pointer"
        onClick={() => setShowDetails(true)}
      >
        <div className="relative overflow-hidden aspect-video">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          
          <p className="text-muted-foreground mb-4 text-balance">{description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-medium bg-secondary text-foreground px-2.5 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex gap-3">
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-primary hover:text-primary/90"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="h-4 w-4 mr-1" /> Demo
              </a>
            )}
            
            {codeLink && (
              <a
                href={codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-primary hover:text-primary/90"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="h-4 w-4 mr-1" /> Code
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      {showDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/20 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-auto bg-background rounded-xl shadow-medium animate-scale-in">
            <button
              onClick={() => setShowDetails(false)}
              className="absolute top-4 right-4 p-1 rounded-full bg-secondary text-foreground hover:bg-secondary/80 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            
            <div className="relative aspect-video">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-3">{title}</h2>
              
              <p className="text-muted-foreground mb-6 text-balance">
                {fullDescription || description}
              </p>
              
              <div className="mb-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium bg-secondary text-foreground px-2.5 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4">
                {demoLink && (
                  <a
                    href={demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md transition-colors"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" /> View Demo
                  </a>
                )}
                
                {codeLink && (
                  <a
                    href={codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-secondary hover:bg-secondary/80 text-foreground px-4 py-2 rounded-md transition-colors"
                  >
                    <Github className="h-4 w-4 mr-2" /> View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
