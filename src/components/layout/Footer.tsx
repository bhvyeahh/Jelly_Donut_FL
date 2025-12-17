import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer id="footer" className="bg-muted/30 pt-16 pb-8 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-serif font-bold text-primary mb-4">The Jelly Donuts</h3>
            <p className="text-muted-foreground max-w-sm mb-6">
              Handcrafted donuts made with love and the finest ingredients. 
              Freshly fried every morning for your sweet delight.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-background rounded-full hover:text-primary hover:shadow-md transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-background rounded-full hover:text-primary hover:shadow-md transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-background rounded-full hover:text-primary hover:shadow-md transition-all">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Explore</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="#menu" className="text-muted-foreground hover:text-primary transition-colors">Our Menu</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">Our Story</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Catering</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Visit Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>123 Sprinkle Ave,<br />Sweet City, SC 90210</span>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>hello@jellydonuts.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} The Jelly Donuts. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
