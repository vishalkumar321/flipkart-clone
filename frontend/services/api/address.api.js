import api from './axios';
import { fetchWithRetry } from './apiUtils';

export const getAddresses = async () => {
  return await fetchWithRetry(() => api.get('/addresses'));
};

export const createAddress = async (data) => {
  return await fetchWithRetry(() => api.post('/addresses', data));
};

export const updateAddress = async (id, data) => {
  return await fetchWithRetry(() => api.put(`/addresses/${id}`, data));
};

export const deleteAddress = async (id) => {
  return await fetchWithRetry(() => api.delete(`/addresses/${id}`));
};

export const setDefaultAddress = async (id) => {
  return await fetchWithRetry(() => api.patch(`/addresses/${id}/default`));
};
