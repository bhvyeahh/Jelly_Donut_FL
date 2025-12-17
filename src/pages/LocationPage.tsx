import React from 'react';
import { MapPin, Clock, Phone, Navigation, DollarSign } from 'lucide-react';

const LocationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in pb-20">
      
      {/* --- Hero Section --- */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 px-4 text-center">
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
          Find Us
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          We are located in the heart of the Mission District, right at the corner of 24th & South Van Ness. Look for the pink box!
        </p>
      </section>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-24">
          
          {/* --- Left Column: Contact & Info --- */}
          <div className="space-y-8">
            {/* Address Card */}
            <div className="bg-card p-8 rounded-3xl border border-border/50 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                  <MapPin size={28} />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Address</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    3198 24th St<br />
                    (at South Van Ness)<br />
                    San Francisco, CA 94110
                  </p>
                  <a 
                    href="https://maps.google.com/?q=The+Jelly+Donut+3198+24th+St+San+Francisco" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-medium mt-4 hover:underline"
                  >
                    <Navigation size={18} />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-card p-8 rounded-3xl border border-border/50 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-secondary/30 p-3 rounded-full text-secondary-foreground shrink-0">
                  <Clock size={28} />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Hours</h3>
                  <ul className="text-muted-foreground text-lg space-y-2">
                    <li className="flex justify-between w-full gap-8">
                      <span>Mon - Sun</span>
                      <span className="font-medium text-foreground">5:00 AM – 10:00 PM</span>
                    </li>
                  </ul>
                  <p className="text-sm text-primary mt-4 font-medium bg-primary/5 inline-block px-3 py-1 rounded-lg">
                    *Open Late for Night Cravings
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-card p-8 rounded-3xl border border-border/50 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-accent/20 p-3 rounded-full text-accent-foreground shrink-0">
                  <Phone size={28} />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Contact</h3>
                  <p className="text-muted-foreground text-lg mb-2">
                    Need to place a large order? Give us a ring.
                  </p>
                  <a href="tel:+14156481419" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
                    (415) 648-1419
                  </a>
                </div>
              </div>
            </div>
            
             {/* Important Note Card (Cash Only) */}
             <div className="bg-destructive/10 p-8 rounded-3xl border border-destructive/20">
              <div className="flex items-center gap-4">
                <div className="bg-background p-3 rounded-full text-destructive shrink-0 shadow-sm">
                  <DollarSign size={28} />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-destructive mb-1">Cash Only</h3>
                  <p className="text-destructive/80 text-lg">
                    Please bring cash. ATM available nearby.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* --- Right Column: The Map --- */}
          <div className="lg:col-span-2 h-[500px] lg:h-auto min-h-[500px] bg-muted rounded-3xl overflow-hidden border border-border/50 shadow-inner relative group">
            {/* Using an iframe for the map is the standard way to embed without an API key for display only.
              We point it to the specific address.
            */}
            <iframe 
              title="The Jelly Donut Location"
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }} 
              loading="lazy" 
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=The+Jelly+Donut+3198+24th+St+San+Francisco+CA+94110&t=&z=15&ie=UTF8&iwloc=&output=embed"
            ></iframe>
            
            {/* Overlay hint */}
            <div className="absolute bottom-6 right-6 bg-background/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg border border-border/50 max-w-xs hidden md:block">
              <p className="font-serif font-bold text-foreground mb-1">Parking Tip</p>
              <p className="text-sm text-muted-foreground">
                Street parking can be tricky in the Mission. We recommend checking side streets off South Van Ness.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LocationPage;