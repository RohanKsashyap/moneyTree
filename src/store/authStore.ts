import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type UserRole = 'user' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  initialized: boolean;
  login: (user: User) => void;
  logout: () => void;
  initialize: () => void;
}

// Mock users for demo purposes
const mockUsers = [
  {
    id: '1',
    email: 'admin@moneytree.com',
    password: 'admin123',
    name: 'Admin User',
    role: 'admin' as UserRole,
  },
  {
    id: '2',
    email: 'user@example.com',
    password: 'user123',
    name: 'Regular User',
    role: 'user' as UserRole,
  },
];

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      initialized: false,
      login: (user) => set({ user, isAuthenticated: true }),
      logout: () => set({ user: null, isAuthenticated: false }),
      initialize: () => set({ initialized: true }),
    }),
    {
      name: 'auth-storage',
      onRehydrateStorage: () => (state) => {
        if (state) state.initialize();
      },
    }
  )
);

// Helper functions for authentication
export const authenticateUser = (email: string, password: string): User | null => {
  const user = mockUsers.find(
    (u) => u.email === email && u.password === password
  );
  
  if (user) {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword as User;
  }
  
  return null;
};

export const registerUser = (name: string, email: string, password: string): User | null => {
  // In a real app, you would make an API call to register the user
  // For this demo, we'll just pretend it worked
  const newUser = {
    id: `${mockUsers.length + 1}`,
    name,
    email,
    role: 'user' as UserRole,
  };
  
  return newUser;
};