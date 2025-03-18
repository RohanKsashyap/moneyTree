import React from 'react';
import { BarChart2, BookOpen, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative pt-24 pb-16 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-60 -left-40 w-80 h-80 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1>
              <span className="block text-base font-semibold text-green-400 tracking-wide uppercase">
                Invest with confidence
              </span>
              <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                <span className="block text-white">Master the</span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                  Indian Stock Market
                </span>
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              MoneyTree combines expert brokerage services with comprehensive education to help you navigate the complexities of the Indian stock market.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <button className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 shadow-lg shadow-green-500/20">
                  Start Trading
                </button>
                <button className="flex items-center justify-center px-5 py-3 border border-gray-700 text-base font-medium rounded-md text-gray-300 bg-gray-800 hover:bg-gray-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="relative block w-full bg-gray-800 rounded-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-green-500 to-blue-600 flex items-center justify-center">
                        <TrendingUp className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="ml-3 text-xl font-bold text-white">MoneyTree Pro</h3>
                    </div>
                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-900 text-blue-300">
                      Live
                    </span>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <BarChart2 className="h-5 w-5 text-green-400" />
                      <span className="ml-2 text-gray-300">Real-time market data</span>
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="h-5 w-5 text-green-400" />
                      <span className="ml-2 text-gray-300">Expert analysis & education</span>
                    </div>
                    <div className="h-32 bg-gray-700 rounded-lg overflow-hidden relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-gray-400">Interactive Chart Preview</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;