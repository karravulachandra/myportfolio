
import { CheckCircle, Download } from "lucide-react";

const About = () => {
  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "JavaScript"] },
    { category: "Backend", items: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB"] },
    { category: "DevOps & Tools", items: ["Git", "Docker", "AWS", "CI/CD", "Figma", "Jest"] },
  ];

  return (
    <div className="pt-20">
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-section">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">About Me</h1>
              <p className="text-muted-foreground mb-6">
                I'm a passionate Full Stack Developer with 5+ years of experience building web applications and digital experiences that solve real-world problems.
              </p>
              <p className="text-muted-foreground mb-6">
                My journey in tech began at University of Technology, where I earned my degree in Computer Science. Since then, I've worked with startups and established companies, helping them build scalable, user-friendly applications that drive business growth.
              </p>
              <p className="text-muted-foreground mb-8">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blog posts and community events.
              </p>
              <a
                href="/resume.pdf"
                download="resume.pdf"
                className="inline-flex items-center bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 hover:shadow-md"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </div>
            
            <div className="fade-in-section relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-medium border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                  alt="John Doe"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-full -z-10"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/5 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 fade-in-section">
            <h2 className="text-3xl font-bold mb-4">My Skills</h2>
            <p className="text-muted-foreground">
              Here are some of the technologies and tools I work with on a daily basis.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="fade-in-section card-glass p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">{skillGroup.category}</h3>
                <ul className="space-y-3">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="fade-in-section text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">My Approach</h2>
              <p className="text-muted-foreground">
                I believe in creating software that is not only functional but also intuitive and enjoyable to use.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="fade-in-section card-glass p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">Problem Solving</h3>
                <p className="text-muted-foreground">
                  I enjoy breaking down complex problems into manageable pieces and finding elegant solutions that balance technical excellence with business needs.
                </p>
              </div>
              
              <div className="fade-in-section card-glass p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">User-Centered Design</h3>
                <p className="text-muted-foreground">
                  I focus on creating experiences that are intuitive, accessible, and delightful for the end user, ensuring that technology serves people effectively.
                </p>
              </div>
              
              <div className="fade-in-section card-glass p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">Continuous Learning</h3>
                <p className="text-muted-foreground">
                  The tech landscape evolves rapidly, and I'm committed to staying current with emerging technologies and best practices through ongoing education.
                </p>
              </div>
              
              <div className="fade-in-section card-glass p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">Collaborative Development</h3>
                <p className="text-muted-foreground">
                  I thrive in collaborative environments where ideas are freely shared, and I value working with diverse teams to create better outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
