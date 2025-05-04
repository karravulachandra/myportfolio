
import Hero from "@/components/Hero";
import SectionHighlight from "@/components/SectionHighlight";
import { User, Briefcase, CodepenIcon, Award, Mail, Cpu, Brain, Zap, Code } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Index = () => {
  const [activeHighlight, setActiveHighlight] = useState<number | null>(null);
  const [showCollaboration, setShowCollaboration] = useState(false);

  useEffect(() => {
    // Animate collaboration section after a delay
    const timer = setTimeout(() => {
      setShowCollaboration(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const highlights = [
    {
      title: "About Me",
      description: "Software Developer and AI Enthusiast with strong foundation in cloud computing, machine learning, and web development.",
      link: "/about",
      linkText: "Know more about me",
      icon: <User className="h-6 w-6" />,
      bgColor: "from-blue-500/20 to-indigo-500/20",
    },
    {
      title: "Experience",
      description: "Worked as an AI Intern, IT Recruiter and Java Intern across different organizations developing practical industry skills.",
      link: "/experience",
      linkText: "Check my professional journey",
      icon: <Briefcase className="h-6 w-6" />,
      bgColor: "from-emerald-500/20 to-teal-500/20",
    },
    {
      title: "Projects",
      description: "From AI applications to cloud implementations, explore my diverse portfolio of technical projects.",
      link: "/projects",
      linkText: "See my projects",
      icon: <CodepenIcon className="h-6 w-6" />,
      bgColor: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Certifications",
      description: "Multiple certifications in Google Cloud, Azure, AWS, Python, Java and more to enhance my technical expertise.",
      link: "/certifications",
      linkText: "View my certifications",
      icon: <Award className="h-6 w-6" />,
      bgColor: "from-amber-500/20 to-orange-500/20",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      <Hero />

      <section id="highlights" className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30"></div>
        <div className="absolute inset-0 ai-hexagon-pattern opacity-20"></div>
        <div className="absolute inset-0 futuristic-grid opacity-10"></div>
        <div className="absolute inset-0 subtle-pattern opacity-30"></div>

        {/* Floating tech elements */}
        <div className="absolute top-1/4 left-10 animate-float" style={{ animationDuration: '15s' }}>
          <Cpu className="h-12 w-12 text-primary/10" />
        </div>
        <div className="absolute bottom-1/4 right-10 animate-float" style={{ animationDuration: '18s', animationDelay: '1s' }}>
          <Brain className="h-14 w-14 text-primary/10" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float" style={{ animationDuration: '20s', animationDelay: '2s' }}>
          <Code className="h-10 w-10 text-primary/10" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <div className="inline-flex items-center justify-center p-1 mb-6 rounded-full bg-white/70 backdrop-blur-md border border-primary/20 shadow-soft futuristic-glow">
              <span className="flex items-center space-x-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-blue-500/10 text-primary text-sm font-medium">
                <span className="h-1 w-1 rounded-full bg-primary animate-pulse-subtle"></span>
                <span>Interactive Portfolio</span>
                <span className="h-1 w-1 rounded-full bg-primary animate-pulse-subtle"></span>
              </span>
            </div>
            <div className="relative inline-block mb-5">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-blue-500/30 rounded-lg blur-md opacity-70"></div>
              <h2 className="relative text-3xl md:text-4xl font-bold text-gradient z-10">Explore My Portfolio</h2>
            </div>
            <div className="bg-black/70 backdrop-blur-md p-4 rounded-lg border border-primary/20 max-w-xl mx-auto mb-6 tech-scanline">
              <p className="text-green-400 font-mono text-sm">
                &gt; Hover over sections to interact with AI-enhanced portfolio elements
              </p>
            </div>
            <p className="text-lg text-foreground/80 max-w-xl mx-auto">
              Take a quick look at different sections of my portfolio to learn more about me and my work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={highlight.title}
                className="relative"
                onMouseEnter={() => setActiveHighlight(index)}
                onMouseLeave={() => setActiveHighlight(null)}
              >
                {/* Glow effect on hover */}
                <div
                  className="absolute -inset-3 bg-gradient-to-r from-primary/10 to-blue-500/10 dark:from-primary/15 dark:to-blue-500/15 rounded-2xl blur-xl z-0 transition-opacity duration-300"
                  style={{ opacity: activeHighlight === index ? 1 : 0 }}
                ></div>

                {/* Background color on hover */}
                <div
                  className={cn(
                    "absolute inset-0 rounded-xl transition-opacity duration-300 z-0",
                    `bg-gradient-to-br ${highlight.bgColor}`
                  )}
                  style={{ opacity: activeHighlight === index ? 0.3 : 0 }}
                ></div>
                <SectionHighlight
                  title={highlight.title}
                  description={highlight.description}
                  link={highlight.link}
                  linkText={highlight.linkText}
                  icon={highlight.icon}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg-mesh"></div>
        <div className="absolute inset-0 ai-circuit-pattern opacity-20"></div>
        <div className="absolute inset-0 subtle-pattern opacity-30"></div>

        {/* Animated tech elements */}
        <div className="absolute top-1/3 left-1/5 animate-float" style={{ animationDuration: '17s', animationDelay: '0.5s' }}>
          <Zap className="h-16 w-16 text-primary/10" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className={cn(
            "max-w-4xl mx-auto text-center transition-all duration-1000 transform",
            showCollaboration ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <div className="inline-flex items-center justify-center p-1 mb-6 rounded-full bg-white/70 backdrop-blur-md border border-primary/20 shadow-soft futuristic-glow">
              <span className="flex items-center space-x-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-blue-500/10 text-primary text-sm font-medium">
                <span className="h-1 w-1 rounded-full bg-primary animate-pulse-subtle"></span>
                <span>AI-Powered Collaboration</span>
                <span className="h-1 w-1 rounded-full bg-primary animate-pulse-subtle"></span>
              </span>
            </div>

            <div className="relative inline-block mb-6">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-blue-500/30 rounded-lg blur-md opacity-70"></div>
              <h2 className="relative text-3xl md:text-4xl font-bold text-gradient z-10">Let's Work Together</h2>
            </div>

            <div className="bg-black/70 backdrop-blur-md p-4 rounded-lg border border-primary/20 max-w-2xl mx-auto mb-10 tech-scanline">
              <p className="text-green-400 font-mono text-sm">
                &gt; Ready to collaborate on innovative projects using cutting-edge technologies
              </p>
            </div>

            <div className="inline-block relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-lg blur-xl opacity-70 animate-pulse-subtle"></div>
              <Link
                to="/contact"
                className="cybr-btn relative"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
                <span className="cybr-btn__glitch">Get In Touch</span>
                <span className="cybr-btn__tag">R25</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
