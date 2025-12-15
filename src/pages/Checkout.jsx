import { Link, useNavigate } from 'react-router-dom';
import { Minus, Plus, ShoppingCart, Trash2 } from 'lucide-react';
import { formatPrice } from '../utils/format.js';
import { useGames } from '../context/GameContext.jsx';

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, cartTotal, cartCount, updateCartQuantity, removeFromCart, clearCart, showToast } =
    useGames();

  const handleCompleteOrder = () => {
    if (!cart.length) {
      showToast('Add items to cart before checking out.', 'error');
      return;
    }
    showToast('Order placed successfully!');
    clearCart();
    navigate('/thank-you', { state: { total: cartTotal, items: cartCount } });
  };

  return (
    <div className="space-y-6 mt-5 rounded-3xl border border-[#1f1f1f] bg-[#0f1012] p-6 text-white shadow-xl">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-yellow-600">Checkout</p>
          <h1 className="text-3xl font-bold">Review your cart</h1>
        </div>
        <ShoppingCart className="h-10 w-10 text-yellow-600" />
      </div>

      {!cart.length ? (
        <div className="rounded-2xl border border-[#1f1f1f] bg-black/30 p-6 text-center">
          <p className="text-lg font-semibold">Your cart is empty.</p>
          <p className="mt-2 text-[#cfcfcf]">Browse games and add them to your cart.</p>
          <Link
            to="/browse"
            className="mt-4 inline-block rounded-full bg-yellow-600 px-6 py-3 font-semibold text-black transition hover:bg-yellow-500"
          >
            Continue shopping
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.uid}
                className="flex items-center gap-4 rounded-2xl border border-[#1f1f1f] bg-[#0b0c0d] p-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-16 w-24 rounded-xl object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-lg font-semibold">{item.name}</p>
                      <p className="text-sm text-[#cfcfcf]">{item.edition} Edition</p>
                    </div>
                    <p className="text-lg font-bold text-yellow-500">{formatPrice(item.price)}</p>
                  </div>
                  <div className="mt-3 flex items-center gap-3">
                    <div className="flex items-center rounded-full border border-[#1f1f1f] bg-black/40">
                      <button
                        type="button"
                        onClick={() => updateCartQuantity(item.uid, item.quantity - 1)}
                        className="p-2 text-white transition hover:text-yellow-500"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-10 text-center text-sm font-semibold">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateCartQuantity(item.uid, item.quantity + 1)}
                        className="p-2 text-white transition hover:text-yellow-500"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.uid)}
                      className="flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-red-400 transition hover:bg-red-500/10"
                    >
                      <Trash2 className="h-4 w-4" />
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4 rounded-2xl border border-[#1f1f1f] bg-[#0b0c0d] p-4">
            <h2 className="text-xl font-bold">Order summary</h2>
            <div className="space-y-3 text-sm text-[#cfcfcf]">
              <div className="flex justify-between">
                <span>Items</span>
                <span>{cartCount}</span>
              </div>
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{formatPrice(cartTotal)}</span>
              </div>
              <div className="flex justify-between">
                <span>Fees</span>
                <span>{formatPrice(Math.max(3, cartTotal * 0.015))}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax (included)</span>
                <span className="text-green-400">Covered</span>
              </div>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-black/30 p-3">
              <span className="text-sm text-[#cfcfcf]">Total</span>
              <span className="text-2xl font-bold text-yellow-500">
                {formatPrice(cartTotal + Math.max(3, cartTotal * 0.015))}
              </span>
            </div>
            <button
              type="button"
              onClick={handleCompleteOrder}
              className="w-full rounded-full bg-yellow-600 px-5 py-3 text-sm font-semibold text-black transition hover:bg-yellow-500"
            >
              Complete purchase
            </button>
            <button
              type="button"
              onClick={clearCart}
              className="w-full rounded-full border border-[#1f1f1f] px-5 py-3 text-sm font-semibold text-white transition hover:border-red-500/50 hover:text-red-200"
            >
              Clear cart
            </button>
            <Link
              to="/browse"
              className="block text-center text-sm font-semibold text-yellow-500 hover:text-yellow-300"
            >
              Continue shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;

