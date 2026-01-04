import React from 'react';
import { Heart, Award, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Heart,
      title: 'Passion for Pizza',
      description: 'Every pizza is crafted with love and bold flavours.'
    },
    {
      icon: Award,
      title: 'Premium Ingredients',
      description: 'Only fresh, high-quality ingredients go into our pizzas.'
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Loved and trusted by pizza lovers across Surat.'
    }
  ];

  return (
    <section className="py-12 bg-hemzBg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-hemzGreen uppercase tracking-wide mb-4">
            About Hemz Pizzario
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Italian tradition meets Indian innovation — made for pizza lovers.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Image Section */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Hemz Pizzario restaurant interior"
              className="w-full h-[360px] md:h-[420px] object-cover rounded-3xl shadow-xl"
            />

            {/* Floating Stat Card */}
            <div className="hidden lg:block absolute -bottom-6 -right-6 bg-hemzRed text-white px-8 py-4 rounded-2xl shadow-xl">
              <p className="text-2xl font-extrabold text-center">500+</p>
              <p className="text-sm uppercase tracking-wide text-center">
                Happy Customers
              </p>
            </div>
          </div>

          {/* Text + Features */}
          <div className="mt-8 lg:mt-0">

            {/* Story */}
            <div className="bg-white rounded-3xl shadow-lg p-8 mb-10">
              <p className="text-gray-700 text-lg leading-relaxed">
                Located in the heart of <span className="font-semibold text-hemzRed">Vesu, Surat</span>,
                Hemz Pizzario serves pizzas that feel indulgent, comforting, and unforgettable.
                From classic Neapolitan styles to bold Indian-inspired flavours, every bite tells
                a story of quality and passion.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-hemzGreen text-white flex-shrink-0">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-hemzGreen mb-1 uppercase">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
