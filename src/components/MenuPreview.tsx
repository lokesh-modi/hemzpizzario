import React from 'react';
import { ArrowRight } from 'lucide-react';

const MenuPreview = () => {
  const categories = [
    {
      name: 'Premium',
      description: 'Gourmet pizzas with premium toppings',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Supreme',
      description: 'Loaded with the finest ingredients',
      image: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Exotic',
      description: 'Unique flavors from around the world',
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Authentic',
      description: 'Traditional Neapolitan style pizzas',
      image: 'https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-hemzGreen mb-3 uppercase tracking-wide">
            Our Pizza Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From traditional Italian to innovative fusion flavors
          </p>
        </div>

        {/* MOBILE: ONE CARD PER SCREEN | DESKTOP: GRID */}
        <div className="relative">
          <div
            className="
              flex overflow-x-auto snap-x snap-mandatory
              md:grid md:grid-cols-2 lg:grid-cols-4
              md:gap-8
              md:overflow-visible
              scrollbar-hide
            "
          >
            {categories.map((category, index) => (
              <div
                key={index}
                className="
                  snap-center
                  w-full flex-shrink-0
                  md:w-auto
                  px-2 md:px-0
                "
              >
                <div className="
                  bg-white rounded-2xl overflow-hidden
                  shadow-lg hover:shadow-xl transition-shadow
                ">
                  {/* Image */}
                  <div className="relative h-56">
                    <img
                      src={category.image}
                      alt={`${category.name} pizza`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/25" />
                  </div>

                  {/* Content */}
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-extrabold text-hemzGreen mb-2 uppercase">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 text-base">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="/menu"
            className="inline-flex items-center bg-hemzRed text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition"
          >
            View Full Menu
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default MenuPreview;
