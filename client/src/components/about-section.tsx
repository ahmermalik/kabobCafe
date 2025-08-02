export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/images/restaurant/hoshang.png" 
              alt="Hoshang, owner of Shish Kabob Cafe Katy" 
              className="rounded-xl shadow-2xl w-full h-96 object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal">
              Meet the <span className="text-saffron">Owner</span>
            </h2>
            <h3 className="text-2xl font-semibold mb-4 text-persian">Hoshang</h3>
            <p className="text-xl mb-6 text-gray-800">
              Hoshang opened the first Shish Kabob Cafe in Houston in 1994. Since then he has been serving up the most flavorful Persian food using the freshest ingredients and halal meats sourced locally.
            </p>
            <p className="text-lg mb-8 text-gray-700">
              Come on by and visit the restaurant that has been a part of Houston's community for several decades! We believe in authentic flavors, traditional recipes, and the warmest hospitality.
            </p>
            
            {/* Restaurant Hours */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold mb-4 text-saffron">Restaurant Hours</h4>
              <div className="space-y-2 text-gray-800">
                <div className="flex justify-between">
                  <span>Monday - Saturday</span>
                  <span>11:00 AM - 9:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-pomegranate">Sunday</span>
                  <span className="text-pomegranate">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
