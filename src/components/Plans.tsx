import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

const Plans = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  
  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for beginners entering the stock market',
      monthlyPrice: '₹499',
      yearlyPrice: '₹4,999',
      features: [
        'Basic stock market education',
        'Limited market analysis',
        'Standard trading tools',
        'Email support',
        'Mobile app access',
        '5 paper trading accounts',
      ],
      notIncluded: [
        'Advanced technical analysis',
        'Expert webinars & workshops',
        'Priority customer support',
        'API trading access',
      ],
      cta: 'Start Free Trial',
      highlight: false,
    },
    {
      name: 'Advanced',
      description: 'For serious traders looking to enhance their skills',
      monthlyPrice: '₹1,499',
      yearlyPrice: '₹14,999',
      features: [
        'Comprehensive market education',
        'Detailed technical analysis',
        'Advanced trading tools',
        'Priority email support',
        'Mobile app access',
        '10 paper trading accounts',
        'Weekly market insights',
        'Basic API trading access',
      ],
      notIncluded: [
        'One-on-one mentorship',
        'Premium strategy workshops',
      ],
      cta: 'Get Advanced',
      highlight: true,
    },
    {
      name: 'Premium',
      description: 'The ultimate package for professional traders',
      monthlyPrice: '₹2,999',
      yearlyPrice: '₹29,999',
      features: [
        'Complete market mastery program',
        'Advanced technical analysis',
        'Professional trading suite',
        '24/7 dedicated support',
        'Mobile app with premium features',
        'Unlimited paper trading accounts',
        'Daily market insights & alerts',
        'Full API trading access',
        'One-on-one mentorship sessions',
        'Exclusive strategy workshops',
      ],
      notIncluded: [],
      cta: 'Get Premium',
      highlight: false,
    },
  ];

  return (
    <section id="plans" className="py-16 relative">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 w-80 h-80 bg-green-500 rounded-full opacity-10 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Choose Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">Trading Plan</span>
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-gray-400 sm:mt-4">
            Select the plan that best fits your trading goals and experience level.
          </p>
          
          <div className="mt-8 flex justify-center">
            <div className="relative bg-gray-800 p-1 rounded-lg inline-flex">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`relative py-2 px-4 text-sm font-medium rounded-md focus:outline-none transition-colors ${
                  billingCycle === 'monthly'
                    ? 'bg-gray-700 text-white'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`relative ml-0.5 py-2 px-4 text-sm font-medium rounded-md focus:outline-none transition-colors ${
                  billingCycle === 'yearly'
                    ? 'bg-gray-700 text-white'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
              >
                Yearly
                <span className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full text-xs font-semibold bg-green-500 text-white">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-xl overflow-hidden border ${
                plan.highlight
                  ? 'border-green-500 shadow-lg shadow-green-500/20'
                  : 'border-gray-700'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-green-400 to-blue-500"></div>
              )}
              
              <div className="bg-gray-800 p-8">
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                <p className="mt-2 text-sm text-gray-400">{plan.description}</p>
                <p className="mt-6">
                  <span className="text-4xl font-extrabold text-white">
                    {billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                  </span>
                  <span className="text-gray-400 ml-2">
                    /{billingCycle === 'monthly' ? 'month' : 'year'}
                  </span>
                </p>
                
                <button
                  className={`mt-6 w-full py-3 px-4 rounded-md font-medium flex items-center justify-center ${
                    plan.highlight
                      ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700 shadow-lg shadow-green-500/20'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
              
              <div className="bg-gray-900 p-8">
                <h4 className="text-sm font-medium text-gray-300 mb-4">What's included:</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="ml-3 text-sm text-gray-400">{feature}</span>
                    </li>
                  ))}
                  
                  {plan.notIncluded.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-500">
                      <X className="h-5 w-5 text-gray-600 flex-shrink-0" />
                      <span className="ml-3 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-gray-800 rounded-xl p-8 border border-gray-700">
          <div className="text-center">
            <h3 className="text-xl font-bold text-white">Need a custom solution?</h3>
            <p className="mt-2 text-gray-400">
              Contact our team for a personalized trading and education package tailored to your specific needs.
            </p>
            <button className="mt-6 px-6 py-3 rounded-md border border-gray-700 text-gray-300 font-medium hover:bg-gray-700 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;