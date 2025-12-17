import React from 'react';
import { ShoppingBag } from 'lucide-react';

// Mock data for menu items
// In a real app, this would likely come from an API or a separate data file.
const MENU_DATA = [
  {
    category: "Classic Favorites",
    description: "The timeless flavors you know and love, perfected.",
    items: [
      {
        id: 1,
        name: "The Classic Jelly",
        price: "$3.50",
        description: "Fluffy yeast donut filled with house-made raspberry jam and dusted with powdered sugar.",
        image: "https://images.pexels.com/photos/913816/pexels-photo-913816.jpeg",
        isPopular: true,
      },
      {
        id: 2,
        name: "Vanilla Bean Glaze",
        price: "$3.00",
        description: "Classic ring donut dipped in warm Madagascar vanilla bean glaze.",
        image: "https://images.pexels.com/photos/768082/pexels-photo-768082.jpeg",
        isPopular: true,
      },
      {
        id: 3,
        name: "Chocolate Lover",
        price: "$4.00",
        description: "Rich chocolate cake donut with dark chocolate ganache and chocolate shavings.",
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&h=500&fit=crop",
      },
      {
        id: 4,
        name: "Old Fashioned Plain",
        price: "$2.75",
        description: "A crunchy, cracked exterior with a soft, cakey interior. Simple perfection.",
        image: "https://images.unsplash.com/photo-1612240498936-65f5101365d2?w=500&h=500&fit=crop",
      },
    ]
  },
  {
    category: "Specialty Creations",
    description: "Unique flavor combinations for the adventurous palate.",
    items: [
      {
        id: 5,
        name: "Pink Paradise",
        price: "$3.75",
        description: "Strawberry glaze with rainbow sprinkles on a vanilla cake donut.",
        image: "https://images.pexels.com/photos/2064662/pexels-photo-2064662.jpeg",
      },
      {
        id: 6,
        name: "Maple Bacon",
        price: "$4.50",
        description: "Sweet maple glaze topped with crispy, salty bacon bits.",
        image: "https://images.pexels.com/photos/1566772/pexels-photo-1566772.jpeg",
        isPopular: true,
      },
      {
        id: 7,
        name: "Blueberry Crumb",
        price: "$3.95",
        description: "Blueberry cake donut topped with a cinnamon streusel crumble.",
        image: "https://images.pexels.com/photos/4963934/pexels-photo-4963934.jpeg",
      },
      {
        id: 8,
        name: "Lemon Poppyseed",
        price: "$3.50",
        description: "Zesty lemon glaze on a poppyseed cake donut.",
        image: "https://images.unsplash.com/photo-1598346762291-aee88549193f?w=500&h=500&fit=crop",
      },
    ]
  },
  {
    category: "Vegan Options",
    description: "Plant-based deliciousness without compromise.",
    items: [
      {
        id: 9,
        name: "Vegan Chocolate Glaze",
        price: "$3.50",
        description: "A soft vegan yeast donut with a rich chocolate glaze.",
        image: "https://images.pexels.com/photos/4828437/pexels-photo-4828437.jpeg",
      },
      {
        id: 10,
        name: "Vegan Cinnamon Sugar",
        price: "$3.00",
        description: "Tossed in a perfect blend of cinnamon and sugar.",
        image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=500&h=500&fit=crop",
      },
    ]
  }
];

// --- Components ---

interface MenuItemProps {
  name: string;
  price: string;
  description: string;
  image: string;
  isPopular?: boolean;
}

const MenuItemCard: React.FC<MenuItemProps> = ({ name, price, description, image, isPopular }) => {
  return (
    <div className="group flex flex-col h-full bg-card rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {isPopular && (
          <span className="absolute top-4 left-4 bg-secondary text-secondary-foreground text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            Popular
          </span>
        )}
      </div>
      <div className="flex flex-col flex-grow p-6">
        <div className="flex justify-between items-baseline mb-2">
          <h3 className="font-serif text-2xl font-semibold text-foreground">{name}</h3>
          <span className="text-lg font-bold text-primary font-serif">{price}</span>
        </div>
        <p className="text-muted-foreground text-sm flex-grow mb-6 line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
};

const MenuPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in pb-20">
      {/* Page Header */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 px-4 text-center">
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
          Our Full Menu
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Explore our complete selection of handcrafted donuts, from beloved classics to inventive new creations. Made fresh daily.
        </p>
      </section>

      {/* Menu Categories */}
      <div className="container mx-auto px-4 space-y-24">
        {MENU_DATA.map((section, index) => (
          <section key={index}>
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl font-bold text-foreground mb-4 inline-block relative">
                {section.category}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-primary rounded-full"></span>
              </h2>
              <p className="text-muted-foreground mt-4">{section.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {section.items.map((item) => (
                <MenuItemCard key={item.id} {...item} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;