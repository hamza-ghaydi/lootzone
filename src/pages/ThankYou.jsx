import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { formatPrice } from '../utils/format.js';

const ThankYou = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const total = state?.total || 0;
  const items = state?.items || 0;

  return (
    <div className="flex flex-col items-center justify-center space-y-4 rounded-3xl border border-[#1f1f1f] bg-[#0f1012] p-8 text-center text-white shadow-xl">
      <CheckCircle2 className="h-16 w-16 text-green-400" />
      <h1 className="text-3xl font-bold">Thank you for your purchase!</h1>
      <p className="max-w-xl text-[#cfcfcf]">
        Your order is confirmed. A receipt has been emailed to you. Download instructions will be
        available in your account shortly.
      </p>
      <div className="flex gap-3 rounded-2xl border border-[#1f1f1f] bg-black/40 px-6 py-4 text-sm text-[#cfcfcf]">
        <span className="font-semibold text-white">{items} item(s)</span>
        <span className="text-[#555]">•</span>
        <span className="font-semibold text-yellow-500">{formatPrice(total)}</span>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => navigate('/browse')}
          className="rounded-full bg-yellow-600 px-6 py-3 text-sm font-semibold text-black transition hover:bg-yellow-500"
        >
          Discover more games
        </button>
        <Link
          to="/"
          className="rounded-full border border-[#1f1f1f] px-6 py-3 text-sm font-semibold text-white transition hover:border-yellow-600 hover:text-yellow-500"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;

