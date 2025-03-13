
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
          <div className="mb-8 inline-block animate-float">
            <div className="mx-auto w-48 md:w-64 mb-4">
              <img 
                src="/lovable-uploads/0cba9ceb-4ba5-4d58-9a4b-0335a7dc330f.png" 
                alt="Karravula Chandra Logo" 
                className="w-full animate-pulse-subtle hover:animate-none transition-all"
              />
            </div>
            <span className="bg-secondary text-foreground px-4 py-1.5 rounded-full text-sm font-medium">
              Software Developer | AI Enthusiast | Cloud Certified
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight mb-6 animate-slide-down text-balance">
            <span className="text-gradient">Chandra Karravula</span> — Building Intelligent Solutions
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto animate-fade-in delay-150 text-balance">
            With hands-on experience in software development, cloud computing, and AI, I thrive on building intelligent, scalable applications. Let's explore my journey and achievements!
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-in delay-300">
            <Link
              to="/contact"
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              Get in Touch
            </Link>
            <Link
              to="/projects"
              className="bg-secondary hover:bg-secondary/80 text-foreground px-6 py-3 rounded-md font-medium transition-all duration-300 hover:-translate-y-1"
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
