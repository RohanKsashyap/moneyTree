import React, { useState } from 'react';
import { Menu, X, TrendingUp, LogOut, User } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuthStore();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'charts', label: 'Charts', path: '/charts' },
    { id: 'features', label: 'Features', path: '/features' },
    { id: 'plans', label: 'Plans', path: '/plans' },
    { id: 'contact', label: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <TrendingUp className="h-8 w-8 text-green-400" />
              <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                MoneyTree
              </span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-green-400'
                    : 'text-gray-300 hover:text-green-400'
                }`}
              >
                {item.label}
              </Link>
            ))}

            {isAuthenticated ? (
              <div className="flex items-center ml-4 space-x-4">
                {user?.role === 'admin' && (
                  <Link 
                    to="/admin" 
                    className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-green-400"
                  >
                    Admin
                  </Link>
                )}
                <div className="relative group">
                  <button className="flex items-center space-x-1 text-gray-300 hover:text-green-400">
                    <User className="h-5 w-5" />
                    <span className="text-sm font-medium">{user?.name}</span>
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center ml-4 space-x-4">
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 rounded-md bg-gradient-to-r from-green-500 to-blue-600 text-white font-medium hover:from-green-600 hover:to-blue-700 transition-all duration-200 shadow-lg shadow-green-500/20"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                  location.pathname === item.path
                    ? 'bg-gray-900 text-green-400'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {isAuthenticated ? (
              <>
                {user?.role === 'admin' && (
                  <Link
                    to="/admin"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-2 rounded-md text-base font-medium w-full text-left text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Admin Dashboard
                  </Link>
                )}
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="block px-3 py-2 rounded-md text-base font-medium w-full text-left text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium w-full text-left text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium w-full text-left text-gray-300 hover:bg-gray-700 hover:text-white mt-4"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;