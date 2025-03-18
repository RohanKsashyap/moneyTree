import { create } from 'zustand';

export interface PlanFeature {
  name: string;
  included: boolean;
}

export interface Plan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: string;
  yearlyPrice: string;
  features: PlanFeature[];
  highlight: boolean;
}

interface PlanState {
  plans: Plan[];
  selectedPlan: Plan | null;
  selectPlan: (plan: Plan) => void;
  clearSelectedPlan: () => void;
}

export const usePlanStore = create<PlanState>((set) => ({
  plans: [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for beginners entering the stock market',
      monthlyPrice: '₹499',
      yearlyPrice: '₹4,999',
      features: [
        { name: 'Basic stock market education', included: true },
        { name: 'Limited market analysis', included: true },
        { name: 'Standard trading tools', included: true },
        { name: 'Email support', included: true },
        { name: 'Mobile app access', included: true },
        { name: '5 paper trading accounts', included: true },
        { name: 'Advanced technical analysis', included: false },
        { name: 'Expert webinars & workshops', included: false },
        { name: 'Priority customer support', included: false },
        { name: 'API trading access', included: false },
        { name: 'One-on-one mentorship', included: false },
        { name: 'Premium strategy workshops', included: false },
      ],
      highlight: false,
    },
    {
      id: 'advanced',
      name: 'Advanced',
      description: 'For serious traders looking to enhance their skills',
      monthlyPrice: '₹1,499',
      yearlyPrice: '₹14,999',
      features: [
        { name: 'Basic stock market education', included: true },
        { name: 'Comprehensive market education', included: true },
        { name: 'Detailed technical analysis', included: true },
        { name: 'Advanced trading tools', included: true },
        { name: 'Priority email support', included: true },
        { name: 'Mobile app access', included: true },
        { name: '10 paper trading accounts', included: true },
        { name: 'Weekly market insights', included: true },
        { name: 'Basic API trading access', included: true },
        { name: 'One-on-one mentorship', included: false },
        { name: 'Premium strategy workshops', included: false },
      ],
      highlight: true,
    },
    {
      id: 'premium',
      name: 'Premium',
      description: 'The ultimate package for professional traders',
      monthlyPrice: '₹2,999',
      yearlyPrice: '₹29,999',
      features: [
        { name: 'Basic stock market education', included: true },
        { name: 'Complete market mastery program', included: true },
        { name: 'Advanced technical analysis', included: true },
        { name: 'Professional trading suite', included: true },
        { name: '24/7 dedicated support', included: true },
        { name: 'Mobile app with premium features', included: true },
        { name: 'Unlimited paper trading accounts', included: true },
        { name: 'Daily market insights & alerts', included: true },
        { name: 'Full API trading access', included: true },
        { name: 'One-on-one mentorship sessions', included: true },
        { name: 'Exclusive strategy workshops', included: true },
      ],
      highlight: false,
    },
  ],
  selectedPlan: null,
  selectPlan: (plan) => set({ selectedPlan: plan }),
  clearSelectedPlan: () => set({ selectedPlan: null }),
}));