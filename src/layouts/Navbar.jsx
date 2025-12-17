import { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { ShoppingCart, Search, Menu, Loader2, ChevronDown } from 'lucide-react';
import { fetchGames } from '../utils/api.js';
import images from '../constants/images.jsx';
import { useGames } from '../context/GameContext.jsx';

const Navbar = () => {
  const { cartCount } = useGames();
  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'News', path: '/news' },
    { label: 'Contact', path: '/contact' },
  ];
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [suggesting, setSuggesting] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (e) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;
    navigate(`/browse?q=${encodeURIComponent(trimmed)}`);
    setOpen(false);
    setShowSuggestions(false);
  };

  const categories = [
    'Action',
    'Adventure',
    'Shooter',
    'Strategy',
    'RPG',
    'Indie',
    'Sports',
    'Racing',
    'Horror',
  ];

  useEffect(() => {
    const trimmed = query.trim();
    if (!trimmed) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }
    const timer = setTimeout(async () => {
      setSuggesting(true);
      try {
        const results = await fetchGames({ search: trimmed, page_size: 6 });
        setSuggestions(results || []);
        setShowSuggestions(true);
      } catch (err) {
        setSuggestions([]);
      } finally {
        setSuggesting(false);
      }
    }, 250);
    return () => clearTimeout(timer);
  }, [query]);

  const handleSelectSuggestion = (game) => {
    navigate(`/game/${game.id}`);
    setShowSuggestions(false);
    setOpen(false);
  };

  const handleCategorySelect = (cat) => {
    navigate(`/browse?category=${encodeURIComponent(cat)}`);
    setOpen(false);
    setShowSuggestions(false);
    setShowCategories(false);
  };

  return (
    <header className="fixed  space-y-3 py-3 inset-x-0 top-0 z-30 border-b border-white/5 bg-[#0b0c0d]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 ">
        <div className="flex items-center lg:w-auto w-65 justify-between">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#111111] lg:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <Menu className="h-5 w-5 text-white" />
          </button>
          <Link to="/" className="flex items-center gap-2 w-25">
            <img src={images.logo} alt="LootZone" className='w-12' />
          </Link>
        </div>
        <nav
          className={`${open ? 'flex' : 'hidden'
            } absolute left-0 right-0 top-full flex-col gap-2 bg-[#0b0c0d] px-4 pb-4 pt-3 shadow-lg lg:static lg:flex lg:flex-row lg:items-center lg:bg-transparent lg:p-0 lg:shadow-none`}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-semibold transition ${isActive
                  ? 'bg-[#1f1a0f] text-yellow-600'
                  : 'text-[#cfcfcf] hover:text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          {/* Category Dropdown */}
          <div >
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowCategories(!showCategories)}
                onBlur={() => setTimeout(() => setShowCategories(false), 150)}
                className="flex items-center gap-2 rounded-full bg-[#111111] px-6 py-2 text-sm font-semibold text-[#cfcfcf] transition hover:bg-yellow-600/10 hover:text-yellow-600 hover:border hover:border-yellow-600/20"
              >
                Browse by Category
                <ChevronDown className={`h-4 w-4 transition-transform ${showCategories ? 'rotate-180' : ''}`} />
              </button>

              {showCategories && (
                <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-64 overflow-hidden rounded-2xl border border-[#1f1f1f] bg-[#0f1012] shadow-xl z-50">
                  <div className="divide-y divide-[#1f1f1f]">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onMouseDown={() => handleCategorySelect(cat)}
                        className="w-full px-4 py-3 text-left text-sm font-semibold text-[#cfcfcf] transition hover:bg-yellow-600/10 hover:text-yellow-600"
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>

        <div className="hidden flex-1 lg:flex">
          <div className="relative w-full">
            <form
              onSubmit={handleSearch}
              className="flex w-full items-center gap-2 rounded-full bg-[#111111] px-3 py-2 shadow-inner"
            >
              <Search className="h-4 w-4 text-[#cfcfcf]" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => query && setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
                placeholder={location.pathname === '/' ? 'Search for games...' : 'Search games'}
                className="w-full bg-transparent text-sm text-white placeholder:text-[#555] focus:outline-none"
              />
            </form>
            {showSuggestions && (
              <div className="absolute z-40 mt-2 w-full overflow-hidden rounded-2xl border border-[#1f1f1f] bg-[#0f1012] shadow-xl">
                <div className="flex items-center justify-between px-3 py-2 text-xs text-[#cfcfcf]">
                  <span>Results</span>
                  {suggesting && <Loader2 className="h-4 w-4 animate-spin text-[#cfcfcf]" />}
                </div>
                <div className="divide-y divide-[#1f1f1f]">
                  {suggestions.length ? (
                    suggestions.map((game) => (
                      <button
                        key={game.id}
                        type="button"
                        onMouseDown={() => handleSelectSuggestion(game)}
                        className="flex w-full items-center gap-3 px-3 py-2 text-left text-sm text-white hover:bg-[#171717]"
                      >
                        <img
                          src={
                            game.background_image ||
                            'https://res.cloudinary.com/df3vc7uli/image/upload/v1733867340/game-placeholder.jpg'
                          }
                          alt={game.name}
                          className="h-10 w-16 rounded object-cover"
                        />
                        <div className="flex flex-col">
                          <span className="font-semibold">{game.name}</span>
                          <span className="text-xs text-[#9ca3af]">
                            {game.genres?.slice(0, 2).map((g) => g.name).join(' · ')}
                          </span>
                        </div>
                      </button>
                    ))
                  ) : (
                    <div className="px-3 py-3 text-sm text-[#9ca3af]">No matches yet</div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => navigate('/checkout')}
            className="
    relative h-10 w-10 flex items-center justify-center
    rounded-full
    bg-[#1f1a0f]
    text-yellow-600
    border border-yellow-500/20
    shadow-[0_0_15px_rgba(255,200,80,0.15)]
    hover:shadow-[0_0_30px_rgba(255,200,80,0.35)]
    transition-all duration-300 cursor-pointer
  "
          >
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-yellow-600 px-1 text-xs font-bold text-black">
                {cartCount}
              </span>
            )}
          </button>

        </div>
      </div>
    </header>
  );
};

export default Navbar;