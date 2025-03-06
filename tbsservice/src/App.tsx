import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Industry from './pages/Industry';
import Company from './pages/Company';
import Vision from './pages/Vision';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-green-800 via-green-600 to-amber-900">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/industry" element={<Industry />} />
            <Route path="/company" element={<Company />} />
            <Route path="/vision" element={<Vision />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;