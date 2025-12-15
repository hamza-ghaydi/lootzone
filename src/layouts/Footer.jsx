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
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 md:flex-row md:justify-between">
        <div className="space-y-3 flex flex-col">
          <Link to="/" className="flex items-center gap-2 w-25">
            <img src={images.logo} alt="LootZone" className='w-15' />
          </Link>
          <p className="max-w-md text-sm text-[#cfcfcf]">
            Curated AAA and indie titles with premium service, secure delivery, and community perks.
          </p>
        </div>
        
          <div>
            <p className="text-sm font-semibold text-white">Explore</p>
            <div className="mt-3 flex flex-col gap-2 text-sm text-[#cfcfcf]">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} className="hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Support</p>
            <div className="mt-3 flex flex-col gap-2 text-sm text-[#cfcfcf]">
              <span>Help center</span>
              <span>Refund policy</span>
              <span>Terms</span>
            </div>
          </div>
        
      </div>
      <div className="mx-auto mt-8 flex max-w-6xl items-center justify-between px-4 text-xs text-[#666]">
        <span>© {new Date().getFullYear()} Loot Entertainment. All rights reserved.</span>
        <div className="flex gap-3">
          <span>Twitter</span>
          <span>Discord</span>
          <span>Instagram</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
