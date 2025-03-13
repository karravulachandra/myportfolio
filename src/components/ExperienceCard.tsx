
import { CalendarIcon, MapPin } from "lucide-react";

interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  isLeft?: boolean;
}

const ExperienceCard = ({
  title,
  company,
  location,
  startDate,
  endDate,
  description,
  isLeft = true,
}: ExperienceCardProps) => {
  return (
    <div
      className={`fade-in-section relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 mb-12 w-full ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse md:text-right"
      }`}
    >
      {/* Timeline dot */}
      <div className="absolute left-5 md:left-1/2 w-3 h-3 rounded-full bg-primary transform -translate-x-1/2 z-10"></div>
      
      <div
        className={`ml-12 md:ml-0 ${
          isLeft ? "md:pr-8 md:text-right md:w-1/2" : "md:pl-8 md:w-1/2"
        }`}
      >
        <div className="card-glass p-6 rounded-lg shadow-soft card-hover">
          <h3 className="text-lg font-semibold">{title}</h3>
          <h4 className="text-primary font-medium mb-2">{company}</h4>
          
          <div className="flex items-center text-sm text-muted-foreground mb-4">
            <CalendarIcon className="h-4 w-4 mr-2" />
            <span>{startDate} — {endDate}</span>
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground mb-4">
            <MapPin className="h-4 w-4 mr-2" />
            <span>{location}</span>
          </div>
          
          <p className="text-muted-foreground text-balance">{description}</p>
        </div>
      </div>
      
      <div className={`hidden md:block md:w-1/2 ${isLeft ? "" : ""}`}></div>
    </div>
  );
};

export default ExperienceCard;
