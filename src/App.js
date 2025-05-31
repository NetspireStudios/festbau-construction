import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import HomePage from './pages/HomePage';
import CommercialPage from './pages/CommercialPage';
import ResidentialPage from './pages/ResidentialPage';
import AdditionalServicesPage from './pages/AdditionalServicesPage';
import ProjectManagementPage from './pages/ProjectManagementPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import QuotePage from './pages/QuotePage';
import BlogPage from './pages/BlogPage';
import Footer from './components/Footer';
import './App.css';

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Preloader>
      <Router>
        <div className="App">
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/commercial" element={<CommercialPage />} />
            <Route path="/residential" element={<ResidentialPage />} />
            <Route path="/additional-services" element={<AdditionalServicesPage />} />
            <Route path="/project-management" element={<ProjectManagementPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/quote" element={<QuotePage />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </Preloader>
  );
}

export default App; 