import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-red-50 to-orange-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                🍕 Premium & Authentic Pizzas
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Fresh, Flavor-Loaded
              <span className="text-red-600 block">Pizzas in Surat</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Italian & Indian Fusion | Premium Ingredients | Loved in Vesu
            </p>

            {/* Special Offer Badge */}
            <div className="bg-green-600 text-white p-4 rounded-lg mb-8 inline-block">
              <div className="text-lg font-bold">BUY 1 GET 1 FREE</div>
              <div className="text-sm">Every Tuesday & Thursday</div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://www.swiggy.com/restaurants/hemz-pizzario-safal-square-koramangala-surat-972541/dineout?is_retargeting=true&media_source=GoogleReserve&utm_campaign=GoogleMap&utm_source=GoogleReserve"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors inline-block text-center"
              >
                Book a Table
              </a>
              <a
                href="/menu"
                className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-50 transition-colors inline-block text-center"
              >
                View Menu
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              alt="Delicious pizza with fresh ingredients"
              className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-red-600">4.8⭐</div>
              <div className="text-sm text-gray-600">Loved by customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;