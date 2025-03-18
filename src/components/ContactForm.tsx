
import { useState, useEffect } from "react";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";

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
  const [useDirectEmail, setUseDirectEmail] = useState(false);

  useEffect(() => {
    // Get EmailJS credentials from localStorage
    const serviceId = localStorage.getItem("emailjs_service_id");
    const templateId = localStorage.getItem("emailjs_template_id");
    const userId = localStorage.getItem("emailjs_user_id");
    const directEmailPref = localStorage.getItem("use_direct_email");

    if (serviceId && templateId && userId) {
      setEmailjsCredentials({
        serviceId,
        templateId,
        userId,
      });
      setUseDirectEmail(false);
    } else if (directEmailPref === "true") {
      setUseDirectEmail(true);
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDirectEmailSubmit = () => {
    const { name, email, subject, message } = formData;
    
    // Create a mailto link with the form data
    const body = `
Name: ${name}
Email: ${email}

${message}
    `;
    
    const mailtoLink = `mailto:karravulachandra2001@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open the email client
    window.location.href = mailtoLink;
    
    // Reset the form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    
    toast({
      title: "Email client opened",
      description: "Your default email client has been opened with the message details.",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (useDirectEmail) {
      handleDirectEmailSubmit();
      setIsSubmitting(false);
      return;
    }
    
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
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-medium">Contact Form</h2>
        {useDirectEmail && (
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon">
                <Info className="h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-2">
                <h3 className="font-medium">Direct Email Mode</h3>
                <p className="text-sm text-muted-foreground">
                  This form will open your default email client when submitted. No data is stored or processed on a server.
                </p>
                <p className="text-sm text-muted-foreground">
                  To use EmailJS instead, clear your browser's local storage and refresh this page.
                </p>
              </div>
            </PopoverContent>
          </Popover>
        )}
      </div>

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
            {useDirectEmail ? "Open Email Client" : "Send Message"}
            <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
