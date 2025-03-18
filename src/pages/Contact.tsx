
import ContactForm from "@/components/ContactForm";
import EmailJSCredentialsForm from "@/components/EmailJSCredentialsForm";
import { Github, Linkedin, Mail, MapPin, MessageSquare, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="pt-20">
      <EmailJSCredentialsForm />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 fade-in-section">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h1>
            <p className="text-muted-foreground">
              Have a question or want to work together? I'd love to hear from you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
            <div className="lg:col-span-2 fade-in-section">
              <div className="card-glass p-6 rounded-xl">
                <h2 className="text-2xl font-semibold mb-6">Contact Info</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-secondary p-3 rounded-full mr-4">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-1">Email</h3>
                      <a href="mailto:karravulachandra2001@gmail.com" className="text-foreground hover:text-primary transition-colors">
                        karravulachandra2001@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-secondary p-3 rounded-full mr-4">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-1">Phone</h3>
                      <a href="tel:+17032269433" className="text-foreground hover:text-primary transition-colors">
                        +1 (703) 226-9433
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-secondary p-3 rounded-full mr-4">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-1">Location</h3>
                      <p className="text-foreground">Guntur, Andhra Pradesh</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-border">
                  <h3 className="text-sm font-medium text-muted-foreground mb-4">Connect With Me</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/chandrashivaji"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white p-3 rounded-full shadow-soft hover:shadow-medium hover:-translate-y-1 transition-all duration-300"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5 text-foreground" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/karravula-chandra-241306221/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white p-3 rounded-full shadow-soft hover:shadow-medium hover:-translate-y-1 transition-all duration-300"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5 text-foreground" />
                    </a>
                    <a
                      href="mailto:karravulachandra2001@gmail.com"
                      className="bg-white p-3 rounded-full shadow-soft hover:shadow-medium hover:-translate-y-1 transition-all duration-300"
                      aria-label="Email"
                    >
                      <Mail className="h-5 w-5 text-foreground" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3 fade-in-section">
              <div className="card-glass p-6 rounded-xl">
                <div className="flex items-center mb-6">
                  <MessageSquare className="h-5 w-5 text-primary mr-2" />
                  <h2 className="text-2xl font-semibold">Send Me a Message</h2>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-secondary/30 fade-in-section">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Looking for Opportunities</h2>
            <p className="text-lg text-muted-foreground mb-8">
              I'm currently available for freelance work and open to discussing full-time opportunities. If you have a project that needs some creative coding, let's talk!
            </p>
            <a
              href="mailto:karravulachandra2001@gmail.com"
              className="inline-flex items-center bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 hover:shadow-md"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Me Directly
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
