
import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CircuitBackground from "@/components/CircuitBackground";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Setup intersection observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    // Add a small delay to ensure DOM is fully loaded
    setTimeout(() => {
      const sections = document.querySelectorAll(".fade-in-section");

      // First make all sections in the viewport visible immediately
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          section.classList.add("is-visible");
        }
        observer.observe(section);
      });
    }, 100);

    return () => {
      const sections = document.querySelectorAll(".fade-in-section");
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [location.pathname]);

  // Add Lato font
  useEffect(() => {
    // Add Lato font from Google Fonts
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap';
    document.head.appendChild(link);

    // Apply font to the body
    document.body.classList.add('font-lato');

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col antialiased bg-background font-lato relative overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-primary/[0.02] to-blue-500/[0.02] -z-10"></div>
      <CircuitBackground />
      <Navbar />
      <main className="flex-1 relative z-0">
        <div className="page-transition">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
