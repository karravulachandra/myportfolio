
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Download } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Me", path: "/about" },
  { name: "Experience", path: "/experience" },
  { name: "Projects", path: "/projects" },
  { name: "Certifications", path: "/certifications" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md py-3 border-b border-border/40 dark:border-gray-700/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="hover:text-primary transition-colors flex items-center"
          >
            <img
              src="/mylogo.png"
              alt="Chandra Karravula Logo"
              className="h-12 w-auto transform transition-transform hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`nav-link ${isActive(item.path) ? "active" : ""}`}
              >
                {item.name}
              </Link>
            ))}
            <div className="ml-3 mr-2">
              <ThemeToggle className="h-9 w-9" />
            </div>
            <a
              href="https://drive.google.com/file/d/1zFpvr_2gkjakYTxc9XzihfzLNsSOFa96/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 btn-primary"
            >
              <Download className="mr-2 h-4 w-4" />
              Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-white/98 dark:bg-gray-900/98 backdrop-blur-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out border-b border-border/40 dark:border-gray-700/40 ${
          isOpen ? "max-h-screen py-4" : "max-h-0"
        }`}
      >
        <div className="container mx-auto px-4 py-2 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`block py-3 px-4 text-base ${
                isActive(item.path)
                  ? "text-primary font-medium border-l-2 border-primary pl-3"
                  : "text-foreground"
              } hover:bg-secondary/50 dark:hover:bg-gray-800/50 rounded-md transition-colors`}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-2 mt-2 border-t border-border/30 dark:border-gray-700/30">
            <div className="flex items-center justify-between py-2 px-4">
              <span className="text-sm font-medium text-muted-foreground">Toggle Theme</span>
              <ThemeToggle />
            </div>
            <a
              href="https://drive.google.com/file/d/1zFpvr_2gkjakYTxc9XzihfzLNsSOFa96/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center btn-primary mt-2"
            >
              <Download className="mr-2 h-4 w-4" />
              View Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
