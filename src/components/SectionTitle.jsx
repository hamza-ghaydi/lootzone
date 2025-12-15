import { Link } from 'react-router-dom';

const SectionTitle = ({ title, subtitle, actionLabel, actionHref }) => (
  <div className="mb-4 flex items-center justify-between">
    <div>
      <p className="text-sm uppercase tracking-[0.2em] text-yellow-500">{subtitle}</p>
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
    </div>
    {actionLabel && actionHref && (
      <Link
        to={actionHref}
        className="text-sm text-[#f1c873] transition hover:text-white"
      >
        {actionLabel}
      </Link>
    )}
  </div>
);

export default SectionTitle;

