import api from './axios';
import { fetchWithRetry } from './apiUtils';

export const getWishlist = async () => {
  return await fetchWithRetry(() => api.get('/wishlist'));
};

export const toggleWishlist = async (productId) => {
  return await fetchWithRetry(() => api.post('/wishlist', { productId }));
};

export const removeFromWishlist = async (productId) => {
  return await fetchWithRetry(() => api.delete(`/wishlist/${productId}`));
};
