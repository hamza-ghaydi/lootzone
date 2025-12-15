import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import GameCard from './GameCard.jsx';

const SkeletonCard = () => (
  <div className="h-[280px] min-w-[220px] max-w-[260px] animate-pulse rounded-2xl bg-[#111111]/70" />
);

const GameCarousel = ({ title, subtitle, games = [], loading }) => {
  const scroller = useRef(null);

  const scrollBy = (offset) => {
    if (!scroller.current) return;
    scroller.current.scrollBy({ left: offset, behavior: 'smooth' });
  };

  return (
    <section className="relative">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-yellow-500">{subtitle}</p>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scrollBy(-320)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#171717] text-white transition hover:bg-yellow-600/10 hover:text-yellow-600 hover:border hover:border-yellow-600/20 cursor-pointer"
            aria-label="Scroll left"
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            onClick={() => scrollBy(320)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#171717] text-white transition hover:bg-yellow-600/10 hover:text-yellow-600 hover:border hover:border-yellow-600/20 cursor-pointer"
            aria-label="Scroll right"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
      <div
        ref={scroller}
        className="scrollbar-hidden flex gap-4 overflow-x-auto pb-4"
      >
        {loading
          ? Array.from({ length: 8 }).map((_, idx) => <SkeletonCard key={idx} />)
          : games.map((game) => <GameCard key={game.id} game={game} />)}
      </div>
    </section>
  );
};

export default GameCarousel;

