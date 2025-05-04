
import { CheckCircle, Download } from "lucide-react";

const About = () => {
  const skills = [
    { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "React.js", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", items: ["Java", "Python", "SQL", "MongoDB"] },
    { category: "Cloud Technology", items: ["AWS", "GCP", "Azure"] },
    { category: "AI/ML", items: ["Machine Learning", "TensorFlow", "Azure ML"] },
  ];

  return (
    <div className="pt-20">
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-section">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">About Me</h1>
              <p className="text-muted-foreground mb-6">
                I'm a passionate Full Stack Developer , building web applications and  experiences that solve real-world problems.
              </p>
              <p className="text-muted-foreground mb-6">
                My journey in tech began at Acharya Nagarjuna University - RVR&JC College of Engineering, where I earned my degree in Computer Science. Since then, I've worked with startups and , helping in  build scalable, user-friendly applications that drive business growth.
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
              <div className="relative mx-auto group">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/40 to-blue-500/40 blur-xl opacity-70 animate-pulse-subtle group-hover:opacity-100 transition-opacity"></div>
                <div className="aspect-square w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden shadow-xl border-4 border-white dark:border-gray-800 relative z-10">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D5603AQEAqipQcwrt_g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1721897789534?e=1747872000&v=beta&t=nOWoRhKWg95l43hRxjwimi6SRMoydSBzU73ZJ7OqySc"
                    alt="Chandra Karravula"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-full -z-10"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/5 rounded-full -z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-full -z-20 blur-xl"></div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
