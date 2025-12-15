import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { fetchGameDetails, fetchGames, fetchScreenshots } from '../utils/api.js';
import ToastStack from '../components/Toast.jsx';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);
  const [newReleases, setNewReleases] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchLoading, setSearchLoading] = useState(false);
  const [error, setError] = useState(null);
  const [detailsCache, setDetailsCache] = useState(new Map());
  const [screenshotsCache, setScreenshotsCache] = useState(new Map());
  const [cart, setCart] = useState([]);
  const [toasts, setToasts] = useState([]);

  const dismissToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const showToast = useCallback((message, type = 'success') => {
    const id = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => dismissToast(id), 2800);
  }, [dismissToast]);

  const addToCart = useCallback(
    (item) => {
      setCart((prev) => {
        const existing = prev.find((entry) => entry.uid === item.uid);
        if (existing) {
          return prev.map((entry) =>
            entry.uid === item.uid
              ? { ...entry, quantity: entry.quantity + 1 }
              : entry,
          );
        }
        return [...prev, { ...item, quantity: item.quantity || 1 }];
      });
      showToast(`${item.name} (${item.edition}) added to cart`);
    },
    [showToast],
  );

  const updateCartQuantity = useCallback(
    (uid, quantity) => {
      setCart((prev) =>
        prev
          .map((item) =>
            item.uid === uid ? { ...item, quantity: Math.max(1, quantity) } : item,
          )
          .filter((item) => item.quantity > 0),
      );
    },
    [],
  );

  const removeFromCart = useCallback(
    (uid) => {
      setCart((prev) => prev.filter((item) => item.uid !== uid));
      showToast('Item removed from cart', 'info');
    },
    [showToast],
  );

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const loadHomeData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [trendingData, popularData, newData, topData] = await Promise.all([
        fetchGames({ ordering: '-added', page_size: 12 }),
        fetchGames({ ordering: '-metacritic', page_size: 12 }),
        fetchGames({
          ordering: '-released',
          dates: '2024-01-01,2025-12-31',
          page_size: 12,
        }),
        fetchGames({ ordering: '-rating', page_size: 12 }),
      ]);
      setTrending(trendingData);
      setPopular(popularData);
      setNewReleases(newData);
      setTopRated(topData);
    } catch (err) {
      setError(err?.message || 'Something went wrong while loading games.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadHomeData();
  }, [loadHomeData]);

  const searchGames = useCallback(async (queryOrOptions) => {
    const isObject = typeof queryOrOptions === 'object' && queryOrOptions !== null;
    const query = isObject ? queryOrOptions.query || '' : queryOrOptions || '';
    const genre = isObject ? queryOrOptions.genre || '' : '';

    if (!query && !genre) {
      setSearchResults([]);
      return;
    }

    setSearchLoading(true);
    try {
      const params = { page_size: 12 };
      if (query) params.search = query;
      if (genre) params.genres = genre.toLowerCase();

      const results = await fetchGames(params);
      setSearchResults(results);
    } catch (err) {
      setError(err?.message || 'Failed to search games.');
    } finally {
      setSearchLoading(false);
    }
  }, []);

  const getGameDetails = useCallback(
    async (id) => {
      if (detailsCache.has(id)) return detailsCache.get(id);
      const details = await fetchGameDetails(id);
      setDetailsCache((prev) => {
        const next = new Map(prev);
        next.set(id, details);
        return next;
      });
      return details;
    },
    [detailsCache],
  );

  const getScreenshots = useCallback(
    async (id) => {
      if (screenshotsCache.has(id)) return screenshotsCache.get(id);
      const shots = await fetchScreenshots(id);
      setScreenshotsCache((prev) => {
        const next = new Map(prev);
        next.set(id, shots);
        return next;
      });
      return shots;
    },
    [screenshotsCache],
  );

  const cartCount = useMemo(
    () => cart.reduce((total, item) => total + (item.quantity || 0), 0),
    [cart],
  );

  const cartTotal = useMemo(
    () => cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0),
    [cart],
  );

  const value = useMemo(
    () => ({
      trending,
      popular,
      newReleases,
      topRated,
      searchResults,
      searchGames,
      searchLoading,
      loading,
      error,
      refresh: loadHomeData,
      getGameDetails,
      getScreenshots,
      cart,
      cartCount,
      cartTotal,
      addToCart,
      updateCartQuantity,
      removeFromCart,
      clearCart,
      showToast,
      toasts,
      dismissToast,
    }),
    [
      trending,
      popular,
      newReleases,
      topRated,
      searchResults,
      searchGames,
      searchLoading,
      loading,
      error,
      loadHomeData,
      getGameDetails,
      getScreenshots,
      cart,
      cartCount,
      cartTotal,
      addToCart,
      updateCartQuantity,
      removeFromCart,
      clearCart,
      showToast,
      toasts,
      dismissToast,
    ],
  );

  return (
    <GameContext.Provider value={value}>
      {children}
      <ToastStack toasts={toasts} onDismiss={dismissToast} />
    </GameContext.Provider>
  );
};

export const useGames = () => useContext(GameContext);

export default GameContext;

