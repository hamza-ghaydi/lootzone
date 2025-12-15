import { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

const ScreenshotGallery = ({ screenshots = [] }) => {
  const [active, setActive] = useState(0);
  const shots =
    screenshots.length > 0
      ? screenshots
      : [
          {
            id: 'fallback',
            image:
              'https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?auto=format&fit=crop&w=1200&q=80',
          },
        ];

  return (
    <div className="rounded-2xl bg-[#111111] p-4 shadow-xl">
      <div className="relative aspect-video overflow-hidden rounded-xl">
        <img
          src={shots[active]?.image}
          alt="Screenshot"
          className="h-full w-full object-cover"
        />
        <div className="absolute left-3 top-3 flex items-center gap-2 rounded-full bg-black/50 px-3 py-1 text-xs text-white backdrop-blur">
          <ImageIcon className="h-4 w-4 text-yellow-600" />
          <span>{`${active + 1} / ${shots.length}`}</span>
        </div>
      </div>
      <div className="mt-4 flex gap-3 overflow-x-auto pb-2 scrollbar-hidden">
        {shots.map((shot, idx) => (
          <button
            key={shot.id || idx}
            type="button"
            onClick={() => setActive(idx)}
            className={`relative h-16 w-28 overflow-hidden rounded-lg border transition cursor-pointer ${
              active === idx ? 'border-yellow-600' : 'border-transparent'
            }`}
          >
            <img src={shot.image} alt="thumb" className="h-full w-full object-cover" />
            <span className="absolute inset-0 bg-black/30 opacity-0 transition hover:opacity-100" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ScreenshotGallery;

