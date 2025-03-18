
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Info } from "lucide-react";

export const EmailJSCredentialsForm = () => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [showAlternativeInfo, setShowAlternativeInfo] = useState(false);
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
    const useDirectEmail = localStorage.getItem("use_direct_email");

    if ((!serviceId || !templateId || !userId) && useDirectEmail !== "true") {
      setIsOpen(true);
    } else {
      setCredentials({
        serviceId: serviceId || "",
        templateId: templateId || "",
        userId: userId || "",
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
    localStorage.setItem("use_direct_email", "false");

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

  const useDirectEmail = () => {
    localStorage.setItem("use_direct_email", "true");
    localStorage.removeItem("emailjs_service_id");
    localStorage.removeItem("emailjs_template_id");
    localStorage.removeItem("emailjs_user_id");
    
    toast({
      title: "Direct Email Option Selected",
      description: "The contact form will now use direct email links instead of EmailJS.",
    });
    
    setIsOpen(false);
  };

  return (
    <>
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
            <div className="space-y-2 pt-4">
              <p className="text-sm text-muted-foreground flex items-center">
                <Info className="h-4 w-4 mr-2" /> Don't have EmailJS credentials?
                <Button type="button" variant="link" className="px-1" onClick={() => setShowAlternativeInfo(true)}>
                  Use alternative method
                </Button>
              </p>
            </div>
            <div className="pt-4 flex justify-end space-x-2">
              <Button
                type="button"
                variant="outline"
                onClick={useDirectEmail}
              >
                Skip for Now
              </Button>
              <Button type="submit">Save Credentials</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
      
      <AlertDialog open={showAlternativeInfo} onOpenChange={setShowAlternativeInfo}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Alternative Contact Options</AlertDialogTitle>
            <AlertDialogDescription>
              Without EmailJS credentials, the contact form will use a direct email link. This means:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Visitors will be redirected to their default email client</li>
                <li>The form data will be pre-populated in a new email</li>
                <li>No server-side processing or storage of messages will occur</li>
              </ul>
              <p className="mt-2">
                To use EmailJS later (recommended for better form functionality), you will need to:
              </p>
              <ol className="list-decimal pl-6 mt-2 space-y-1">
                <li>Create a free account at <a href="https://www.emailjs.com" target="_blank" rel="noopener noreferrer" className="text-primary underline">EmailJS.com</a></li>
                <li>Set up an email service and a template</li>
                <li>Get your Service ID, Template ID, and User ID</li>
              </ol>
              <p className="mt-2">
                You can access this setup again by clearing your browser's local storage.
              </p>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={useDirectEmail}>Use Direct Email</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default EmailJSCredentialsForm;
