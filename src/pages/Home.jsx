import { useEffect, useMemo, useState } from 'react';
import { Search, ArrowLeft, ArrowRight } from 'lucide-react';
import { useSearchParams, Link } from 'react-router-dom';
import GameCarousel from '../components/GameCarousel.jsx';
import { useGames } from '../context/GameContext.jsx';
import { formatRating } from '../utils/format.js';

const Home = () => {
  const {
    trending,
    popular,
    newReleases,
    topRated,
    loading,
    error,
  } = useGames();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const category = searchParams.get('category') || '';
  const [localQuery, setLocalQuery] = useState(query);



  useEffect(() => {
    setLocalQuery(query);
  }, [query]);

  const heroSlides = useMemo(() => {
    const source = trending?.length ? trending : popular;
    if (!source) return [];
    return source.slice(0, 7);
  }, [trending, popular]);

  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    if (!heroSlides.length) return undefined;
    const timer = setInterval(() => {
      setHeroIndex((idx) => (idx + 1) % heroSlides.length);
    }, 5200);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  useEffect(() => {
    setHeroIndex(0);
  }, [heroSlides.length]);

  const heroGame =
    heroSlides[heroIndex] ||
    trending?.[0] ||
    popular?.[0] || {
      name: 'Discover the next-gen titles in stunning fidelity.',
      background_image:
        'https://res.cloudinary.com/df3vc7uli/image/upload/v1733867001/cod-hero.jpg',
    };

  const onSubmit = (e) => {
    e.preventDefault();
    const trimmed = localQuery.trim();
    setSearchParams(trimmed ? { q: trimmed } : {});
  };

  return (
    <div className="space-y-10">
      <section className="relative h-[55vh] flex items-center justify-center overflow-hidden rounded-3xl bg-linear-to-br from-[#0d0f14] via-[#0b0c0d] to-yellow-700 p-6 shadow-2xl">
        <div className="absolute inset-0 opacity-60 transition duration-700">
          <img
            src={
              heroGame?.background_image ||
              'https://res.cloudinary.com/df3vc7uli/image/upload/v1733867001/cod-hero.jpg'
            }
            alt="Hero"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#0b0c0d] via-black/70 to-transparent" />
        </div>
        <div className="relative z-10 grid gap-6 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4">
            <p className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-500 backdrop-blur">
              Premium marketplace
            </p>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              {heroGame?.name || 'Discover the next-gen titles in stunning fidelity.'}
            </h1>
            <p className="max-w-xl text-lg text-[#cfcfcf]">
              Ultra-fast delivery, curated bundles, and exclusive rewards. Jump into trending,
              popular, and brand-new releases.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-sm text-[#cfcfcf]">
              <span className="flex items-center gap-2 rounded-full bg-[#111111]/80 px-3 py-1">
                Rating: {formatRating(heroGame?.rating)}
              </span>
              <span className="flex items-center gap-2 rounded-full bg-green-900/20 border border-green-950/20 px-3 py-1 text-green-600">
                Live discounts every weekend
              </span>
              <span className="flex items-center gap-2 rounded-full bg-[#111111]/80 px-3 py-1">
                {heroGame?.genres?.slice(0, 2).map((g) => g.name).join(' · ') || 'Shooter'}
              </span>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="/news"
                className="inline-flex items-center justify-center rounded-full bg-yellow-600/10 border border-yellow-600/20 text-yellow-600 px-4 py-2 font-semibold  shadow-lg transition hover:shadow-[0_10px_40px_rgba(241,200,115,0.3)]"
              >
                View news
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-[#f1c873]/40 px-4 py-2 font-semibold text-white transition hover:bg-[#111111]"
              >
                Talk to us
              </Link>
            </div>
          </div>
          
        </div>
        {heroSlides.length > 1 && (
          <div className="absolute bottom-4 left-0 right-0 z-10 flex items-center justify-center px-4">
            
            <div className="flex items-center gap-2 rounded-full bg-black/30 px-3 py-2 backdrop-blur">
              {heroSlides.map((slide, idx) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setHeroIndex(idx)}
                  className={`h-2 w-8 rounded-full transition cursor-pointer ${
                    idx === heroIndex ? 'bg-yellow-600/40 border border-yellow-600/30' : 'bg-yellow-900/15'
                  }`}
                  aria-label={`Go to ${slide.name}`}
                />
              ))}
            </div>
            
          </div>
        )}
      </section>

      

      {error && (
        <div className="rounded-2xl border border-red-500/40 bg-red-500/10 p-4 text-red-200">
          {error}
        </div>
      )}

      <GameCarousel title="Trending Games" subtitle="Hot right now" games={trending} loading={loading} />
      <GameCarousel title="Popular Games" subtitle="Most played" games={popular} loading={loading} />
      <GameCarousel title="New Releases" subtitle="Fresh drops" games={newReleases} loading={loading} />
      <GameCarousel title="Top Rated" subtitle="Critics love" games={topRated} loading={loading} />
    </div>
  );
};

export default Home;
