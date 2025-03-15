import React from 'react';
import {
  Heart,
  Watch,
  Battery,
  Wifi,
  Bluetooth,
  Navigation,
  Music,
  Phone,
  MessageSquare,
  Timer,
  Droplets,
  Sun,
} from 'lucide-react';
import './App.css'; // Add external CSS file for custom styling

const App: React.FC = () => {
  const products = [
    {
      name: 'SmartWatch Pro',
      price: 299,
      image:
        'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=600',
      description:
        'Our flagship model with advanced health tracking and connectivity features.',
      features: [
        { icon: <Battery size={24} />, text: '48-hour battery life' },
        { icon: <Heart size={24} />, text: 'Heart rate monitoring' },
        { icon: <Wifi size={24} />, text: 'WiFi connectivity' },
        { icon: <Bluetooth size={24} />, text: 'Bluetooth 5.0' },
      ],
    },
    {
      name: 'SmartWatch Sport',
      price: 249,
      image:
        'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=600',
      description:
        'Designed for athletes with advanced fitness tracking capabilities.',
      features: [
        { icon: <Timer size={24} />, text: 'GPS tracking' },
        { icon: <Droplets size={24} />, text: 'Water resistant' },
        { icon: <Heart size={24} />, text: 'ECG monitoring' },
        { icon: <Navigation size={24} />, text: 'Route mapping' },
      ],
    },
    {
      name: 'SmartWatch Lite',
      price: 199,
      image:
        'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&w=600',
      description: 'Perfect for everyday use with essential smart features.',
      features: [
        { icon: <MessageSquare size={24} />, text: 'Notifications' },
        { icon: <Phone size={24} />, text: 'Call alerts' },
        { icon: <Music size={24} />, text: 'Music control' },
        { icon: <Sun size={24} />, text: 'Always-on display' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center">
            <Watch className="h-8 w-8 text-blue-600" />
            <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              SmartWatch Collection
            </span>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Banner */}
        <div className="hero-banner text-center mb-20 rounded-xl py-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
            Find Your Perfect SmartWatch
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Discover our collection of premium smartwatches for every lifestyle
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="card bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full font-semibold">
                  ${product.price}
                </div>
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {product.name}
                </h2>
                <p className="text-gray-600 mb-6 min-h-[48px]">
                  {product.description}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {product.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center feature-icon group"
                    >
                      <div className="text-blue-600 group-hover:text-blue-800 transition-colors duration-200">
                        {feature.icon}
                      </div>
                      <span className="ml-3 text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-200">
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                <button className="cta-button w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-[1.05] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <section className="mt-32">
          <div className="cta-banner bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">
                Special Launch Offer
              </h2>
              <p className="text-blue-100 text-lg mb-8">
                Get 10% off on all watches and free shipping worldwide
              </p>
              <button className="cta-button bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600">
                Shop Now
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-32 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <Watch className="h-6 w-6" />
            <span className="ml-2 text-lg">SmartWatch Collection © 2024</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
