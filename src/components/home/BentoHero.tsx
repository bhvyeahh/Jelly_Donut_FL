import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function BentoHero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
        
        {/* Main Hero Block */}
        <div className="col-span-1 md:col-span-2 md:row-span-2 rounded-[2rem] bg-background border border-border p-8 md:p-12 flex flex-col justify-center relative overflow-hidden group shadow-soft hover:shadow-xl transition-all duration-500">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -mr-16 -mt-16 transition-all duration-700 group-hover:bg-secondary/30"></div>
          
          <div className="relative z-10 max-w-xl">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-6">
              <Star className="h-4 w-4 fill-current" />
              <span>Voted Best Donuts 2024</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-[1.1] mb-6 text-foreground">
              Donuts worth <span className="text-primary italic">obsessing</span> over.
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-md leading-relaxed">
              Handcrafted daily with premium ingredients and overflowing with our signature house-made jellies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full text-lg px-8 h-12 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
                View Menu
              </Button>
              <Button variant="outline" size="lg" className="rounded-full text-lg px-8 h-12 border-2 hover:bg-secondary/20 transition-all">
                Our Story <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Top Right Image Block */}
        <div className="col-span-1 md:row-span-1 rounded-[2rem] overflow-hidden relative group shadow-md h-64 md:h-auto">
          <img 
            src="https://images.unsplash.com/photo-1617178964270-2a3066cf5bfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxfHxkZWxpY2lvdXMlMjBwaW5rJTIwZG9udXR8ZW58MHwyfHx8MTc2NTk2NTU0Nnww&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="Pink Donut" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
            <p className="text-white font-medium text-lg">Signature Strawberry Glaze</p>
          </div>
        </div>

        {/* Bottom Right Info Block */}
        <div className="col-span-1 md:row-span-1 rounded-[2rem] bg-secondary/30 border border-secondary p-8 flex flex-col justify-between relative overflow-hidden group shadow-sm hover:shadow-md transition-all">
          <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-primary/20 rounded-full blur-2xl transition-all group-hover:bg-primary/30"></div>
          
          <div>
            <h3 className="text-2xl font-serif font-bold mb-2">Open Daily</h3>
            <p className="text-secondary-foreground/80">7:00 AM - 8:00 PM</p>
          </div>
          
          <div className="mt-auto pt-8">
            <div className="flex -space-x-3 mb-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Customer" />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-white bg-primary text-white flex items-center justify-center text-xs font-bold">
                +2k
              </div>
            </div>
            <p className="text-sm font-medium text-secondary-foreground">Happy Customers</p>
          </div>
        </div>
        
      </div>
    </section>
  );
}
