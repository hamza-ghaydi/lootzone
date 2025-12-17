import { Link } from 'react-router-dom';
import { Star, MonitorSmartphone, Gamepad2, Joystick } from 'lucide-react';
import { formatRating, platformLabel } from '../utils/format.js';

const platformIcon = (platforms = []) => {
  const names = platforms.map((p) => p?.platform?.name || p?.name || '').join(' ').toLowerCase();
  if (names.includes('xbox')) return <Gamepad2 className="h-4 w-4 text-[#f1c873]" />;
  if (names.includes('playstation')) return <Joystick className="h-4 w-4 text-[#f1c873]" />;
  if (names.includes('nintendo')) return <Gamepad2 className="h-4 w-4 text-[#f1c873]" />;
  return <MonitorSmartphone className="h-4 w-4 text-[#f1c873]" />;
};

const GameCard = ({ game }) => {
  const cover =
    game?.background_image ||
    'https://res.cloudinary.com/df3vc7uli/image/upload/v1733867340/game-placeholder.jpg';

  return (
    <Link
      to={`/game/${game.id}`}
      className="shine-hover group relative flex min-w-[220px] max-w-auto  flex-col overflow-hidden rounded-2xl bg-[#111111] transition duration-300 hover:-translate-y-1 "
    >
      <div className="relative h-40 w-full overflow-hidden">
        <img
          src={cover}
          alt={game?.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0d] via-transparent to-transparent" />
        <div className="absolute left-3 top-3 flex items-center gap-2 rounded-full bg-black/50 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
          <Star className="h-4 w-4 text-[#f1c873]" />
          <span>{formatRating(game?.rating)}</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-center justify-between text-xs text-[#cfcfcf]">
          <span className="flex items-center gap-2 uppercase tracking-wide">
            {platformIcon(game?.parent_platforms)}
            {platformLabel(game?.parent_platforms)}
          </span>
        </div>
        <h3 className="line-clamp-2 text-lg font-semibold text-white">{game?.name}</h3>
        <div className="mt-auto flex items-center justify-between text-xs text-[#cfcfcf]">
          <span className="rounded-full bg-[#171717] px-3 py-1">Genres</span>
          <span className="text-green-600 bg-green-900/20 border border-green-950/20 px-3 py-1 rounded-full">
            {game?.genres?.slice(0,1).map((g) => g.name).join(' · ') || 'Action'}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;

