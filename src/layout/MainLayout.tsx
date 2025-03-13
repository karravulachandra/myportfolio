
import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll(".fade-in-section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
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
    <div className="flex min-h-screen flex-col antialiased bg-background font-lato">
      <Navbar />
      <main className="flex-1">
        <div className="page-transition">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
