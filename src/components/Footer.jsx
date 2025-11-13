import React from 'react';

const Footer = () => (
    <footer className=" bottom-0 left-0 w-full bg-[#1f2035] text-white py-6 z-50">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 mb-6 gap-8">

   
    <div>
      <h3 className="text-2xl font-extrabold mb-3 text-[#B89043]">Crown Capital</h3>
      <p className="text-gray-300 text-sm leading-relaxed">
        Crown Capital is a trading name of Crown Capital Ltd.
      </p>
    </div>

   
    <div>
      <h4 className="text-lg font-semibold mb-3">Company</h4>
      <ul className="space-y-2">
        <li><a href="about_us.html" className="hover:text-[#B89043] transition">About</a></li>
        <li><a href="contact_us.html" className="hover:text-[#B89043] transition">Contact</a></li>
      </ul>
    </div>

  
    <div>
      <h4 className="text-lg font-semibold mb-3">Trading</h4>
      <ul className="space-y-2">
        <li><a href="trading.html" className="hover:text-[#B89043] transition">Foreign Exchange</a></li>
        <li><a href="shares.html" className="hover:text-[#B89043] transition">Shares</a></li>
        <li><a href="indices.html" className="hover:text-[#B89043] transition">Indices</a></li>
        <li><a href="metals.html" className="hover:text-[#B89043] transition">Metals</a></li>
        <li><a href="commodities.html" className="hover:text-[#B89043] transition">Commodities</a></li>
      </ul>
    </div>

    <div>
      <h4 className="text-lg font-semibold mb-3">Platforms</h4>
      <ul className="space-y-2">
        <li><a href="about_us.html" className="hover:text-[#B89043] transition">Overview</a></li>
        <li><a href="shares.html" className="hover:text-[#B89043] transition">Web Trading Platform</a></li>
        <li><a href="shares.html" className="hover:text-[#B89043] transition">Mobile Trading</a></li>
      </ul>
    </div>
  </div>


  <div className="max-w-7xl mx-auto px-6  text-gray-300 text-xs leading-relaxed">
    <p>
      <strong className="text-white">Risk Warning:</strong> Trading leveraged products such as CFDs involves a high level of risk and may not be suitable for all investors.
    </p>
    <p className="mt-2">
      <strong className="text-white">Important Notice:</strong> The information provided on this website is for informational purposes only and does not constitute an offer, solicitation, or recommendation to buy or sell any financial instrument.
    </p>

    <div className="flex flex-col md:flex-row  text-center justify-center gap-5 mb-5 items-center border-t border-gray-700 mt-4 pt-4">
      <p>© 2025 CROWN CAPITAL Company. All rights reserved.</p>
      <a href="privacy_policy.html" className="text-[#B89043] hover:underline mt-2 md:mt-0">Privacy Policy</a>
    </div>
  </div>
</footer>


);

export default Footer;
