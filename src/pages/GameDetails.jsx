import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  Calendar,
  Languages,
  Link2,
  MapPin,
  Users,
  ArrowLeft,
  Star,
} from 'lucide-react';
import ScreenshotGallery from '../components/ScreenshotGallery.jsx';
import PriceBox from '../components/PriceBox.jsx';
import Requirements from '../components/Requirements.jsx';
import Bundles from '../components/Bundles.jsx';
import GameTabs from '../components/GameTabs.jsx';
import { useGames } from '../context/GameContext.jsx';
import { formatDate, formatRating } from '../utils/format.js';
import Reviews from '../components/Reviews.jsx';

const Tag = ({ icon: Icon, label }) => (
  <span className="flex items-center gap-2 rounded-full bg-[#111111]/80 px-3 py-1 text-xs font-semibold text-[#cfcfcf]">
    <Icon className="h-4 w-4 text-yellow-600" />
    {label}
  </span>
);

const GameDetails = () => {
  const { id } = useParams();
  const { getGameDetails, getScreenshots } = useGames();
  const [game, setGame] = useState(null);
  const [shots, setShots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setError(null);
      try {
        const [details, screenshots] = await Promise.all([
          getGameDetails(id),
          getScreenshots(id),
        ]);
        setGame(details);
        setShots(screenshots);
      } catch (err) {
        setError(err?.message || 'Failed to load game.');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [getGameDetails, getScreenshots, id]);

  if (loading) {
    return <div className="rounded-3xl bg-[#111111] p-8 text-white">Loading game…</div>;
  }

  if (error) {
    return (
      <div className="rounded-3xl border border-red-500/40 bg-red-500/10 p-6 text-red-200">
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <section className="relative h-[40vh] overflow-hidden rounded-2xl ">
        <div className="absolute inset-0">
          <img
            src={
              game?.background_image_additional ||
              game?.background_image ||
              'https://res.cloudinary.com/df3vc7uli/image/upload/v1733867001/cod-hero.jpg'
            }
            alt={game?.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#0b0c0d] via-black/70 to-transparent" />
        </div>
        <div className="relative z-10 p-6 sm:p-10">
          <div className="mb-4 flex items-center gap-2 text-sm text-[#cfcfcf]">
            <Link to="/" className="text-yellow-600 hover:text-white">
              Products
            </Link>
            <span>/</span>
            <span className="text-white">{game?.name}</span>
          </div>
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-yellow-600">
                {game?.genres?.map((g) => g.name).join(' • ')}
              </p>
              <h1 className="text-4xl font-bold text-white sm:text-5xl">{game?.name}</h1>
              <div className="mt-3 flex flex-wrap gap-2">
                <Tag icon={Calendar} label={`Release: ${formatDate(game?.released)}`} />
                <Tag icon={Users} label={`${game?.players_count || '1-4'} players`} />
                <Tag icon={Languages} label="Multi language: Yes" />
                <Tag icon={MapPin} label={game?.developers?.[0]?.name || 'Worldwide'} />
              </div>
            </div>
            <Link
              to="/"
              className="hidden items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur transition hover:bg-white/20 lg:flex"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-[#cfcfcf]">
            <span className="flex items-center gap-2 rounded-full bg-[#111111]/80 px-3 py-1">
              <Star className="h-4 w-4 text-yellow-600" />
              {formatRating(game?.rating)} rating
            </span>
            <span className="flex items-center gap-2 rounded-full bg-[#111111]/80 px-3 py-1">
              <Link2 className="h-4 w-4 text-yellow-600" />
              {game?.website ? (
                <a href={game.website} target="_blank" rel="noreferrer" className="underline">
                  Official site
                </a>
              ) : (
                'Official site'
              )}
            </span>
          </div>
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-6">
          <ScreenshotGallery screenshots={shots} />
          <GameTabs
            description={game?.description_raw?.slice(0, 650) || game?.description_raw}
            // reviews={<Reviews />}
          />
          <Bundles />
          <Requirements />

        </div>
        <div className="space-y-6">
          <PriceBox game={game} />

        </div>
      </div>
    </div>
  );
};

export default GameDetails;
