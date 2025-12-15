
import { formatPrice } from '../utils/format.js';

const bundles = [
  { id: 'b1', label: '2400 Cod Points', price: 19.99 },
  { id: 'b2', label: '1600 Cod Points', price: 10.99 },
  { id: 'b3', label: 'Cod League (Faze)', price: 9.99 },
];

const Bundles = () => (
  <div className="rounded-2xl bg-[#111111] p-4 shadow-xl">
    <div className="mb-3">
      <p className="text-sm uppercase tracking-[0.2em] text-yellow-600">Bundles</p>
      <h3 className="text-xl font-semibold text-white">Add-ons</h3>
    </div>
    <div className="space-y-3">
      {bundles.map((bundle) => (
        <div
          key={bundle.id}
          className="flex items-center justify-between rounded-xl bg-[#0b0c0d] p-4"
        >
          <div>
            <p className="text-sm font-semibold text-white">{bundle.label}</p>
            <p className="text-xs text-[#cfcfcf]">Instant delivery • In stock</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold text-yellow-600">
              {formatPrice(bundle.price)}
            </span>
            <button
              type="button"
              className="rounded-full bg-[#171717] px-3 py-2 text-xs font-semibold text-white transition hover:bg-yellow-500 hover:text-white cursor-pointer"
            >
              Buy now
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Bundles;

