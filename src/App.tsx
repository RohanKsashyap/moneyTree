import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ChartsPage from './pages/ChartsPage';
import FeaturesPage from './pages/FeaturesPage';
import PlansPage from './pages/PlansPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import Footer from './components/Footer';
import { useAuthStore } from './store/authStore';

function App() {
  const { initialized } = useAuthStore();

  if (!initialized) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/charts" element={<ChartsPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/plans" element={<PlansPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;