import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { BentoHero } from '@/components/home/BentoHero';
import { MenuSection } from '@/components/home/MenuSection';
import { AboutSection } from '@/components/home/AboutSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20 selection:text-primary">
      <Navbar />
      
      <main>
        <BentoHero />
        <MenuSection />
        <AboutSection />
      </main>
    </div>
  );
}
