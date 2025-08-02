import { ShoppingBag, FileText, Zap, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const deliveryPlatforms = [
  {
    name: "Favor Delivery",
    description: "Order for delivery",
    icon: ShoppingBag,
    bgColor: "bg-saffron",
    hoverColor: "group-hover:bg-pomegranate",
    link: "#", // Replace with actual Favor delivery link
  },
  {
    name: "DoorDash",
    description: "Fast delivery",
    icon: FileText,
    bgColor: "bg-pomegranate",
    hoverColor: "group-hover:bg-saffron",
    link: "#", // Replace with actual DoorDash link
  },
  {
    name: "Uber Eats",
    description: "Quick delivery",
    icon: Zap,
    bgColor: "bg-persian",
    hoverColor: "group-hover:bg-saffron",
    link: "#", // Replace with actual Uber Eats link
  },
];

export default function OrderSection() {
  return (
    <section id="order" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Order <span className="text-saffron">Online</span>
          </h2>
          <p className="text-xl text-gray-700">Get your favorite Persian dishes delivered or ready for pickup</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Delivery Platform Buttons */}
          {deliveryPlatforms.map((platform) => {
            const IconComponent = platform.icon;
            return (
              <a
                key={platform.name}
                href={platform.link}
                className="bg-gray-50 border border-gray-200 text-charcoal rounded-xl p-6 text-center hover:transform hover:scale-105 hover:shadow-lg transition-all duration-200 group"
              >
                <div className={`${platform.bgColor} p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center ${platform.hoverColor} transition-colors`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-charcoal">{platform.name}</h3>
                <p className="text-gray-700">{platform.description}</p>
              </a>
            );
          })}
          
          {/* Call to Order */}
          <div className="bg-saffron rounded-xl p-6 text-center hover:transform hover:scale-105 hover:shadow-lg transition-all duration-200">
            <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Phone className="w-8 h-8 text-charcoal" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Call to Order</h3>
            <p className="text-white font-semibold">(281)-492-8782</p>
          </div>
        </div>
        
        {/* Catering Information */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-charcoal">Catering Services</h3>
            <p className="text-gray-700 mb-6">
              Let us cater your next event with authentic Persian cuisine. Perfect for corporate events, weddings, and special occasions.
            </p>
            <Button className="bg-saffron text-white px-8 py-3 rounded-lg font-semibold hover:bg-pomegranate transition-all">
              Learn More About Catering
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
