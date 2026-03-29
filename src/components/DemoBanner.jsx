import React, { useEffect } from 'react';
import { Phone, WhatsappLogo, FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';

function DemoBanner() {
  useEffect(() => {
    const el = document.getElementById('demo-banner');
    if (el) document.documentElement.style.setProperty('--banner-height', el.offsetHeight + 'px');
    const onResize = () => {
      const el2 = document.getElementById('demo-banner');
      if (el2) document.documentElement.style.setProperty('--banner-height', el2.offsetHeight + 'px');
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <div id="demo-banner" className="relative z-[60] text-xs" style={{ backgroundColor: '#000000', color: '#d4d4d4', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-1.5 flex items-center justify-between">
        {/* Left - Phone (desktop) */}
        <div className="hidden sm:flex items-center gap-4">
          <a href="tel:+27818337553" className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors"><Phone size={13} weight="bold" /><span>+27818337553</span></a>
        </div>

        {/* Center - Phone (mobile) */}
        <div className="sm:hidden flex items-center gap-2">
          <a href="tel:+27818337553" className="flex items-center gap-1 text-gray-400"><Phone size={12} weight="bold" /><span className="text-[11px]">+27818337553</span></a>
        </div>

        {/* Right - Socials */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" aria-label="Facebook"><FacebookLogo size={14} weight="bold" /></a>
          <a href="https://wa.me/27818337553" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-400 transition-colors" aria-label="WhatsApp"><WhatsappLogo size={14} weight="bold" /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-400 transition-colors" aria-label="Instagram"><InstagramLogo size={14} weight="bold" /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400 transition-colors" aria-label="LinkedIn"><LinkedinLogo size={14} weight="bold" /></a>
          <a href="tel:+27818337553" className="sm:hidden text-gray-500 hover:text-white transition-colors" aria-label="Call"><Phone size={14} weight="bold" /></a>
        </div>
      </div>
    </div>
  );
}

export default DemoBanner;
