import api from './axios';
import { fetchWithRetry } from './apiUtils';

export const placeOrder = async (orderData) => {
  return await fetchWithRetry(() => api.post('/orders', orderData));
};

export const getOrders = async (params = {}) => {
  return await fetchWithRetry(() => api.get('/orders', { params }));
};

export const getOrderById = async (id) => {
  return await fetchWithRetry(() => api.get(`/orders/${id}`));
};
