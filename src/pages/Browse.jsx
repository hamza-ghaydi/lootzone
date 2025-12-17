import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle.jsx';
import GameCard from '../components/GameCard.jsx';
import { useGames } from '../context/GameContext.jsx';

const Browse = () => {
  const { searchResults, searchGames, searchLoading, error } = useGames();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const category = searchParams.get('category') || '';

  useEffect(() => {
    if (query || category) {
      searchGames({ query, genre: category });
    }
  }, [query, category, searchGames]);

  const title = category
    ? `Category: ${category}`
    : query
      ? `Search results for "${query}"`
      : 'Browse games';

  return (
    <div className="space-y-6 mt-5 w-full">
      <SectionTitle title={title} subtitle="Discover games" />

      {error && (
        <div className="rounded-2xl border border-red-500/40 bg-red-500/10 p-4 text-red-200">
          {error}
        </div>
      )}

      {!query && !category && (
        <div className="rounded-2xl border border-[#1f1f1f] bg-[#0f1012] p-6 text-[#cfcfcf]">
          Use the search bar or pick a category to see matching games.
        </div>
      )}

      {searchLoading && (
        <div className="rounded-2xl border border-[#1f1f1f] bg-[#0f1012] p-6 text-[#cfcfcf]">
          Loading games...
        </div>
      )}

      {!searchLoading && (query || category) && (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {searchResults?.length ? (
            searchResults.map((game) => <GameCard key={game.id} game={game} />)
          ) : (
            <div className="col-span-full rounded-2xl border border-[#1f1f1f] bg-[#0f1012] p-6 text-[#cfcfcf]">
              No games found. Try a different search or category.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Browse;


