import React from 'react';

const Combos = () => {
  const combos = [
    {
      price: '₹549/-',
      items: [
        '1 Medium Premium Pizza',
        '4 Pcs Garlic Bread with Cheese',
        '1 Plate of French Fries',
        '2 Soft Drink (Can)'
      ]
    },
    {
      price: '₹649/-',
      items: [
        '1 Medium Premium Pizza',
        '1 Bowl of Pasta',
        '4 Pcs Garlic Bread with Cheese',
        '2 Soft Drink (Can)'
      ]
    },
    {
      price: '₹699/-',
      items: [
        '1 Large Premium Pizza',
        '6 Pcs Garlic Bread with Cheese',
        '1 Plate of French Fries',
        '3 Soft Drink (Can)'
      ]
    },
    {
      price: '₹799/-',
      items: [
        '1 Large Premium Pizza',
        '1 Bowl of Pasta',
        '6 Pcs Garlic Bread with Cheese',
        '3 Soft Drink (Can)'
      ]
    },
    {
      price: '₹1099/-',
      items: [
        '2 Medium Premium Pizza',
        '8 Pcs Garlic Bread with Cheese',
        '2 Plate of French Fries',
        '4 Soft Drink (Can)'
      ]
    },
    {
      price: '₹1199/-',
      items: [
        '2 Medium Premium Pizza',
        '2 Bowl of Pasta',
        '8 Pcs Garlic Bread with Cheese',
        '4 Soft Drink (Can)'
      ]
    }
  ];

  return (
    <section className="py-16 bg-hemzBg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-hemzGreen uppercase tracking-wide mb-2">
            Combos
          </h2>
          <p className="text-gray-600 text-lg">
            Perfect value meals for every group
          </p>
        </div>

        {/* MOBILE: Horizontal Scroll */}
        <div className="md:hidden overflow-x-auto">
          <div className="flex gap-4 w-max px-4 pb-4">
            {combos.map((combo, index) => (
              <div
                key={index}
                className="min-w-[280px] bg-white rounded-xl shadow-lg border border-gray-200 p-5"
              >
                <div className="bg-hemzRed text-white font-bold inline-block px-4 py-1 rounded-full mb-4">
                  {combo.price}
                </div>

                <ul className="space-y-2 text-sm text-gray-700">
                  {combo.items.map((item, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-hemzGreen font-bold">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* DESKTOP: 2 ROWS × 3 COLUMNS */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {combos.map((combo, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg border border-gray-200 p-6"
            >
              <div className="bg-hemzRed text-white font-bold inline-block px-4 py-1 rounded-full mb-4">
                {combo.price}
              </div>

              <ul className="space-y-2 text-gray-700">
                {combo.items.map((item, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-hemzGreen font-bold">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Combos;
