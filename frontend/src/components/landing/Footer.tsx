'use client';

import Link from 'next/link';

const quickLinks = [
  { href: '#home', label: 'Home' },
  { href: '#features', label: 'Features' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '/dashboard', label: 'Dashboard' },
];

const hospitalLinks = [
  { href: '/intake', label: 'Patient Intake' },
  { href: '/queue', label: 'Triage Queue' },
  { href: '/analysis', label: 'AI Analysis' },
  { href: '/history', label: 'Patient History' },
];

const supportLinks = [
  { href: '#', label: 'Technical Support' },
  { href: '#', label: 'Training Resources' },
  { href: '#', label: 'System Status' },
  { href: '#', label: 'API Documentation' },
];

export default function Footer() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="about" className="bg-[#0f172a] text-gray-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-[#2563EB] rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <span className="font-bold text-white text-base">AI Emergency Triage</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-5 max-w-xs">
              AI-powered emergency triage system helping hospitals make faster, data-driven decisions during critical situations.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-gray-500">
              <div className="w-2 h-2 bg-[#22C55E] rounded-full animate-pulse" />
              System Online — All Services Operational
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2.5" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="text-sm text-gray-400 hover:text-white transition-colors no-underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hospital Access */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Hospital Access</h3>
            <ul className="space-y-2.5" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {hospitalLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors no-underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support / Contact */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Support</h3>
            <ul className="space-y-2.5" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors no-underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-5 pt-5 border-t border-gray-800">
              <p className="text-xs text-gray-500 mb-1">Emergency Support Hotline</p>
              <p className="text-sm font-semibold text-white">+91 1800-XXX-XXXX</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} AI Emergency Triage Assistant. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              {['Privacy Policy', 'Terms of Service', 'HIPAA Compliance', 'Security'].map((item) => (
                <a key={item} href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors no-underline">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
