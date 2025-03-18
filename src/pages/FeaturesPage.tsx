import React from 'react';
import { 
  TrendingUp, 
  BookOpen, 
  BarChart2, 
  Smartphone, 
  Shield, 
  Users, 
  Clock, 
  Zap,
  Laptop,
  BookOpenCheck,
  Presentation,
  Headphones,
  Award,
  Lightbulb,
  Target,
  Briefcase
} from 'lucide-react';

const FeaturesPage = () => {
  const tradingFeatures = [
    {
      icon: <TrendingUp className="h-6 w-6 text-green-400" />,
      title: 'Zero Brokerage',
      description: 'Trade with zero brokerage fees on delivery trades and ultra-low fees on intraday.'
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
      icon: <Clock className="h-6 w-6 text-pink-400" />,
      title: 'Instant Execution',
      description: 'Experience lightning-fast order execution with our advanced trading engine.'
    },
    {
      icon: <Zap className="h-6 w-6 text-orange-400" />,
      title: 'API Trading',
      description: 'Automate your trading strategies with our powerful API integration.'
    },
    {
      icon: <Laptop className="h-6 w-6 text-blue-400" />,
      title: 'Multi-Platform Support',
      description: 'Access your account from any device with our web, desktop, and mobile platforms.'
    },
    {
      icon: <Target className="h-6 w-6 text-indigo-400" />,
      title: 'Customizable Alerts',
      description: 'Set up personalized price alerts and notifications for your watchlist.'
    },
  ];

  const educationFeatures = [
    {
      icon: <BookOpen className="h-6 w-6 text-blue-400" />,
      title: 'Expert Education',
      description: 'Learn from market experts with our comprehensive courses and webinars.'
    },
    {
      icon: <Users className="h-6 w-6 text-indigo-400" />,
      title: 'Community Support',
      description: 'Join our community of traders and investors to share insights and strategies.'
    },
    {
      icon: <BookOpenCheck className="h-6 w-6 text-green-400" />,
      title: 'Structured Courses',
      description: 'Follow our step-by-step curriculum designed for beginners to advanced traders.'
    },
    {
      icon: <Presentation className="h-6 w-6 text-yellow-400" />,
      title: 'Live Webinars',
      description: 'Participate in interactive sessions with industry experts and successful traders.'
    },
    {
      icon: <Headphones className="h-6 w-6 text-purple-400" />,
      title: 'One-on-One Coaching',
      description: 'Get personalized guidance from experienced mentors to accelerate your learning.'
    },
    {
      icon: <Award className="h-6 w-6 text-red-400" />,
      title: 'Certification Programs',
      description: 'Earn recognized certifications to validate your trading knowledge and skills.'
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-orange-400" />,
      title: 'Trading Strategies',
      description: 'Learn proven trading strategies for different market conditions and asset classes.'
    },
    {
      icon: <Briefcase className="h-6 w-6 text-teal-400" />,
      title: 'Portfolio Management',
      description: 'Master the art of building and managing a diversified investment portfolio.'
    },
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Why Choose <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">MoneyTree</span>
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-gray-400 sm:mt-4">
            We combine cutting-edge technology with expert education to give you the edge in the market.
          </p>
        </div>
        
        {/* Trading Platform Features */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            <TrendingUp className="h-6 w-6 text-green-400 mr-2" />
            Trading Platform Features
          </h2>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {tradingFeatures.map((feature, index) => (
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
        </div>
        
        {/* Education Features */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            <BookOpen className="h-6 w-6 text-blue-400 mr-2" />
            Education Features
          </h2>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {educationFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="relative group bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
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
        </div>
        
        {/* Platform Comparison */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Platform Comparison</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-400">
              <thead className="text-xs text-gray-400 uppercase bg-gray-800">
                <tr>
                  <th scope="col" className="px-6 py-3">Feature</th>
                  <th scope="col" className="px-6 py-3 text-center">MoneyTree</th>
                  <th scope="col" className="px-6 py-3 text-center">Competitor A</th>
                  <th scope="col" className="px-6 py-3 text-center">Competitor B</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-900 border-b border-gray-800">
                  <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">Zero Brokerage</th>
                  <td className="px-6 py-4 text-center text-green-400">✓</td>
                  <td className="px-6 py-4 text-center text-green-400">✓</td>
                  <td className="px-6 py-4 text-center text-red-400">✗</td>
                </tr>
                <tr className="bg-gray-800 border-b border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">Advanced Analytics</th>
                  <td className="px-6 py-4 text-center text-green-400">✓</td>
                  <td className="px-6 py-4 text-center text-red-400">✗</td>
                  <td className="px-6 py-4 text-center text-green-400">✓</td>
                </tr>
                <tr className="bg-gray-900 border-b border-gray-800">
                  <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">Mobile Trading</th>
                  <td className="px-6 py-4 text-center text-green-400">✓</td>
                  <td className="px-6 py-4 text-center text-green-400">✓</td>
                  <td className="px-6 py-4 text-center text-green-400">✓</td>
                </tr>
                <tr className="bg-gray-800 border-b border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">Expert Education</th>
                  <td className="px-6 py-4 text-center text-green-400">✓</td>
                  <td className="px-6 py-4 text-center text-red-400">✗</td>
                  <td className="px-6 py-4 text-center text-red-400">✗</td>
                </tr>
                <tr className="bg-gray-900 border-b border-gray-800">
                  <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">API Trading</th>
                  <td className="px-6 py-4 text-center text-green-400">✓</td>
                  <td className="px-6 py-4 text-center text-green-400">✓</td>
                  <td className="px-6 py-4 text-center text-red-400">✗</td>
                </tr>
                <tr className="bg-gray-800 border-b border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">One-on-One Coaching</th>
                  <td className="px-6 py-4 text-center text-green-400">✓</td>
                  <td className="px-6 py-4 text-center text-red-400">✗</td>
                  <td className="px-6 py-4 text-center text-red-400">✗</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 shadow-xl">
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
    </div>
  );
};

export default FeaturesPage;