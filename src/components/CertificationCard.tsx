
import { Award, Calendar, ExternalLink } from "lucide-react";

interface CertificationCardProps {
  name: string;
  issuer: string;
  date: string;
  link?: string;
  image?: string;
}

const CertificationCard = ({
  name,
  issuer,
  date,
  link,
  image,
}: CertificationCardProps) => {
  return (
    <div className="fade-in-section card-glass card-hover rounded-lg overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-1">{name}</h3>
            <p className="text-primary font-medium mb-4">{issuer}</p>
            
            <div className="flex items-center text-sm text-muted-foreground mb-4">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{date}</span>
            </div>
            
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-primary hover:text-primary/90 hover:underline"
              >
                <ExternalLink className="h-4 w-4 mr-1" /> View Certificate
              </a>
            )}
          </div>
          
          {image ? (
            <img
              src={image}
              alt={issuer}
              className="h-12 w-12 object-contain"
            />
          ) : (
            <div className="bg-secondary p-2 rounded-full">
              <Award className="h-8 w-8 text-primary" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificationCard;
