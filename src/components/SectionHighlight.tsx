
import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionHighlightProps {
  title: string;
  description: string;
  link: string;
  linkText: string;
  icon: ReactNode;
  index: number;
}

const SectionHighlight = ({
  title,
  description,
  link,
  linkText,
  icon,
  index,
}: SectionHighlightProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={cn(
        "py-8 px-7 md:px-8 card-glass rounded-xl transition-all duration-500",
        "hover:border-primary/30 hover:shadow-xl relative overflow-hidden",
        "bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border border-primary/20 futuristic-border",
        isHovered && "glowing-border"
      )}
      style={{
        transitionDelay: `${index * 150}ms`,
        opacity: 1, // Ensure it's always visible
        transform: 'translateY(0)' // Ensure it's not translated down
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tech scanline effect */}
      <div className="absolute inset-0 tech-scanline pointer-events-none"></div>

      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 ai-circuit-pattern opacity-10 dark:opacity-20 pointer-events-none"></div>
      <div className="flex flex-col h-full relative z-10">
        <div className="bg-gradient-to-br from-primary/30 to-blue-500/30 dark:from-primary/40 dark:to-blue-500/40 inline-flex p-3.5 rounded-xl mb-5 text-primary dark:text-primary-foreground transition-all duration-300 shadow-sm border border-primary/20 dark:border-primary/30 futuristic-glow">
          {icon}
        </div>

        <h3 className="text-xl font-bold mb-3 text-gradient dark:text-gradient">{title}</h3>

        <div className="relative mb-6">
          <p className="text-foreground/80 dark:text-gray-300 flex-grow text-balance leading-relaxed">
            {description}
          </p>
          {isHovered && (
            <div className="absolute -right-1 -bottom-1 w-12 h-12 opacity-20">
              <div className="w-full h-full border-r-2 border-b-2 border-primary animate-pulse-subtle"></div>
            </div>
          )}
        </div>

        <Link
          to={link}
          className="group inline-flex items-center text-primary dark:text-primary-foreground font-medium px-4 py-2 rounded-lg bg-gradient-to-r from-primary/10 to-blue-500/10 dark:from-primary/20 dark:to-blue-500/20 hover:from-primary/20 hover:to-blue-500/20 dark:hover:from-primary/30 dark:hover:to-blue-500/30 transition-all duration-300 border border-primary/20 dark:border-primary/40 hover:border-primary/40 dark:hover:border-primary/60 relative overflow-hidden shadow-sm"
        >
          <span className="relative z-10 flex items-center">
            {linkText}
            <ExternalLink className="ml-2 h-4 w-4 transition-all duration-300 group-hover:rotate-45" />
          </span>
          <span className="absolute inset-0 bg-white/30 dark:bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
        </Link>
      </div>
    </div>
  );
};

export default SectionHighlight;
