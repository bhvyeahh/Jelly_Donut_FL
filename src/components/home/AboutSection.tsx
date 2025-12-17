import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1699393738548-4c0b4fe40ecd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwyfHxlYXRpbmclMjBkb251dCUyMGhhcHB5fGVufDB8MXx8fDE3NjU5NjU1NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="Happy customer eating donut" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-10 -right-4 md:-right-10 bg-background p-6 rounded-3xl shadow-xl border border-border max-w-xs animate-slide-up">
              <p className="font-serif text-lg font-bold italic text-primary mb-2">"Best donut I've ever tasted!"</p>
              <div className="flex items-center space-x-3">
                <img src="https://i.pravatar.cc/100?img=32" alt="Reviewer" className="w-10 h-10 rounded-full" />
                <div>
                  <p className="text-sm font-bold">Sarah Jenkins</p>
                  <p className="text-xs text-muted-foreground">Local Foodie</p>
                </div>
              </div>
            </div>
            
            {/* Decoration */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-50 -z-10"></div>
          </div>

          {/* Text Side */}
          <div className="order-1 lg:order-2">
            <span className="text-primary font-medium tracking-wider uppercase text-sm">Our Sweet Story</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mt-4 mb-6 leading-tight">
              Spreading joy, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">one donut at a time.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              It started with a simple craving and a grandmother's recipe. At The Jelly Donuts, we believe that a donut isn't just a treat—it's a moment of happiness.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "100% Hand-rolled dough every morning",
                "Locally sourced jams and fillings",
                "Organic fair-trade coffee pairings"
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="h-6 w-6 rounded-full bg-secondary/50 flex items-center justify-center text-secondary-foreground">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <span className="font-medium text-foreground/80">{item}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="rounded-full px-8 h-12 shadow-md">
              Read Our Full Story
            </Button>
          </div>
          
        </div>
      </div>
    </section>
  );
}
