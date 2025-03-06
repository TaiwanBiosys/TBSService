import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Leaf } from 'lucide-react';

function Header() {
  const location = useLocation();
  
  return (
    <nav className="bg-green-900 text-white py-4 px-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Leaf className="w-6 h-6" />
          <span className="text-xl font-bold">台灣生質能源</span>
        </Link>
        <div className="flex gap-6">
          <Link 
            to="/industry" 
            className={`hover:text-green-300 transition-colors ${
              location.pathname === '/industry' ? 'text-green-300' : ''
            }`}
          >
            產業介紹
          </Link>
          <Link 
            to="/company" 
            className={`hover:text-green-300 transition-colors ${
              location.pathname === '/company' ? 'text-green-300' : ''
            }`}
          >
            公司介紹
          </Link>
          <Link 
            to="/vision" 
            className={`hover:text-green-300 transition-colors ${
              location.pathname === '/vision' ? 'text-green-300' : ''
            }`}
          >
            公司願景
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;