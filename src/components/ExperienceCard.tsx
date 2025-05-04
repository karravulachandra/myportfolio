
import { CalendarIcon, MapPin, Code } from "lucide-react";

interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  isLeft?: boolean;
  skills?: string[];
}

const ExperienceCard = ({
  title,
  company,
  location,
  startDate,
  endDate,
  description,
  isLeft = true,
  skills,
}: ExperienceCardProps) => {
  return (
    <div
      className={`fade-in-section relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 mb-12 w-full ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse md:text-right"
      }`}
    >
      {/* Timeline dot */}
      <div className="absolute left-5 md:left-1/2 w-4 h-4 rounded-full bg-primary/90 border-2 border-white dark:border-gray-900 transform -translate-x-1/2 z-10 shadow-md"></div>

      <div
        className={`ml-12 md:ml-0 ${
          isLeft ? "md:pr-8 md:text-right md:w-1/2" : "md:pl-8 md:w-1/2"
        }`}
      >
        <div className="card-glass p-6 rounded-lg shadow-md card-hover">
          <div className="border-l-4 border-primary/70 pl-3 mb-3">
            <h3 className="text-lg font-semibold">{title}</h3>
            <h4 className="text-primary font-medium">{company}</h4>
          </div>

          <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex items-center text-sm text-muted-foreground">
              <CalendarIcon className="h-4 w-4 mr-2 text-primary/70" />
              <span>{startDate} — {endDate}</span>
            </div>

            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 mr-2 text-primary/70" />
              <span>{location}</span>
            </div>
          </div>

          <p className="text-muted-foreground text-balance mb-4 leading-relaxed">{description}</p>

          {skills && skills.length > 0 && (
            <div className="mt-4 pt-3 border-t border-border/30 dark:border-gray-700/30">
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="text-xs font-medium bg-primary/10 text-primary px-2.5 py-1 rounded-full border border-primary/20 hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className={`hidden md:block md:w-1/2 ${isLeft ? "" : ""}`}></div>
    </div>
  );
};

export default ExperienceCard;
