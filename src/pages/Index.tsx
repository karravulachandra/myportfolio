
import Hero from "@/components/Hero";
import SectionHighlight from "@/components/SectionHighlight";
import { User, Briefcase, CodepenIcon, Award, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const highlights = [
    {
      title: "About Me",
      description: "Learn more about my background, skills, and what drives me as a developer.",
      link: "/about",
      linkText: "Know more about me",
      icon: <User className="h-6 w-6" />,
    },
    {
      title: "Experience",
      description: "Explore my professional journey and the companies I've worked with.",
      link: "/experience",
      linkText: "Check my professional journey",
      icon: <Briefcase className="h-6 w-6" />,
    },
    {
      title: "Projects",
      description: "View a collection of my work, including web applications, design projects, and more.",
      link: "/projects",
      linkText: "See my projects",
      icon: <CodepenIcon className="h-6 w-6" />,
    },
    {
      title: "Certifications",
      description: "Discover the courses and certifications I've completed to enhance my skills.",
      link: "/certifications",
      linkText: "View my certifications",
      icon: <Award className="h-6 w-6" />,
    },
  ];

  return (
    <div>
      <Hero />
      
      <section id="highlights" className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore My Portfolio</h2>
            <p className="text-muted-foreground">
              Take a quick look at different sections of my portfolio to learn more about me and my work.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {highlights.map((highlight, index) => (
              <SectionHighlight
                key={highlight.title}
                title={highlight.title}
                description={highlight.description}
                link={highlight.link}
                linkText={highlight.linkText}
                icon={highlight.icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 gradient-bg-subtle">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 hover:shadow-md"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
