import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center">
    <div className="glitch text-7xl font-extrabold text-white" data-text="404">
      404
    </div>
    <p className="max-w-md text-[#cfcfcf]">
      The page you are looking for got lost in a side quest. Return to home base and continue your
      mission.
    </p>
    <Link
      to="/"
      className="rounded-full bg-gradient-to-r from-yellow-600 to-yellow-900 px-6 py-3 font-semibold text-white transition hover:shadow-[0_10px_40px_rgba(241,200,115,0.3)]"
    >
      Back to home
    </Link>
  </div>
);

export default NotFound;
