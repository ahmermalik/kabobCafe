import { useQuery } from "@tanstack/react-query";
import { MenuItem } from "@shared/schema";
import { Button } from "@/components/ui/button";

export default function FeaturedDishes() {
  const { data: menuItems, isLoading } = useQuery<MenuItem[]>({
    queryKey: ['/api/menu'],
  });

  if (isLoading) {
    return (
      <section className="py-20 bg-cream persian-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
              Chef's <span className="text-pomegranate">Favorites</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden animate-pulse">
                <div className="w-full h-48 bg-gray-200"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded mb-4"></div>
                  <div className="flex justify-between items-center">
                    <div className="h-6 bg-gray-200 rounded w-20"></div>
                    <div className="h-10 bg-gray-200 rounded w-24"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const featuredItems = menuItems?.filter(item => 
    ['Chicken Soltani', 'Koobideh Kabob', 'Lamb Kabob'].includes(item.name)
  ) || [];

  return (
    <section className="py-20 bg-cream persian-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Chef's <span className="text-pomegranate">Favorites</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most beloved dishes, crafted with traditional recipes and the finest ingredients
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {featuredItems.map((item) => (
            <div key={item.id} className="menu-card bg-white rounded-xl overflow-hidden">
              <img 
                src={item.imageUrl || "/images/food/kabob-grill-2.jpg"} 
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-charcoal mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-pomegranate">${item.price}</span>
                  <Button className="bg-saffron text-white hover:bg-opacity-90 transition-all">
                    Add to Order
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
