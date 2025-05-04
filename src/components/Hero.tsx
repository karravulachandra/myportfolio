
import { ArrowDown, Code, Cpu, Brain, Zap, Server } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import TerminalEffect from "./TerminalEffect";
import SkillTags from "./SkillTags";
import ParticleBackground from "./ParticleBackground";
import ThemeToggle from "./ThemeToggle";

// Import logo
import myLogo from "../assets/logos/mylogo.png";

const Hero = () => {
  const [terminalComplete, setTerminalComplete] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [floatingIcons, setFloatingIcons] = useState<{ icon: JSX.Element; x: string; y: string; delay: string }[]>([]);

  useEffect(() => {
    // Create floating tech icons
    setFloatingIcons([
      { icon: <Code className="h-6 w-6 text-primary/60" />, x: "10%", y: "20%", delay: "0s" },
      { icon: <Cpu className="h-8 w-8 text-primary/40" />, x: "85%", y: "15%", delay: "0.5s" },
      { icon: <Brain className="h-10 w-10 text-primary/30" />, x: "75%", y: "70%", delay: "1s" },
      { icon: <Zap className="h-7 w-7 text-primary/50" />, x: "15%", y: "75%", delay: "1.5s" },
      { icon: <Server className="h-9 w-9 text-primary/35" />, x: "90%", y: "40%", delay: "2s" },
    ]);
  }, []);

  useEffect(() => {
    if (terminalComplete) {
      const timer = setTimeout(() => {
        setShowSkills(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [terminalComplete]);

  const scrollToHighlights = () => {
    const highlightsSection = document.getElementById("highlights");
    if (highlightsSection) {
      highlightsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-28 md:pt-36 pb-20 md:pb-32 overflow-hidden relative gradient-bg-mesh">
      <ParticleBackground />
      <div className="absolute inset-0 ai-hexagon-pattern opacity-30"></div>
      <div className="absolute inset-0 futuristic-grid opacity-20"></div>
      <div className="absolute inset-0 code-rain"></div>

      {/* Floating tech icons */}
      {floatingIcons.map((item, index) => (
        <div
          key={index}
          className="absolute animate-float"
          style={{
            top: item.y,
            left: item.x,
            animationDelay: item.delay,
            animationDuration: `${5 + index}s`
          }}
        >
          {item.icon}
        </div>
      ))}

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-10 inline-block">
            <div className="mx-auto w-48 md:w-64 mb-6 relative hover-3d">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-full blur-xl opacity-70 animate-pulse-subtle"></div>
              <div className="absolute inset-0 rounded-full glowing-border"></div>
              <img
                src={myLogo}
                alt="Chandra Karravula Logo"
                className="w-full relative z-10 animate-pulse-subtle hover:animate-none transition-all"
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-full blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
            </div>
            <div className="bg-white/70 dark:bg-gray-800/70 shadow-soft border border-primary/20 backdrop-blur-md text-foreground px-5 py-2 rounded-full text-sm font-medium inline-flex items-center gap-2 futuristic-border tech-scanline">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-subtle"></span>
              <span className="text-gradient">Software Developer | AI Enthusiast | Cloud Certified</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight mb-8 animate-slide-down text-balance">
            <span className="text-gradient glitch" title="Chandra Karravula">Chandra Karravula</span>
            <div className="h-2"></div>
            <span className="relative inline-block">
              <span className="text-gradient">Building Intelligent Solutions</span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary/60 to-blue-500/60 rounded-full"></span>
            </span>
          </h1>

          <div className="bg-black/90 backdrop-blur-md p-5 rounded-md border border-primary/40 mb-8 max-w-2xl mx-auto shadow-lg">
            <div className="flex items-center mb-2 border-b border-gray-700 pb-2">
              <div className="flex space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-xs text-gray-400 mx-auto">terminal</div>
            </div>
            <TerminalEffect
              text="Welcome! I'm a software developer specializing in AI and cloud solutions."
              className="text-blue-300"
              onComplete={() => setTerminalComplete(true)}
              prefix="$ "
              typingSpeed={30}
            />
          </div>

          {showSkills && (
            <div className="mb-10 animate-fade-in">
              <SkillTags />
            </div>
          )}

          <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-in delay-300">
            <Link
              to="/contact"
              className="cybr-btn relative"
            >
              Get in Touch
              <span className="cybr-btn__glitch">Get in Touch</span>
              <span className="cybr-btn__tag">R25</span>
            </Link>
            <Link
              to="/projects"
              className="relative group overflow-hidden bg-white/10 backdrop-blur-md border border-primary/30 text-primary hover:text-white px-7 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-primary/80"
            >
              <span className="relative z-10">View My Work</span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary/80 to-blue-500/80 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Link>
          </div>
        </div>

        <div className="mt-16 md:mt-20 flex justify-center">
          <button
            onClick={scrollToHighlights}
            className="rounded-full bg-white/70 shadow-soft p-3 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border border-primary/20 relative group overflow-hidden"
            aria-label="Scroll to highlights"
          >
            <ArrowDown className="h-6 w-6 text-primary relative z-10" />
            <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-500/10 transform scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
