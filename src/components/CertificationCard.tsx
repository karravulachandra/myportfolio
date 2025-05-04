
import { Award, Calendar, ExternalLink, BookOpen, GraduationCap, Sparkles, Cpu, Network, BarChart2, Zap, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";

interface CertificationCardProps {
  name: string;
  issuer: string;
  date: string;
  link?: string;
  image?: string;
  category?: string;
}

const CertificationCard = ({
  name,
  issuer,
  date,
  link,
  image,
  category,
}: CertificationCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Trigger animation effect when card is hovered
  useEffect(() => {
    if (isHovered) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [isHovered]);

  // Handle opening the popup
  const handleOpenPopup = () => {
    // Open the certificate image in a new window/tab
    if (link) {
      window.open(link, '_blank');
    } else if (image) {
      // Fallback to the image if no link is provided
      window.open(image, '_blank');
    }
  };

  // No need for click outside handler since we're opening in a new tab

  // Get appropriate icon and color based on category
  const getCategoryMeta = (category: string) => {
    switch(category) {
      case "Development":
        return { icon: Cpu, color: "from-emerald-500 to-teal-500" };
      case "Design":
        return { icon: GraduationCap, color: "from-purple-500 to-pink-500" };
      case "Cloud":
        return { icon: Network, color: "from-blue-400 to-cyan-500" };
      case "Data Science":
        return { icon: BarChart2, color: "from-amber-500 to-orange-500" };
      default:
        return { icon: Sparkles, color: "from-blue-500 to-indigo-500" };
    }
  };

  const categoryMeta = category ? getCategoryMeta(category) : { icon: Sparkles, color: "from-blue-500 to-indigo-500" };
  const CategoryIcon = categoryMeta.icon;

  return (
    <div
      className={cn(
        "card-glass rounded-xl overflow-hidden border border-primary/20 backdrop-blur-md bg-white/70 h-full transition-all duration-300",
        "hover:shadow-xl hover:-translate-y-1 futuristic-border ai-glow tech-scanline",
        isAnimating && "glowing-border"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card header with gradient */}
      <div className={`h-2 w-full bg-gradient-to-r ${categoryMeta.color}`}></div>

      {/* Futuristic circuit pattern overlay */}
      <div className="absolute inset-0 ai-circuit-pattern opacity-10 pointer-events-none"></div>

      <div className="p-7 relative z-10">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            {/* Category badge */}
            {category && (
              <div className="inline-flex items-center text-xs font-medium px-3 py-1.5 rounded-full bg-white/50 backdrop-blur-sm border border-primary/20 text-foreground mb-3 shadow-sm">
                <CategoryIcon className="h-3 w-3 mr-1.5 text-primary" />
                <span>{category}</span>
              </div>
            )}

            <h3 className="text-xl font-bold mb-2 leading-tight">{name}</h3>
            <p className="text-primary font-medium mb-4">{issuer}</p>

            <div className="flex items-center text-sm text-foreground/70 mb-5 bg-white/30 backdrop-blur-sm px-3 py-1.5 rounded-md inline-flex border border-primary/10">
              <Calendar className="h-4 w-4 mr-2 text-primary/70" />
              <span>{date}</span>
            </div>

            <button
              ref={buttonRef}
              onClick={handleOpenPopup}
              className="inline-flex items-center text-sm font-medium px-4 py-2 rounded-md bg-gradient-to-r from-primary/10 to-blue-500/10 text-primary hover:from-primary/20 hover:to-blue-500/20 transition-all duration-300 group border border-primary/20"
            >
              <Zap className="h-4 w-4 mr-1.5 text-primary" />
              <span>View Certificate</span>
              <ExternalLink className="h-4 w-4 ml-1.5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {image ? (
            <div className="relative group overflow-hidden rounded-lg border border-primary/20 p-2 bg-white/80 shadow-soft transition-all duration-300 hover:shadow-md futuristic-glow">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src={image}
                alt={issuer}
                className="h-16 w-16 object-contain transition-transform duration-300 group-hover:scale-110 relative z-10"
              />
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-lg blur-sm opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
            </div>
          ) : (
            <div className={`bg-gradient-to-br ${categoryMeta.color} p-3.5 rounded-xl shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg border border-white/20`}>
              <CategoryIcon className="h-8 w-8 text-white" />
            </div>
          )}
        </div>
      </div>

      {/* No modal needed - we're opening the image in a new tab */}
    </div>
  );
};

export default CertificationCard;
