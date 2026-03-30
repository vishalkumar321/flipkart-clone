import api from './axios';
import { fetchWithRetry } from './apiUtils';

export const getCart = async () => {
  return await fetchWithRetry(() => api.get('/cart'));
};

export const addToCart = async (productId, quantity = 1) => {
  return await fetchWithRetry(() => api.post('/cart/add', { productId, quantity }));
};

export const updateCart = async (cartItemId, quantity) => {
  return await fetchWithRetry(() => api.put('/cart/update', { cartItemId, quantity }));
};

export const removeFromCart = async (cartItemId) => {
  return await fetchWithRetry(() => api.delete('/cart/remove', { data: { cartItemId } }));
};

export const clearCart = async () => {
  return await fetchWithRetry(() => api.delete('/cart/clear'));
};
