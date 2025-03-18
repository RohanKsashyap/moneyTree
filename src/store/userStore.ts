import { create } from 'zustand';

export interface Subscription {
  id: string;
  userId: string;
  planId: string;
  planName: string;
  startDate: string;
  endDate: string;
  price: string;
  status: 'active' | 'expired' | 'cancelled';
}

export interface RegisteredUser {
  id: string;
  name: string;
  email: string;
  registeredOn: string;
  subscriptions: Subscription[];
}

interface UserState {
  users: RegisteredUser[];
}

// Mock data for registered users
const mockUsers: RegisteredUser[] = [
  {
    id: '1',
    name: 'Rahul Sharma',
    email: 'rahul.sharma@example.com',
    registeredOn: '2025-01-15',
    subscriptions: [
      {
        id: 's1',
        userId: '1',
        planId: 'premium',
        planName: 'Premium',
        startDate: '2025-01-15',
        endDate: '2026-01-15',
        price: '₹29,999',
        status: 'active',
      },
    ],
  },
  {
    id: '2',
    name: 'Priya Patel',
    email: 'priya.patel@example.com',
    registeredOn: '2025-02-03',
    subscriptions: [
      {
        id: 's2',
        userId: '2',
        planId: 'advanced',
        planName: 'Advanced',
        startDate: '2025-02-03',
        endDate: '2025-08-03',
        price: '₹8,994',
        status: 'active',
      },
    ],
  },
  {
    id: '3',
    name: 'Amit Kumar',
    email: 'amit.kumar@example.com',
    registeredOn: '2025-01-28',
    subscriptions: [
      {
        id: 's3',
        userId: '3',
        planId: 'starter',
        planName: 'Starter',
        startDate: '2025-01-28',
        endDate: '2025-02-28',
        price: '₹499',
        status: 'expired',
      },
      {
        id: 's4',
        userId: '3',
        planId: 'advanced',
        planName: 'Advanced',
        startDate: '2025-03-01',
        endDate: '2025-09-01',
        price: '₹8,994',
        status: 'active',
      },
    ],
  },
  {
    id: '4',
    name: 'Sneha Gupta',
    email: 'sneha.gupta@example.com',
    registeredOn: '2025-02-15',
    subscriptions: [
      {
        id: 's5',
        userId: '4',
        planId: 'starter',
        planName: 'Starter',
        startDate: '2025-02-15',
        endDate: '2025-03-15',
        price: '₹499',
        status: 'active',
      },
    ],
  },
  {
    id: '5',
    name: 'Vikram Singh',
    email: 'vikram.singh@example.com',
    registeredOn: '2025-01-10',
    subscriptions: [
      {
        id: 's6',
        userId: '5',
        planId: 'premium',
        planName: 'Premium',
        startDate: '2025-01-10',
        endDate: '2025-07-10',
        price: '₹17,994',
        status: 'cancelled',
      },
    ],
  },
];

export const useUserStore = create<UserState>(() => ({
  users: mockUsers,
}));