import React from 'react';
import { 
  TrendingUp, 
  BookOpen, 
  BarChart2, 
  Smartphone, 
  Shield, 
  Users, 
  Clock, 
  Zap 
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <TrendingUp className="h-6 w-6 text-green-400" />,
      title: 'Zero Brokerage',
      description: 'Trade with zero brokerage fees on delivery trades and ultra-low fees on intraday.'
    },
    {
      icon: <BookOpen className="h-6 w-6 text-blue-400" />,
      title: 'Expert Education',
      description: 'Learn from market experts with our comprehensive courses and webinars.'
    },
    {
      icon: <BarChart2 className="h-6 w-6 text-purple-400" />,
      title: 'Advanced Analytics',
      description: 'Access powerful technical analysis tools and real-time market data.'
    },
    {
      icon: <Smartphone className="h-6 w-6 text-yellow-400" />,
      title: 'Mobile Trading',
      description: 'Trade on the go with our powerful and intuitive mobile application.'
    },
    {
      icon: <Shield className="h-6 w-6 text-red-400" />,
      title: 'Secure Platform',
      description: 'Your investments are protected with bank-grade security and encryption.'
    },
    {
      icon: <Users className="h-6 w-6 text-indigo-400" />,
      title: 'Community Support',
      description: 'Join our community of traders and investors to share insights and strategies.'
    },
    {
      icon: <Clock className="h-6 w-6 text-pink-400" />,
      title: 'Instant Execution',
      description: 'Experience lightning-fast order execution with our advanced trading engine.'
    },
    {
      icon: <Zap className="h-6 w-6 text-orange-400" />,
      title: 'API Trading',
      description: 'Automate your trading strategies with our powerful API integration.'
    }
  ];

  return (
    <section id="features" className="py-16 relative">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Why Choose <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">MoneyTree</span>
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-gray-400 sm:mt-4">
            We combine cutting-edge technology with expert education to give you the edge in the market.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="relative group bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="h-12 w-12 rounded-lg bg-gray-900 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-medium text-white">{feature.title}</h3>
                <p className="mt-2 text-sm text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gray-800 rounded-xl overflow-hidden border border-gray-700 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-white">
                Ready to start your trading journey?
              </h3>
              <p className="mt-4 text-gray-400">
                Join thousands of successful traders who have transformed their financial future with MoneyTree's powerful platform and educational resources.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <button className="px-5 py-3 rounded-md bg-gradient-to-r from-green-500 to-blue-600 text-white font-medium hover:from-green-600 hover:to-blue-700 shadow-lg shadow-green-500/20">
                  Open Free Account
                </button>
                <button className="px-5 py-3 rounded-md border border-gray-700 text-gray-300 font-medium hover:bg-gray-700 transition-colors">
                  Schedule Demo
                </button>
              </div>
            </div>
            <div className="hidden lg:block relative h-full">
              <img 
                src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Trading dashboard" 
                className="absolute inset-0 h-full w-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-800/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;