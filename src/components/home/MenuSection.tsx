import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

const MENU_ITEMS = [
  {
    id: 1,
    name: "The Classic Jelly",
    description: "Fluffy yeast donut filled with house-made raspberry jam and dusted with powdered sugar.",
    price: "$3.50",
    image: "https://images.unsplash.com/photo-1637928382142-ec38e640072f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwyfHxkZWxpY2lvdXMlMjBwaW5rJTIwZG9udXR8ZW58MHwyfHx8MTc2NTk2NTU0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    popular: true
  },
  {
    id: 2,
    name: "Pink Paradise",
    description: "Strawberry glaze with rainbow sprinkles on a vanilla cake donut.",
    price: "$3.75",
    image: "https://images.unsplash.com/photo-1633679535523-fae61171f5bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwzfHxkZWxpY2lvdXMlMjBwaW5rJTIwZG9udXR8ZW58MHwyfHx8MTc2NTk2NTU0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    popular: false
  },
  {
    id: 3,
    name: "Vanilla Bean Glaze",
    description: "Classic ring donut dipped in warm Madagascar vanilla bean glaze.",
    price: "$3.00",
    image: "https://images.unsplash.com/photo-1722002328933-f9d658d57676?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHw0fHxkZWxpY2lvdXMlMjBwaW5rJTIwZG9udXR8ZW58MHwyfHx8MTc2NTk2NTU0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    popular: true
  },
  {
    id: 4,
    name: "Chocolate Lover",
    description: "Rich chocolate cake donut with dark chocolate ganache and chocolate shavings.",
    price: "$4.00",
    image: "https://images.unsplash.com/photo-1650846704787-cc644f6bf4d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwyfHxjb2ZmZWUlMjBhbmQlMjBkb251dHMlMjBhZXN0aGV0aWN8ZW58MHwwfHx8MTc2NTk2NTU0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    popular: false
  }
];

export function MenuSection() {
  return (
    <section id="menu" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-primary font-medium tracking-wider uppercase text-sm">Fresh From The Fryer</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-3 mb-6">Our Customer Favorites</h2>
          <p className="text-muted-foreground text-lg">
            Every morning, we start from scratch. No mixes, no shortcuts. Just pure, simple ingredients turned into something magical.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {MENU_ITEMS.map((item) => (
            <div key={item.id} className="group rounded-3xl bg-card border border-border overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="relative h-64 overflow-hidden bg-muted">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {item.popular && (
                  <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Popular
                  </div>
                )}
                <button className="absolute bottom-4 right-4 h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-lg text-primary opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <Plus className="h-5 w-5" />
                </button>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif font-bold text-xl">{item.name}</h3>
                  <span className="font-bold text-primary bg-primary/5 px-2 py-1 rounded-lg">{item.price}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="rounded-full px-8 h-12">View Full Menu</Button>
        </div>
      </div>
    </section>
  );
}
