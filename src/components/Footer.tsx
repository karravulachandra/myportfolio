
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Code } from "lucide-react";

// Import logo
import myLogo from "../assets/logos/mylogo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-background to-secondary/30 border-t border-border/50 relative overflow-hidden">
      <div className="absolute inset-0 subtle-pattern opacity-30"></div>
      <div className="container mx-auto px-4 md:px-6 py-16 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="hover:text-primary transition-colors duration-300">
              <img
                src={myLogo}
                alt="Chandra Karravula Logo"
                className="h-16 w-auto transform transition-transform hover:scale-105"
              />
            </Link>
            <p className="text-muted-foreground mt-3 text-sm max-w-xs">
              Innovating today for a brighter tomorrow. Building intelligent solutions with passion and precision.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com/chandrashivaji"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2.5 rounded-full shadow-soft hover:shadow-medium hover:-translate-y-1 transition-all duration-300 hover:bg-primary/5 hover:border-primary/10 border border-transparent"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-foreground" />
              </a>
              <a
                href="https://www.linkedin.com/in/karravula-chandra-241306221/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2.5 rounded-full shadow-soft hover:shadow-medium hover:-translate-y-1 transition-all duration-300 hover:bg-primary/5 hover:border-primary/10 border border-transparent"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-foreground" />
              </a>
              <a
                href="mailto:karravulachandra2001@gmail.com"
                className="bg-white p-2.5 rounded-full shadow-soft hover:shadow-medium hover:-translate-y-1 transition-all duration-300 hover:bg-primary/5 hover:border-primary/10 border border-transparent"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 text-foreground" />
              </a>
              <a
                href="https://www.hackerrank.com/profile/karravulachandr1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2.5 rounded-full shadow-soft hover:shadow-medium hover:-translate-y-1 transition-all duration-300 hover:bg-primary/5 hover:border-primary/10 border border-transparent"
                aria-label="HackerRank"
              >
                <Code className="h-5 w-5 text-foreground" />
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mb-4 text-xs text-muted-foreground">
              <a href="https://www.hackerrank.com/profile/karravulachandr1" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover:underline">HackerRank</a>
              <span>•</span>
              <a href="https://www.codechef.com/users/chandu_332" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover:underline">CodeChef</a>
              <span>•</span>
              <a href="https://www.codingninjas.com/studio/profile/CHANDRAK" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover:underline">Coding Ninjas</a>
            </div>
            <p className="text-muted-foreground text-sm">
              © {currentYear} <span className="text-foreground font-medium">Chandra Karravula</span>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
