import { useState } from "react";
import { cn } from "@/lib/utils";
import { Code, Cloud, Database, Server, Cpu, Brain, Layers } from "lucide-react";

interface Skill {
  name: string;
  icon: React.ReactNode;
  category: "frontend" | "backend" | "cloud" | "ai" | "other";
}

interface SkillTagsProps {
  className?: string;
}

const SkillTags = ({ className }: SkillTagsProps) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const skills: Skill[] = [
    // Frontend
    { name: "HTML", icon: <Code className="h-3 w-3" />, category: "frontend" },
    { name: "CSS", icon: <Code className="h-3 w-3" />, category: "frontend" },
    { name: "JavaScript", icon: <Code className="h-3 w-3" />, category: "frontend" },
    { name: "React.js", icon: <Code className="h-3 w-3" />, category: "frontend" },
    { name: "TypeScript", icon: <Code className="h-3 w-3" />, category: "frontend" },
    { name: "Tailwind CSS", icon: <Code className="h-3 w-3" />, category: "frontend" },

    // Backend
    { name: "Java", icon: <Server className="h-3 w-3" />, category: "backend" },
    { name: "Python", icon: <Code className="h-3 w-3" />, category: "backend" },
    { name: "SQL", icon: <Database className="h-3 w-3" />, category: "backend" },
    { name: "MongoDB", icon: <Database className="h-3 w-3" />, category: "backend" },

    // Cloud Technology
    { name: "AWS", icon: <Cloud className="h-3 w-3" />, category: "cloud" },
    { name: "Azure", icon: <Cloud className="h-3 w-3" />, category: "cloud" },
    { name: "GCP", icon: <Cloud className="h-3 w-3" />, category: "cloud" },

    // AI/ML
    { name: "Machine Learning", icon: <Brain className="h-3 w-3" />, category: "ai" },
    { name: "TensorFlow", icon: <Layers className="h-3 w-3" />, category: "ai" },
    { name: "Azure ML", icon: <Brain className="h-3 w-3" />, category: "ai" },
  ];

  const filteredSkills = activeCategory
    ? skills.filter((skill) => skill.category === activeCategory)
    : skills;

  return (
    <div className={cn("", className)}>
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        <button
          onClick={() => setActiveCategory(null)}
          className={cn(
            "text-xs px-4 py-1.5 rounded-full transition-all duration-300 border shadow-sm",
            activeCategory === null
              ? "bg-primary text-white border-primary/80 shadow-md"
              : "bg-white/80 dark:bg-gray-800/80 text-foreground dark:text-gray-200 hover:bg-primary/10 border-border/30 dark:border-gray-700/30"
          )}
        >
          All
        </button>
        <button
          onClick={() => setActiveCategory("frontend")}
          className={cn(
            "text-xs px-4 py-1.5 rounded-full transition-all duration-300 border shadow-sm",
            activeCategory === "frontend"
              ? "bg-blue-500 text-white border-blue-500/80 shadow-md"
              : "bg-white/80 dark:bg-gray-800/80 text-foreground dark:text-gray-200 hover:bg-blue-500/10 border-border/30 dark:border-gray-700/30"
          )}
        >
          Frontend
        </button>
        <button
          onClick={() => setActiveCategory("backend")}
          className={cn(
            "text-xs px-4 py-1.5 rounded-full transition-all duration-300 border shadow-sm",
            activeCategory === "backend"
              ? "bg-green-500 text-white border-green-500/80 shadow-md"
              : "bg-white/80 dark:bg-gray-800/80 text-foreground dark:text-gray-200 hover:bg-green-500/10 border-border/30 dark:border-gray-700/30"
          )}
        >
          Backend
        </button>
        <button
          onClick={() => setActiveCategory("cloud")}
          className={cn(
            "text-xs px-4 py-1.5 rounded-full transition-all duration-300 border shadow-sm",
            activeCategory === "cloud"
              ? "bg-cyan-500 text-white border-cyan-500/80 shadow-md"
              : "bg-white/80 dark:bg-gray-800/80 text-foreground dark:text-gray-200 hover:bg-cyan-500/10 border-border/30 dark:border-gray-700/30"
          )}
        >
          Cloud Technology
        </button>
        <button
          onClick={() => setActiveCategory("ai")}
          className={cn(
            "text-xs px-4 py-1.5 rounded-full transition-all duration-300 border shadow-sm",
            activeCategory === "ai"
              ? "bg-purple-500 text-white border-purple-500/80 shadow-md"
              : "bg-white/80 dark:bg-gray-800/80 text-foreground dark:text-gray-200 hover:bg-purple-500/10 border-border/30 dark:border-gray-700/30"
          )}
        >
          AI/ML
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-2 transition-all duration-500">
        {filteredSkills.map((skill) => (
          <div
            key={skill.name}
            className="skill-tag group"
          >
            <span className="mr-1.5 group-hover:text-primary transition-colors">{skill.icon}</span>
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillTags;
