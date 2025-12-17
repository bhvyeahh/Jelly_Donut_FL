import Home from '@/pages/Home';
import MenuPage from '@/pages/MenuPage';
import { Navbar } from './components/layout/Navbar';
import { Routes, Route } from 'react-router-dom';
import { Footer } from './components/layout/Footer';
import AboutPage from './pages/AboutPage';
import LocationPage from './pages/LocationPage';

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/location" element={<LocationPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App; 