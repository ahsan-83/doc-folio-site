import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-serif font-bold text-foreground mb-4">
              Dr. Medical Professional
            </h3>
            <p className="text-muted-foreground">
              Board Certified Physician providing exceptional healthcare with
              compassion and excellence.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    document
                      .getElementById("about")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    document
                      .getElementById("treatments")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Treatments
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    document
                      .getElementById("locations")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Locations
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@drprofessional.com</li>
              <li>Fax: (555) 123-4568</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} Dr. Medical Professional. All rights reserved. Made with
            <Heart className="h-4 w-4 text-primary fill-primary" />
            for better healthcare.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            This is a professional medical practice website. All information is for
            general purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
