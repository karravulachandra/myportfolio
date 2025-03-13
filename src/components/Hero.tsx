
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const scrollToHighlights = () => {
    const highlightsSection = document.getElementById("highlights");
    if (highlightsSection) {
      highlightsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-28 md:pt-36 pb-20 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block animate-float">
            <span className="bg-secondary text-foreground px-4 py-1.5 rounded-full text-sm font-medium">
              Full Stack Developer
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight mb-6 animate-slide-down text-balance">
            <span className="text-gradient">John Doe</span> — Building Digital Experiences That Matter
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto animate-fade-in delay-150 text-balance">
            I craft elegant solutions to complex problems through clean code, thoughtful design, and attention to detail.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-in delay-300">
            <Link
              to="/contact"
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 hover:shadow-md"
            >
              Get in Touch
            </Link>
            <Link
              to="/projects"
              className="bg-secondary hover:bg-secondary/80 text-foreground px-6 py-3 rounded-md font-medium transition-all duration-300"
            >
              View My Work
            </Link>
          </div>
        </div>
        
        <div className="mt-16 md:mt-20 flex justify-center animate-pulse-subtle">
          <button
            onClick={scrollToHighlights}
            className="rounded-full bg-white shadow-soft p-3 hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            aria-label="Scroll to highlights"
          >
            <ArrowDown className="h-6 w-6 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
