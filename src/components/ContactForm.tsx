
import { useState, useEffect } from "react";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailjsCredentials, setEmailjsCredentials] = useState({
    serviceId: "",
    templateId: "",
    userId: "",
  });

  useEffect(() => {
    // Get EmailJS credentials from localStorage
    const serviceId = localStorage.getItem("emailjs_service_id");
    const templateId = localStorage.getItem("emailjs_template_id");
    const userId = localStorage.getItem("emailjs_user_id");

    if (serviceId && templateId && userId) {
      setEmailjsCredentials({
        serviceId,
        templateId,
        userId,
      });
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const { serviceId, templateId, userId } = emailjsCredentials;
    
    if (!serviceId || !templateId || !userId) {
      toast({
        title: "Configuration needed",
        description: "Please set up your EmailJS credentials first",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }
    
    try {
      // Prepare the email template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: "Chandra Karravula",
      };

      // Send the email using EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        userId
      );

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      // Reset the form after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error sending message",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="text-sm font-medium text-foreground"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white"
            placeholder="Your name"
          />
        </div>
        
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-sm font-medium text-foreground"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white"
            placeholder="Your email"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <label
          htmlFor="subject"
          className="text-sm font-medium text-foreground"
        >
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white"
          placeholder="Message subject"
        />
      </div>
      
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="text-sm font-medium text-foreground"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white"
          placeholder="Your message"
        ></textarea>
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center w-full md:w-auto px-6 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-md transition-colors disabled:opacity-70"
      >
        {isSubmitting ? (
          <>Sending...</>
        ) : (
          <>
            Send Message
            <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
