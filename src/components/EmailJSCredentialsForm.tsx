
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export const EmailJSCredentialsForm = () => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [credentials, setCredentials] = useState({
    serviceId: "",
    templateId: "",
    userId: "",
  });

  useEffect(() => {
    // Check if credentials are already stored in localStorage
    const serviceId = localStorage.getItem("emailjs_service_id");
    const templateId = localStorage.getItem("emailjs_template_id");
    const userId = localStorage.getItem("emailjs_user_id");

    if (!serviceId || !templateId || !userId) {
      setIsOpen(true);
    } else {
      setCredentials({
        serviceId,
        templateId,
        userId,
      });
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!credentials.serviceId || !credentials.templateId || !credentials.userId) {
      toast({
        title: "Error",
        description: "All fields are required",
        variant: "destructive",
      });
      return;
    }

    // Store credentials in localStorage
    localStorage.setItem("emailjs_service_id", credentials.serviceId);
    localStorage.setItem("emailjs_template_id", credentials.templateId);
    localStorage.setItem("emailjs_user_id", credentials.userId);

    toast({
      title: "Success",
      description: "EmailJS credentials have been saved",
    });

    setIsOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Setup EmailJS Credentials</DialogTitle>
          <DialogDescription>
            To enable the contact form functionality, please provide your EmailJS credentials.
            These will be stored in your browser and used to send messages when visitors submit the form.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="serviceId">Service ID</Label>
            <Input
              id="serviceId"
              name="serviceId"
              value={credentials.serviceId}
              onChange={handleChange}
              placeholder="e.g., service_abc123"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="templateId">Template ID</Label>
            <Input
              id="templateId"
              name="templateId"
              value={credentials.templateId}
              onChange={handleChange}
              placeholder="e.g., template_abc123"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="userId">User ID (Public Key)</Label>
            <Input
              id="userId"
              name="userId"
              value={credentials.userId}
              onChange={handleChange}
              placeholder="e.g., user_abc123"
              required
            />
          </div>
          <div className="pt-4 flex justify-end space-x-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit">Save Credentials</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EmailJSCredentialsForm;
