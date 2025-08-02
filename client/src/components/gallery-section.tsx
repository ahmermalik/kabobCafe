const galleryImages = [
  {
    src: "/images/food/chicken-beef-plate.png",
    alt: "Delicious chicken and beef plate with saffron rice and grilled tomato"
  },
  {
    src: "/images/food/hummus-pita.png",
    alt: "Fresh hummus with warm pita bread served in traditional style"
  },
  {
    src: "/images/food/koobideh-kabobs-new.png",
    alt: "Perfectly grilled koobideh kabobs with saffron rice and vegetables"
  },
  {
    src: "/images/food/mixed-kabob-plate.png",
    alt: "Mixed kabob plate with koobideh and chicken kabob served with rice"
  },
  {
    src: "/images/food/shiraz-salad-new.png",
    alt: "Fresh Shiraz salad with diced cucumbers, tomatoes, and herbs"
  },
  {
    src: "/images/restaurant/storefront.jpg",
    alt: "Shish Kabob Cafe Katy restaurant storefront"
  }
];

export default function GallerySection() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Our <span className="text-pomegranate">Restaurant</span>
          </h2>
          <p className="text-xl text-gray-600">Experience the warm atmosphere of authentic Persian hospitality</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="rounded-lg shadow-lg h-64 w-full object-cover hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
