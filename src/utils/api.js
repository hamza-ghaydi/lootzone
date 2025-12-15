import axios from 'axios';

const API_KEY = '8b88e17ec42d4fd8a2de2d85e491ea28';
const api = axios.create({
  baseURL: 'https://api.rawg.io/api',
});

export const fetchGames = async (params = {}) => {
  const { data } = await api.get('/games', {
    params: { key: API_KEY, ...params },
  });
  return data.results || [];
};

export const fetchGameDetails = async (id) => {
  const { data } = await api.get(`/games/${id}`, {
    params: { key: API_KEY },
  });
  return data;
};

export const fetchScreenshots = async (id) => {
  const { data } = await api.get(`/games/${id}/screenshots`, {
    params: { key: API_KEY },
  });
  return data.results || [];
};

export default api;
