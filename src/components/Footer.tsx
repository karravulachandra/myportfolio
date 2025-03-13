
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="text-xl font-semibold">
              Portfolio
            </Link>
            <p className="text-muted-foreground mt-2 text-sm">
              Building digital experiences that make a difference.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-full shadow-soft hover:shadow-medium hover:-translate-y-1 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-foreground" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-full shadow-soft hover:shadow-medium hover:-translate-y-1 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-foreground" />
              </a>
              <a
                href="mailto:hello@example.com"
                className="bg-white p-2 rounded-full shadow-soft hover:shadow-medium hover:-translate-y-1 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 text-foreground" />
              </a>
            </div>
            <p className="text-muted-foreground text-sm">
              © {currentYear} John Doe. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
