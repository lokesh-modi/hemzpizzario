import React from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-hemzGreen uppercase mb-4">
            Visit Us Today
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Come experience the best pizzas in Vesu, Surat. We're here to serve you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-red-600 mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-600">
                  UG-1, Safal Square,<br />
                  Udhana-Magdalla Rd,<br />
                  Vesu, Surat, Gujarat 395007
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="h-6 w-6 text-red-600 mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">+91 9227011218</p>
              </div>
            </div>

            <div className="flex items-start">
              <Clock className="h-6 w-6 text-red-600 mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Hours</h3>
                <div className="text-gray-600 space-y-1">
                  <p>Monday - Sunday: 11:00 AM - 11:00 PM</p>
                  <p className="text-green-600 font-medium">
                    Special Offer: Tuesday & Thursday (Buy 1 Get 1 Free)
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                href="https://maps.app.goo.gl/J1bRmaUz3T44g8oG7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                <Navigation className="h-5 w-5 mr-2" />
                Get Directions
              </a>
              <a
                href="tel:+919227011218"
                className="inline-flex items-center justify-center border-2 border-red-600 text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </a>
              <a
                href="https://www.swiggy.com/restaurants/hemz-pizzario-safal-square-koramangala-surat-972541/dineout?is_retargeting=true&media_source=GoogleReserve&utm_campaign=GoogleMap&utm_source=GoogleReserve"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                🍽 Book Table
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="h-96 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2955.560042501169!2d72.7657064!3d21.148476199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d4318f7605b%3A0x2b5d4ba9d4c9eed9!2sHemz%20Pizzario!5e1!3m2!1sen!2sin!4v1766746684997!5m2!1sen!2sin" 
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hemz Pizzario Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;