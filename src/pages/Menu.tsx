import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Menu() {
  const menuSections = [
    {
      name: 'Premium',
      items: [
        { name: 'Margherita', price: '₹245', description: 'Classic cheese pizza with rich tomato sauce' },
        { name: 'Spicy Waves 🌶️', price: '₹315', description: 'Spicy sauce with cheese and herbs' },
        { name: 'Tandoori Paneer', price: '₹315', description: 'Tandoori paneer, onion & capsicum' },
        { name: 'Indiano 🌶️', price: '₹315', description: 'Indian spices with loaded veggies' },
        { name: 'Americano', price: '₹315', description: 'Classic American-style veggie pizza' },
        { name: 'Farm House', price: '₹315', description: 'Onion, capsicum, tomato & mushroom' }
      ]
    },
    {
      name: 'Supreme',
      items: [
        { name: '5 Cheese Pizza', price: '₹395', description: 'Five rich cheese blend' },
        { name: 'Spicy Pepper Paneer 🌶️', price: '₹395', description: 'Paneer with spicy pepper seasoning' },
        { name: 'Mexicano', price: '₹395', description: 'Mexican spices with veggies' },
        { name: 'Paneer Bhurji 🌶️', price: '₹395', description: 'Indian-style paneer bhurji topping' },
        { name: 'Makhani Passion', price: '₹395', description: 'Creamy makhani sauce with paneer' },
        { name: 'Mushroom Magic', price: '₹395', description: 'Loaded mushrooms with cheese' }
      ]
    },
    {
      name: 'Exotic',
      items: [
        { name: '9 Cheese', price: '₹445', description: 'Ultimate cheese-loaded pizza' },
        { name: 'Italian Supreme 🌶️', price: '₹445', description: 'Italian herbs with spicy kick' },
        { name: 'Exotic Treat 🌶️', price: '₹445', description: 'Chef’s special exotic toppings' },
        { name: 'BBQ Paneer', price: '₹445', description: 'BBQ paneer with smoky flavour' },
        { name: 'Hot & Spicy 🌶️🌶️', price: '₹445', description: 'Extra spicy veggie delight' },
        { name: 'Hemz Special', price: '₹499', description: 'Signature special pizza by Hemz' }
      ]
    },
    {
      name: 'Authentic (Neapolitan)',
      items: [
        { name: 'Alfredo Pizza', price: '₹549', description: 'Creamy alfredo sauce & cheese' },
        { name: 'Pesto Pizza', price: '₹549', description: 'Fresh basil pesto & cheese' },
        { name: 'Ranch Pizza', price: '₹549', description: 'Ranch sauce with veggies' },
        { name: 'Garden Valley', price: '₹549', description: 'Fresh garden vegetables' },
        { name: 'Spicy Green 🌶️🌶️', price: '₹549', description: 'Green chilli based spicy pizza' }
      ]
    },
    {
      name: 'Wow! Pizzario',
      items: [
        { name: 'Cheesy Tomato', price: '₹89', description: 'Cheesy tomato base pizza' },
        { name: 'Cheesy Onion', price: '₹89', description: 'Onion with melted cheese' },
        { name: 'Cheesy Capsicum', price: '₹89', description: 'Capsicum & cheese combo' },
        { name: 'Cheesy Corn', price: '₹89', description: 'Sweet corn & cheese' }
      ]
    },
    {
      name: 'Bread & Breadsticks',
      items: [
        { name: 'Garlic Bread with Cheese', price: '₹110', description: 'Garlic bread topped with cheese' },
        { name: 'Garlic Bread Supreme', price: '₹140', description: 'Loaded supreme garlic bread' },
        { name: 'Garlic Breadstick', price: '₹120', description: 'Classic garlic breadsticks' },
        { name: 'Stuffed Garlic Breadsticks', price: '₹160', description: 'Cheese stuffed breadsticks' },
        { name: 'Paneer Tikka Stuffed Garlic Breadsticks', price: '₹170', description: 'Paneer tikka stuffed delight' }
      ]
    },
    {
      name: 'Pasta',
      items: [
        { name: 'Alfredo Pasta', price: '₹199', description: 'Creamy white sauce pasta' },
        { name: 'Arrabbiata Pasta', price: '₹199', description: 'Spicy red sauce pasta' },
        { name: 'Pesto Pasta', price: '₹199', description: 'Basil pesto flavored pasta' },
        { name: 'Pink Pasta', price: '₹199', description: 'White & red sauce mix' },
        { name: 'Aglio Olio Pasta', price: '₹199', description: 'Garlic & olive oil pasta' }
      ]
    },
    {
      name: 'Sides',
      items: [
        { name: 'French Fries', price: '₹110', description: 'Classic crispy fries' },
        { name: 'Peri Peri French Fries', price: '₹140', description: 'Peri peri seasoned fries' },
        { name: 'Jalapeno Poppers', price: '₹150', description: 'Cheese-filled jalapeno bites' }
      ]
    },
    {
      name: 'Beverages',
      items: [
        { name: 'Energy Drinks', price: 'MRP', description: 'As per brand MRP' },
        { name: 'Soft Drinks', price: 'MRP', description: 'Coke, Sprite, etc.' },
        { name: 'Mineral Water', price: 'MRP', description: 'Packaged drinking water' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-hemzBg">
      <Header />

      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Page Heading */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-hemzGreen mb-4 uppercase tracking-wide">
              Our Complete Menu
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
              Explore our delicious range of pizzas, pasta & sides
            </p>
          </div>

          {/* Menu Sections */}
          <div className="space-y-14">
            {menuSections.map((section, sectionIndex) => (
              <div
                key={sectionIndex}
                className="bg-white rounded-xl shadow-lg border-t-4 border-hemzGreen p-8"
              >
                <h2 className="text-2xl md:text-3xl font-extrabold text-hemzGreen uppercase tracking-wide mb-8 text-center">
                  {section.name}
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {item.name}
                        </h3>
                        <span className="text-lg font-bold text-hemzRed">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Offer */}
          <div className="text-center mt-16">
            <div className="bg-hemzGreen text-white p-6 rounded-xl inline-block border border-hemzGreenDark shadow-xl">
              <h3 className="text-xl font-extrabold mb-2 uppercase tracking-wide">
                Special Offer
              </h3>
              <p className="text-lg font-semibold">
                Buy 1 Get 1 Free – Every Tuesday & Thursday
              </p>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
