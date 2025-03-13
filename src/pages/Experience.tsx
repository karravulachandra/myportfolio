
import ExperienceCard from "@/components/ExperienceCard";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovators Inc.",
      location: "San Francisco, CA",
      startDate: "Jan 2021",
      endDate: "Present",
      description: "Leading the development of responsive web applications using React, TypeScript, and Next.js. Implemented performance optimizations that improved page load times by 40%. Mentoring junior developers and establishing coding standards.",
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      location: "New York, NY",
      startDate: "Mar 2019",
      endDate: "Dec 2020",
      description: "Developed and maintained full-stack applications using React, Node.js, and PostgreSQL. Collaborated with UX designers to implement responsive designs. Integrated third-party APIs and services to enhance application functionality.",
    },
    {
      title: "Web Developer",
      company: "Creative Web Agency",
      location: "Boston, MA",
      startDate: "Jun 2017",
      endDate: "Feb 2019",
      description: "Built custom websites for clients across various industries. Utilized HTML, CSS, JavaScript, and PHP to create responsive and interactive web experiences. Worked directly with clients to gather requirements and implement feedback.",
    },
    {
      title: "Junior Developer",
      company: "StartUp Accelerator",
      location: "Austin, TX",
      startDate: "Jan 2016",
      endDate: "May 2017",
      description: "Assisted in the development of web applications for early-stage startups. Gained experience with frontend frameworks and backend technologies. Participated in code reviews and agile development processes.",
    },
  ];

  return (
    <div className="pt-20">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 fade-in-section">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">My Experience</h1>
            <p className="text-muted-foreground">
              A timeline of my professional journey and the experience I've gained along the way.
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="timeline-line"></div>
            
            {/* Experience cards */}
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={index}
                title={exp.title}
                company={exp.company}
                location={exp.location}
                startDate={exp.startDate}
                endDate={exp.endDate}
                description={exp.description}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 fade-in-section">
            <h2 className="text-3xl font-bold mb-4">Key Achievements</h2>
            <p className="text-muted-foreground">
              Highlights from my professional career that I'm particularly proud of.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="fade-in-section card-glass p-6 rounded-xl">
              <div className="bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full text-sm inline-block mb-4">
                Performance
              </div>
              <h3 className="text-xl font-semibold mb-3">
                40% Faster Load Times
              </h3>
              <p className="text-muted-foreground">
                Implemented advanced optimization techniques that reduced initial load times by 40%, significantly improving user experience and conversion rates.
              </p>
            </div>
            
            <div className="fade-in-section card-glass p-6 rounded-xl">
              <div className="bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full text-sm inline-block mb-4">
                Leadership
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Team Growth & Mentorship
              </h3>
              <p className="text-muted-foreground">
                Mentored 5 junior developers who went on to become senior developers, establishing coding standards and best practices that improved team productivity.
              </p>
            </div>
            
            <div className="fade-in-section card-glass p-6 rounded-xl">
              <div className="bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full text-sm inline-block mb-4">
                Innovation
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Microservices Architecture
              </h3>
              <p className="text-muted-foreground">
                Led the transition from a monolithic application to a microservices architecture, resulting in improved scalability and faster feature deployment.
              </p>
            </div>
            
            <div className="fade-in-section card-glass p-6 rounded-xl">
              <div className="bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full text-sm inline-block mb-4">
                Recognition
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Technology Excellence Award
              </h3>
              <p className="text-muted-foreground">
                Received the company's annual Technology Excellence Award for developing an innovative solution that streamlined internal processes by 60%.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
