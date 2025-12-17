import { Link } from 'react-router-dom';
import { images } from '../constants';

const Footer = () => {
  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'News', path: '/news' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="mt-5 border-t border-white/5 bg-[#0b0c0d]/80 pb-10 pt-8 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="flex flex-col gap-8 md:flex-row md:justify-between md:gap-12">
          {/* Logo & Description */}
          <div className="flex flex-col items-center justify-center space-y-3  md:max-w-xs">
            <Link to="/" className="flex items-center  gap-2">
              <img src={images.logo} alt="LootZone" className="w-32" />
            </Link>
            <p className="text-center text-sm text-[#cfcfcf] ">
              Curated AAA and indie titles with premium service, secure delivery, and community perks.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-8 sm:gap-12 md:gap-16">
            {/* Explore Section */}
            <div>
              <p className="mb-3 text-sm font-semibold text-white">Explore</p>
              <div className="flex flex-col gap-2 text-sm text-[#cfcfcf]">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Support Section */}
            <div>
              <p className="mb-3 text-sm font-semibold text-white">Support</p>
              <div className="flex flex-col gap-2 text-sm text-[#cfcfcf]">
                <Link to="/help" className="transition-colors hover:text-white">
                  Help center
                </Link>
                <Link to="/refund" className="transition-colors hover:text-white">
                  Refund policy
                </Link>
                <Link to="/terms" className="transition-colors hover:text-white">
                  Terms
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <span className="text-center text-sm text-[#cfcfcf] sm:text-left">
            © {new Date().getFullYear()} Loot Entertainment. All rights reserved.
          </span>
          
          <a
            href="https://hamza-rhaidi.vercel.app/"
            className="flex items-center gap-2 text-sm text-amber-50 transition-opacity hover:opacity-80"
          >
            <span>Created by</span>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8ACE00] p-1">
              <img
                className="h-full w-full object-contain"
                src="https://hamza-rhaidi.vercel.app/assets/logo-j4_gHrFO.png"
                alt="Creator Logo"
              />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;