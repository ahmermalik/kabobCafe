import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import FeaturedDishes from "@/components/featured-dishes";
import MenuSection from "@/components/menu-section";
import AboutSection from "@/components/about-section";
import GallerySection from "@/components/gallery-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  useEffect(() => {
    document.title = "Shish Kabob Cafe Katy - Authentic Persian & Mediterranean Cuisine | Katy, TX";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Experience authentic Persian and Mediterranean cuisine at Shish Kabob Cafe Katy. Serving the most delicious kabobs, fresh ingredients, and halal food since 1994 in Katy, Texas 77094.');
    }
  }, []);

  return (
    <div className="scroll-smooth">
      <Navigation />
      <HeroSection />
      <FeaturedDishes />
      <MenuSection />
      <AboutSection />
      <GallerySection />
      <ContactSection />

      <Footer />
    </div>
  );
}
