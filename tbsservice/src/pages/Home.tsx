import React from 'react';
import { Leaf, ArrowDownCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-800 via-green-600 to-amber-900">
      <div className="min-h-screen flex items-center justify-center relative text-white px-4">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto relative z-10 text-center">
          <Leaf className="w-16 h-16 mx-auto mb-6 animate-pulse" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6">台灣生質能源的未來</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            引領台灣邁向永續能源的新紀元
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              to="/industry"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              了解更多
            </Link>
          </div>
          <ArrowDownCircle className="w-10 h-10 mx-auto mt-12 animate-bounce" />
        </div>
      </div>
    </div>
  );
}

export default Home;