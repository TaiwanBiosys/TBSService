import React from 'react';
import { Leaf } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-green-900 text-white py-8 px-4">
      <div className="container mx-auto text-center">
        <Leaf className="w-8 h-8 mx-auto mb-4" />
        <p>© 2025 台灣生質能源公司. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;