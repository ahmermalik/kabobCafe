import { MapPin, Phone, Clock } from "lucide-react";

export default function ContactSection() {

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Visit <span className="text-saffron">Us</span>
          </h2>
          <p className="text-xl text-gray-600">Come experience authentic Persian cuisine in the heart of Katy</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-saffron p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal mb-2">Address</h3>
                  <p className="text-gray-600">Katy, Texas 77094</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-pomegranate p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal mb-2">Phone</h3>
                  <p className="text-gray-600">(281)-492-8782</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-persian p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal mb-2">Hours</h3>
                  <div className="text-gray-600 space-y-1">
                    <p>Monday - Saturday: 11:00 AM - 9:30 PM</p>
                    <p className="text-pomegranate">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map Placeholder */}
          <div className="lg:h-96">
            <div className="bg-gray-200 rounded-xl h-full flex items-center justify-center text-gray-500">
              <div className="text-center">
                <MapPin className="w-12 h-12 mx-auto mb-4" />
                <p>Interactive Map Coming Soon</p>
                <p className="text-sm mt-2">We'll embed Google Maps here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
