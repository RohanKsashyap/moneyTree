import React, { useState } from 'react';
import { Check, X, Info } from 'lucide-react';
import Modal from '../components/Modal';
import { usePlanStore, Plan } from '../store/planStore';
import { useAuthStore } from '../store/authStore';
import { useNavigate } from 'react-router-dom';

const PlansPage = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [showModal, setShowModal] = useState(false);
  const { plans, selectPlan, selectedPlan, clearSelectedPlan } = usePlanStore();
  const { isAuthenticated } = useAuthStore();
  const navigate = useNavigate();
  
  const handlePlanClick = (plan: Plan) => {
    selectPlan(plan);
    setShowModal(true);
  };
  
  const handleCloseModal = () => {
    setShowModal(false);
    clearSelectedPlan();
  };
  
  const handleSubscribe = () => {
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      // In a real app, this would handle the payment process
      alert('Subscription successful! Thank you for choosing MoneyTree.');
      handleCloseModal();
    }
  };

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Choose Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">Trading Plan</span>
          </h1>
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
          {plans.map((plan) => (
            <div
              key={plan.id}
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
                  onClick={() => handlePlanClick(plan)}
                  className={`mt-6 w-full py-3 px-4 rounded-md font-medium flex items-center justify-center ${
                    plan.highlight
                      ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700 shadow-lg shadow-green-500/20'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  View Details
                </button>
              </div>
              
              <div className="bg-gray-900 p-8">
                <h4 className="text-sm font-medium text-gray-300 mb-4">What's included:</h4>
                <ul className="space-y-3">
                  {plan.features.slice(0, 6).map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                      ) : (
                        <X className="h-5 w-5 text-gray-600 flex-shrink-0" />
                      )}
                      <span className={`ml-3 text-sm ${feature.included ? 'text-gray-400' : 'text-gray-500'}`}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                  {plan.features.length > 6 && (
                    <li className="flex items-center justify-center pt-2">
                      <button 
                        onClick={() => handlePlanClick(plan)}
                        className="text-sm text-blue-400 hover:text-blue-300 flex items-center"
                      >
                        <Info className="h-4 w-4 mr-1" />
                        See all features
                      </button>
                    </li>
                  )}
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
      
      {/* Plan Details Modal */}
      {selectedPlan && (
        <Modal 
          isOpen={showModal} 
          onClose={handleCloseModal} 
          title={`${selectedPlan.name} Plan Details`}
          size="lg"
        >
          <div className="space-y-6">
            <div>
              <p className="text-gray-400">{selectedPlan.description}</p>
              <div className="mt-4 flex items-center">
                <span className="text-2xl font-bold text-white">
                  {billingCycle === 'monthly' ? selectedPlan.monthlyPrice : selectedPlan.yearlyPrice}
                </span>
                <span className="text-gray-400 ml-2">
                  /{billingCycle === 'monthly' ? 'month' : 'year'}
                </span>
              </div>
            </div>
            
            <div className="border-t border-gray-700 pt-6">
              <h4 className="text-lg font-medium text-white mb-4">All Features</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedPlan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    {feature.included ? (
                      <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                    ) : (
                      <X className="h-5 w-5 text-gray-600 flex-shrink-0" />
                    )}
                    <span className={`ml-3 text-sm ${feature.included ? 'text-gray-300' : 'text-gray-500'}`}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="border-t border-gray-700 pt-6">
              <h4 className="text-lg font-medium text-white mb-4">What You'll Get</h4>
              <div className="bg-gray-900 p-4 rounded-lg">
                <ul className="space-y-2">
                  {selectedPlan.id === 'starter' && (
                    <>
                      <li className="text-gray-400">• Access to basic educational content</li>
                      <li className="text-gray-400">• Standard trading platform</li>
                      <li className="text-gray-400">• Basic market analysis tools</li>
                      <li className="text-gray-400">• Email support during business hours</li>
                    </>
                  )}
                  {selectedPlan.id === 'advanced' && (
                    <>
                      <li className="text-gray-400">• All Starter features</li>
                      <li className="text-gray-400">• Advanced educational content</li>
                      <li className="text-gray-400">• Enhanced trading platform</li>
                      <li className="text-gray-400">• Weekly market insights and analysis</li>
                      <li className="text-gray-400">• Priority email support</li>
                    </>
                  )}
                  {selectedPlan.id === 'premium' && (
                    <>
                      <li className="text-gray-400">• All Advanced features</li>
                      <li className="text-gray-400">• Complete market mastery program</li>
                      <li className="text-gray-400">• Professional trading suite</li>
                      <li className="text-gray-400">• Daily market insights and alerts</li>
                      <li className="text-gray-400">• One-on-one mentorship sessions</li>
                      <li className="text-gray-400">• 24/7 dedicated support</li>
                    </>
                  )}
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-700 pt-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <div>
                  <h4 className="text-lg font-medium text-white">Ready to get started?</h4>
                  <p className="text-sm text-gray-400">No credit card required for free trial</p>
                </div>
                <button
                  onClick={handleSubscribe}
                  className="mt-4 sm:mt-0 px-6 py-3 rounded-md bg-gradient-to-r from-green-500 to-blue-600 text-white font-medium hover:from-green-600 hover:to-blue-700 shadow-lg shadow-green-500/20"
                >
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default PlansPage;