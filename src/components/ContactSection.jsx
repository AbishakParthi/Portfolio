import { Mail, MapPin, Phone } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-card rounded-lg shadow-sm card-hover">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-full text-primary">
                <Mail size={24} />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-muted-foreground">abishakparthi@gmail.com</p>
          </div>

          <div className="p-6 bg-card rounded-lg shadow-sm card-hover">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-full text-primary">
                <Phone size={24} />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-muted-foreground">Available on Request</p>
          </div>

          <div className="p-6 bg-card rounded-lg shadow-sm card-hover">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-full text-primary">
                <MapPin size={24} />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-muted-foreground">India</p>
          </div>
        </div>
      </div>
    </section>
  );
};
