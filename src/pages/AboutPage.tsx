import React from 'react';
import { MapPin, Star, Clock, Heart } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in pb-20">
      {/* --- Hero Section --- */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 px-4 text-center">
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
          A San Francisco Classic
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Serving the Mission District with no-nonsense, old-school deliciousness. 
          We keep it simple: fresh dough, classic flavors, and open when you need us most.
        </p>
      </section>

      {/* --- Section 1: The Mission District (Location) --- */}
      <section className="container mx-auto px-4 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 flex flex-col justify-center">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-6 relative inline-block">
              The Heart of the Mission
              <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary rounded-full"></span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Located on 24th Street, The Jelly Donut has been a neighborhood landmark for years. In a city that is constantly changing, we remain a constant. We are the spot where locals grab their morning coffee and a glaze, and where late-night wanderers find a sweet refuge.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We aren't trying to reinvent the wheel. We believe the perfect donut is one you grew up with—fluffy, slightly crispy on the outside, and generous with the filling. That's the San Francisco way.
            </p>
            <div className="mt-8 flex items-center text-primary font-medium bg-muted/50 p-4 rounded-xl w-fit">
              <MapPin className="mr-2" size={20} />
              <span>3185 24th St, San Francisco, CA 94110</span>
            </div>
          </div>
          {/* Image representing the busy, colorful Mission District vibe */}
          <div className="order-1 lg:order-2 h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-md border border-border/50">
            <img 
              src="https://i.ibb.co/4nqjsh7K/about.png" 
              alt="San Francisco Mission District Street Scene" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* --- Section 2: The Donut Philosophy --- */}
      <section className="bg-muted/50 py-24">
        <div className="container mx-auto px-4">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image of classic donuts in a display case */}
            <div className="h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-md border border-border/50 order-1">
              <img 
                src="https://images.pexels.com/photos/913816/pexels-photo-913816.jpeg" 
                alt="Classic donuts in display case" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center order-2">
              <h2 className="font-serif text-4xl font-bold text-foreground mb-6 relative inline-block">
                Big Fluff, Real Flavor
                <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary rounded-full"></span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                If you know, you know. Our donuts are famous for being bigger, fluffier, and filled to the brim. From our namesake jelly-filled delights to our massive Apple Fritters that define the genre, we don't believe in cutting corners on size or taste.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                While others chase trends with tiny artisanal pastries, we stick to the classics that comfort the soul. A pink box from The Jelly Donut means something special in this town.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center text-foreground font-medium p-4 bg-background rounded-xl shadow-sm border border-border/50">
                  <Star className="mr-3 text-primary" size={24} />
                  <span>Local Legend</span>
                </div>
                <div className="flex items-center text-foreground font-medium p-4 bg-background rounded-xl shadow-sm border border-border/50">
                  <Clock className="mr-3 text-primary" size={24} />
                  <span>Open Late</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 3: Community Promise --- */}
      <section className="pt-24 px-4 text-center">
        <h2 className="font-serif text-4xl font-bold text-foreground mb-8">
          More Than Just A Donut Shop
        </h2>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12">
          We are proud to be part of the fabric of San Francisco. 
          Whether you're a long-time resident of the Mission or a visitor exploring 24th Street, 
          you're always welcome here for a warm smile and a hot donut.
        </p>
        
        {/* A wide shot representing the community/shop interior */}
        <div className="max-w-5xl mx-auto h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-lg border border-border/50 relative group">
           <img 
              src="https://images.unsplash.com/photo-1509482560494-4126f8225994?w=1200&auto=format&fit=crop&q=80" 
              alt="Donut shop counter vibe" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
             <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                <div className="bg-background/90 backdrop-blur-sm p-6 rounded-2xl border border-primary/20">
                  <div className="flex items-center gap-2 text-2xl font-serif font-bold text-primary">
                    <Heart className="fill-current" />
                    <span>Thank you, SF!</span>
                  </div>
                </div>
             </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;