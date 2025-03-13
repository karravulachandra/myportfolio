
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

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
  return (
    <div 
      className={`fade-in-section py-6 px-6 md:px-8 card-glass card-hover rounded-xl transition-all duration-300`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-col h-full">
        <div className="bg-secondary inline-flex p-3 rounded-lg mb-4 text-primary">
          {icon}
        </div>
        
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        
        <p className="text-muted-foreground mb-6 flex-grow text-balance">
          {description}
        </p>
        
        <Link
          to={link}
          className="group inline-flex items-center text-primary font-medium hover:underline hover:text-primary/90 transition-all"
        >
          {linkText}
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default SectionHighlight;
