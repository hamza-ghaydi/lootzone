import { useMemo, useState } from 'react';
import { ShieldCheck, ShoppingBag } from 'lucide-react';
import { formatPrice } from '../utils/format.js';
import { useGames } from '../context/GameContext.jsx';

const priceTiers = [
  { id: 'collector', label: 'Collector', price: 271.15, discount: 31 },
  { id: 'standard', label: 'Standard', price: 199.0, discount: 18 },
  { id: 'vault', label: 'Vault', price: 299.0, discount: 0 },
];

const PriceBox = ({ game }) => {
  const [activeTier, setActiveTier] = useState(priceTiers[0]);
  const { addToCart } = useGames();

  const savingsLabel = useMemo(() => {
    if (!activeTier?.discount) return null;
    return `Save ${activeTier.discount}%`;
  }, [activeTier]);

  const handleAddToCart = () => {
    if (!game) return;
    const image =
      game.background_image ||
      game.background_image_additional ||
      'https://res.cloudinary.com/df3vc7uli/image/upload/v1733867340/game-placeholder.jpg';

    addToCart({
      uid: `${game.id}-${activeTier.id}`,
      gameId: game.id,
      name: game.name,
      edition: activeTier.label,
      price: activeTier.price,
      image,
    });
  };

  return (
    <div className="rounded-2xl bg-gradient-to-b from-[#161616] to-[#0d0d0f] p-5 ">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-yellow-600">Edition</p>
          <h3 className="text-2xl font-semibold text-white">{activeTier.label}</h3>
        </div>
        {savingsLabel && (
          <span className="rounded-full bg-black/50 px-3 py-1 text-xs text-yellow-600 backdrop-blur">
            {savingsLabel}
          </span>
        )}
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {priceTiers.map((tier) => (
          <button
            key={tier.id}
            type="button"
            onClick={() => setActiveTier(tier)}
            className={`rounded-xl border px-3 py-2 text-left text-sm font-semibold transition ${
              activeTier.id === tier.id
                ? 'border-yellow-600 bg-yellow-600 text-white'
                : 'border-[#1f1f1f] bg-[#121212] text-white hover:border-yellow-600'
            }`}
          >
            {tier.label}
          </button>
        ))}
      </div>
      <div className="mt-6 rounded-xl bg-[#0b0c0d] p-4">
        <div className="flex items-center gap-2 text-[#cfcfcf]">
          <ShieldCheck className="h-4 w-4 text-[#a8ff60]" />
          <span>Can activate in United States</span>
        </div>
        <div className="mt-2 flex items-center gap-2 text-[#cfcfcf]">
          <ShoppingBag className="h-4 w-4 text-yellow-600" />
          <span>Earn 6% cashback • Currently in stock</span>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-center">
        <div>
          <p className="text-sm text-[#cfcfcf]">Current price</p>
          <p className="text-3xl font-bold text-yellow-600">
            {formatPrice(activeTier.price)}
          </p>
        </div>
      </div>
      <button
        type="button"
        onClick={handleAddToCart}
        className="mt-3 w-full cursor-pointer rounded-full bg-[#111] px-5 py-3 font-semibold text-white transition hover:bg-yellow-600"
      >
        Add to cart
      </button>
    </div>
  );
};

export default PriceBox;

