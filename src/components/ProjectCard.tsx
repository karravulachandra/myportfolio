
import { useState } from "react";
import { ExternalLink, Github, X, Star } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoLink?: string;
  codeLink?: string;
  fullDescription?: string;
  featured?: boolean;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  image,
  demoLink,
  codeLink,
  fullDescription,
  featured = false,
}: ProjectCardProps) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <div
        className={`fade-in-section rounded-xl overflow-hidden card-glass card-hover cursor-pointer ${featured ? 'ring-2 ring-primary/50 shadow-lg' : ''}`}
        onClick={() => setShowDetails(true)}
      >
        <div className="relative overflow-hidden aspect-video">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          {featured && (
            <div className="absolute top-3 right-3 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium flex items-center shadow-md">
              <Star className="h-3 w-3 mr-1.5 fill-white" /> Featured
            </div>
          )}
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>

          <p className="text-muted-foreground mb-4 text-balance">{description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-xs font-medium bg-secondary/80 dark:bg-gray-800/80 text-foreground dark:text-gray-200 px-2.5 py-1 rounded-full border border-border/30 dark:border-gray-700/30"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 4 && (
              <span className="text-xs font-medium bg-secondary/50 dark:bg-gray-800/50 text-foreground dark:text-gray-300 px-2.5 py-1 rounded-full border border-border/20 dark:border-gray-700/20">
                +{technologies.length - 4} more
              </span>
            )}
          </div>

          <div className="flex gap-4 mt-2">
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-primary hover:text-primary/90 hover:underline transition-all"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="h-4 w-4 mr-1.5" /> View Demo
              </a>
            )}

            {codeLink && (
              <a
                href={codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-primary hover:text-primary/90 hover:underline transition-all"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="h-4 w-4 mr-1.5" /> View Code
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      {showDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/30 dark:bg-black/50 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-auto bg-background dark:bg-gray-900 rounded-xl shadow-xl animate-scale-in border border-border/30 dark:border-gray-700/30">
            <button
              onClick={() => setShowDetails(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/90 dark:bg-gray-800/90 text-foreground hover:bg-secondary/90 transition-colors z-10 shadow-md"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative aspect-video">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              {featured && (
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1.5 rounded-full text-sm font-medium flex items-center shadow-md">
                  <Star className="h-4 w-4 mr-1.5 fill-white" /> Featured Project
                </div>
              )}
              <h2 className="absolute bottom-4 left-4 text-2xl font-bold text-white shadow-text">{title}</h2>
            </div>

            <div className="p-6 md:p-8">
              <p className="text-muted-foreground mb-8 text-balance leading-relaxed">
                {fullDescription || description}
              </p>

              <div className="mb-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3 border-b border-border/30 dark:border-gray-700/30 pb-2">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium bg-secondary/80 dark:bg-gray-800/80 text-foreground dark:text-gray-200 px-3 py-1.5 rounded-full border border-border/30 dark:border-gray-700/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2 border-t border-border/30 dark:border-gray-700/30">
                {demoLink && (
                  <a
                    href={demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-md transition-colors shadow-sm border border-primary/80"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" /> View Demo
                  </a>
                )}

                {codeLink && (
                  <a
                    href={codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-secondary/90 dark:bg-gray-800 hover:bg-secondary dark:hover:bg-gray-700 text-foreground dark:text-gray-200 px-5 py-2.5 rounded-md transition-colors shadow-sm border border-border/30 dark:border-gray-700/30"
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
