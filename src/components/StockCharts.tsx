import React, { useState } from 'react';
import { ArrowUp, ArrowDown, Clock, Filter } from 'lucide-react';

const StockCharts = () => {
  const [activeTab, setActiveTab] = useState('nifty');
  
  const stockData = {
    nifty: {
      name: 'NIFTY 50',
      value: '22,456.80',
      change: '+156.35',
      percentChange: '+0.70%',
      isUp: true,
      chartUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
    sensex: {
      name: 'SENSEX',
      value: '73,876.44',
      change: '+423.29',
      percentChange: '+0.58%',
      isUp: true,
      chartUrl: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
    bankNifty: {
      name: 'BANK NIFTY',
      value: '48,123.65',
      change: '-235.70',
      percentChange: '-0.49%',
      isUp: false,
      chartUrl: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
    midcap: {
      name: 'NIFTY MIDCAP 100',
      value: '45,678.92',
      change: '+312.45',
      percentChange: '+0.69%',
      isUp: true,
      chartUrl: 'https://images.unsplash.com/photo-1642543348745-775d77351c01?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
  };

  const activeStock = stockData[activeTab as keyof typeof stockData];
  
  return (
    <section id="charts" className="py-16 relative">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full opacity-10 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Indian Stock Market <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">Live Charts</span>
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-gray-400 sm:mt-4">
            Track real-time performance of major Indian indices and make informed investment decisions.
          </p>
        </div>
        
        <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700">
          <div className="flex flex-wrap border-b border-gray-700">
            {Object.keys(stockData).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-4 py-3 text-sm font-medium focus:outline-none ${
                  activeTab === key
                    ? 'bg-gray-700 text-green-400 border-b-2 border-green-400'
                    : 'text-gray-400 hover:text-gray-300 hover:bg-gray-700'
                }`}
              >
                {stockData[key as keyof typeof stockData].name}
              </button>
            ))}
            <div className="ml-auto flex items-center px-4">
              <button className="p-1.5 rounded-md text-gray-400 hover:text-white hover:bg-gray-700">
                <Clock className="h-5 w-5" />
              </button>
              <button className="p-1.5 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 ml-2">
                <Filter className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex flex-wrap items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-white">{activeStock.name}</h3>
                <div className="flex items-center mt-1">
                  <span className="text-2xl font-bold text-white">₹{activeStock.value}</span>
                  <div className={`ml-3 flex items-center ${
                    activeStock.isUp ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {activeStock.isUp ? (
                      <ArrowUp className="h-4 w-4" />
                    ) : (
                      <ArrowDown className="h-4 w-4" />
                    )}
                    <span className="ml-1 font-medium">{activeStock.change}</span>
                    <span className="ml-1 font-medium">({activeStock.percentChange})</span>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-2 mt-4 sm:mt-0">
                <button className="px-3 py-1.5 text-xs font-medium rounded bg-gray-700 text-gray-300 hover:bg-gray-600">1D</button>
                <button className="px-3 py-1.5 text-xs font-medium rounded bg-gray-900 text-green-400 border border-green-400/30">1W</button>
                <button className="px-3 py-1.5 text-xs font-medium rounded bg-gray-700 text-gray-300 hover:bg-gray-600">1M</button>
                <button className="px-3 py-1.5 text-xs font-medium rounded bg-gray-700 text-gray-300 hover:bg-gray-600">3M</button>
                <button className="px-3 py-1.5 text-xs font-medium rounded bg-gray-700 text-gray-300 hover:bg-gray-600">1Y</button>
                <button className="px-3 py-1.5 text-xs font-medium rounded bg-gray-700 text-gray-300 hover:bg-gray-600">ALL</button>
              </div>
            </div>
            
            <div className="h-80 bg-gray-900 rounded-lg overflow-hidden relative">
              <img 
                src={activeStock.chartUrl} 
                alt={`${activeStock.name} chart`} 
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
              
              {/* Chart overlay elements */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between text-xs text-gray-400">
                <span>09:15</span>
                <span>11:30</span>
                <span>13:45</span>
                <span>15:30</span>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-gray-900 p-4 rounded-lg">
                <div className="text-xs text-gray-400">Open</div>
                <div className="text-white font-medium mt-1">₹22,300.45</div>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg">
                <div className="text-xs text-gray-400">High</div>
                <div className="text-white font-medium mt-1">₹22,498.75</div>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg">
                <div className="text-xs text-gray-400">Low</div>
                <div className="text-white font-medium mt-1">₹22,287.30</div>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg">
                <div className="text-xs text-gray-400">Volume</div>
                <div className="text-white font-medium mt-1">234.5M</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <button className="inline-flex items-center px-4 py-2 border border-gray-700 rounded-md text-sm font-medium text-gray-300 bg-gray-800 hover:bg-gray-700 transition-colors">
            View All Indian Market Indices
          </button>
        </div>
      </div>
    </section>
  );
};

export default StockCharts;