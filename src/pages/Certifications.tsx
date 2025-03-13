
import { useState } from "react";
import CertificationCard from "@/components/CertificationCard";

// Certification categories for filtering
type Category = "All" | "Development" | "Design" | "Cloud" | "Data Science";

const Certifications = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const certifications = [
    {
      name: "Advanced React and Redux",
      issuer: "Udemy",
      date: "August 2022",
      link: "https://example.com",
      category: "Development",
    },
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "May 2022",
      link: "https://example.com",
      category: "Cloud",
    },
    {
      name: "Certified MongoDB Developer",
      issuer: "MongoDB University",
      date: "January 2022",
      link: "https://example.com",
      category: "Development",
    },
    {
      name: "UI/UX Design Specialization",
      issuer: "Coursera",
      date: "November 2021",
      link: "https://example.com",
      category: "Design",
    },
    {
      name: "Professional Data Science Certification",
      issuer: "IBM",
      date: "September 2021",
      link: "https://example.com",
      category: "Data Science",
    },
    {
      name: "Google Cloud Professional Architect",
      issuer: "Google Cloud",
      date: "July 2021",
      link: "https://example.com",
      category: "Cloud",
    },
    {
      name: "TypeScript Masterclass",
      issuer: "Frontend Masters",
      date: "April 2021",
      link: "https://example.com",
      category: "Development",
    },
    {
      name: "Advanced CSS and Sass",
      issuer: "Udemy",
      date: "February 2021",
      link: "https://example.com",
      category: "Development",
    },
  ];

  const filteredCertifications = activeCategory === "All" 
    ? certifications 
    : certifications.filter(cert => cert.category === activeCategory);

  const categories: Category[] = ["All", "Development", "Design", "Cloud", "Data Science"];

  return (
    <div className="pt-20">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 fade-in-section">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">My Certifications</h1>
            <p className="text-muted-foreground">
              Professional certifications I've earned to enhance my skills and knowledge.
            </p>
          </div>
          
          <div className="mb-12 flex justify-center fade-in-section">
            <div className="inline-flex flex-wrap justify-center gap-2 md:flex-nowrap bg-secondary/50 p-1 rounded-lg">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    activeCategory === category
                      ? "bg-white shadow-soft text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCertifications.map((cert, index) => (
              <CertificationCard
                key={index}
                name={cert.name}
                issuer={cert.issuer}
                date={cert.date}
                link={cert.link}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center fade-in-section">
            <h2 className="text-3xl font-bold mb-6">Continuous Learning</h2>
            <p className="text-lg text-muted-foreground mb-8">
              I'm committed to ongoing education and staying current with the latest technologies and best practices in the industry.
            </p>
            <div className="inline-flex items-center bg-white px-6 py-3 rounded-md shadow-soft">
              <span className="mr-2 text-muted-foreground">Currently studying:</span>
              <span className="font-semibold">Advanced Machine Learning & AI</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certifications;
