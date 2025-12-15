export const formatPrice = (price) =>
  price?.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });

export const formatRating = (rating) => (rating ? rating.toFixed(1) : 'N/A');

export const formatDate = (date) =>
  date ? new Date(date).toLocaleDateString('en-US', { dateStyle: 'medium' }) : 'TBD';

export const truncate = (text = '', max = 140) =>
  text.length > max ? `${text.slice(0, max)}…` : text;

export const platformLabel = (platforms = []) =>
  platforms
    .map((p) => p?.platform?.name || p?.name)
    .filter(Boolean)
    .slice(0, 3)
    .join(' · ');

