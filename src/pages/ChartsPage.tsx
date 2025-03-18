import React, { useState } from 'react';
import { ArrowUp, ArrowDown, Clock, Filter, Search, ChevronDown } from 'lucide-react';

const ChartsPage = () => {
  const [activeTab, setActiveTab] = useState('nifty');
  const [timeframe, setTimeframe] = useState('1W');
  
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

  const popularStocks = [
    { symbol: 'RELIANCE', name: 'Reliance Industries', price: '2,876.45', change: '+1.2%', isUp: true },
    { symbol: 'TCS', name: 'Tata Consultancy Services', price: '3,567.80', change: '-0.5%', isUp: false },
    { symbol: 'HDFCBANK', name: 'HDFC Bank', price: '1,678.30', change: '+0.8%', isUp: true },
    { symbol: 'INFY', name: 'Infosys', price: '1,456.75', change: '+1.5%', isUp: true },
    { symbol: 'ICICIBANK', name: 'ICICI Bank', price: '956.40', change: '-0.3%', isUp: false },
  ];

  const activeStock = stockData[activeTab as keyof typeof stockData];
  
  const timeframes = ['1D', '1W', '1M', '3M', '1Y', 'ALL'];
  
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Indian Stock Market <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">Live Charts</span>
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-gray-400 sm:mt-4">
            Track real-time performance of major Indian indices and make informed investment decisions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
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
                    {timeframes.map((tf) => (
                      <button
                        key={tf}
                        onClick={() => setTimeframe(tf)}
                        className={`px-3 py-1.5 text-xs font-medium rounded ${
                          timeframe === tf
                            ? 'bg-gray-900 text-green-400 border border-green-400/30'
                            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        }`}
                      >
                        {tf}
                      </button>
                    ))}
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
            
            <div className="mt-8 bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-700">
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">Technical Indicators</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-gray-900 p-4 rounded-lg">
                    <div className="text-xs text-gray-400">RSI (14)</div>
                    <div className="text-white font-medium mt-1">58.34</div>
                    <div className="text-xs text-green-400 mt-1">Neutral</div>
                  </div>
                  <div className="bg-gray-900 p-4 rounded-lg">
                    <div className="text-xs text-gray-400">MACD</div>
                    <div className="text-white font-medium mt-1">+12.45</div>
                    <div className="text-xs text-green-400 mt-1">Bullish</div>
                  </div>
                  <div className="bg-gray-900 p-4 rounded-lg">
                    <div className="text-xs text-gray-400">Bollinger Bands</div>
                    <div className="text-white font-medium mt-1">Upper: 22,780</div>
                    <div className="text-xs text-yellow-400 mt-1">Neutral</div>
                  </div>
                  <div className="bg-gray-900 p-4 rounded-lg">
                    <div className="text-xs text-gray-400">Moving Avg (50)</div>
                    <div className="text-white font-medium mt-1">22,145.67</div>
                    <div className="text-xs text-green-400 mt-1">Above</div>
                  </div>
                  <div className="bg-gray-900 p-4 rounded-lg">
                    <div className="text-xs text-gray-400">Moving Avg (200)</div>
                    <div className="text-white font-medium mt-1">21,876.32</div>
                    <div className="text-xs text-green-400 mt-1">Above</div>
                  </div>
                  <div className="bg-gray-900 p-4 rounded-lg">
                    <div className="text-xs text-gray-400">Stochastic</div>
                    <div className="text-white font-medium mt-1">78.56</div>
                    <div className="text-xs text-yellow-400 mt-1">Overbought</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-700 mb-8">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-white">Market Overview</h3>
                  <span className="text-xs text-gray-400">Live</span>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Market Status</span>
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-900 text-green-300">Open</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Trading Hours</span>
                    <span className="text-white">9:15 AM - 3:30 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Market Breadth</span>
                    <div className="flex items-center">
                      <span className="text-green-400 mr-2">Advance: 1,245</span>
                      <span className="text-red-400">Decline: 678</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Total Volume</span>
                    <span className="text-white">₹12,456 Cr</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-700">
              <div className="flex items-center justify-between p-6 border-b border-gray-700">
                <h3 className="text-lg font-bold text-white">Popular Stocks</h3>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Search className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2"
                    placeholder="Search stocks..."
                  />
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {popularStocks.map((stock, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
                      <div>
                        <div className="font-medium text-white">{stock.symbol}</div>
                        <div className="text-xs text-gray-400">{stock.name}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-white">₹{stock.price}</div>
                        <div className={`text-xs ${stock.isUp ? 'text-green-400' : 'text-red-400'}`}>
                          {stock.change}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="mt-4 w-full py-2 px-4 bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium rounded-lg flex items-center justify-center">
                  View More Stocks
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartsPage;