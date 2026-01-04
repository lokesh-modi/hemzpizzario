import React from 'react';

const Offers = () => {
  return (
    <section className="py-10 bg-hemzRed relative overflow-hidden">

      {/* Decorative dots (top-right like poster) */}
      <div className="absolute top-8 right-8 grid grid-cols-4 gap-2 opacity-40">
        {[...Array(16)].map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 bg-white rounded-full"></span>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">

        {/* Logo */}
        <div className="flex justify-center mb-3">
          <img
            src="/logo.png"
            alt="Hemz Pizzario Logo"
            className="h-20 w-auto"
          />
        </div>

        {/* Special Offer */}
        <p className="uppercase tracking-widest text-sm mb-1">
          Special Offer
        </p>

        {/* Green Brush Strip */}
        <div className="inline-block bg-hemzGreen px-6 py-2 rounded-md mb-3">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase">
            Buy 1 Get 1
          </h2>
        </div>

        {/* Free Pizza */}
        <h3 className="text-4xl md:text-6xl font-extrabold uppercase tracking-wide mb-2">
          Free Pizza
        </h3>

        {/* Days */}
        <p className="text-lg md:text-xl tracking-wide uppercase">
          Every Tuesday & Thursday
        </p>

        {/* CTA */}
        <div className="mt-5">
          <a
                href="https://www.swiggy.com/restaurants/hemz-pizzario-safal-square-koramangala-surat-972541/dineout?is_retargeting=true&media_source=GoogleReserve&utm_campaign=GoogleMap&utm_source=GoogleReserve"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-white text-hemzRed px-10 py-3 rounded-lg text-lg font-bold hover:opacity-90 transition">
            Book Your Table
          </button>
              </a>
          
        </div>

      </div>
    </section>
  );
};

export default Offers;
