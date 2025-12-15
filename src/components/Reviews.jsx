import { Star } from 'lucide-react';

const mockReviews = [
  {
    id: 'r1',
    author: 'Jonathan Adams',
    rating: 4.8,
    helpful: 120,
    body: 'Black Ops 6 is nothing short of a masterpiece. The campaign is intense, gripping, and packed with twists that keep you on the edge of your seat.',
  },
  {
    id: 'r2',
    author: 'Jason Todd',
    rating: 4.5,
    helpful: 42,
    body: 'Maps are finely balanced with engaging reflex-driven action. Multiplayer stays fresh with smart seasonal drops.',
  },
];

const Reviews = () => {
  const average = (
    mockReviews.reduce((acc, r) => acc + r.rating, 0) / mockReviews.length
  ).toFixed(1);

  return (
    <div className="rounded-2xl bg-[#111111] p-4 shadow-xl">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-[#dda545]">Reviews</p>
          <h3 className="text-xl font-semibold text-white">Community</h3>
        </div>
        <div className="flex items-center gap-2 rounded-full bg-[#0b0c0d] px-4 py-2">
          <Star className="h-5 w-5 text-[#f1c873]" />
          <span className="text-lg font-bold text-white">{average}</span>
          <span className="text-xs text-[#cfcfcf]">/ 5</span>
        </div>
      </div>
      <div className="space-y-3">
        {mockReviews.map((review) => (
          <div key={review.id} className="rounded-xl bg-[#0b0c0d] p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-white">{review.author}</p>
                <p className="text-xs text-[#cfcfcf]">Absolute banger</p>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-[#f1c873]" />
                <span className="text-sm font-semibold text-white">
                  {review.rating.toFixed(1)}
                </span>
              </div>
            </div>
            <p className="mt-2 text-sm text-[#cfcfcf] leading-relaxed">{review.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;

