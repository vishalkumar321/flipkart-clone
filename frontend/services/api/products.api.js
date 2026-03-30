import api from './axios';
import { fetchWithRetry } from './apiUtils';

/** Fetch products with optional filters */
export const getProducts = async (params = {}) => {
  return await fetchWithRetry(() => api.get('/products', { params }));
};

/** Fetch a single product by ID */
export const getProductById = async (id) => {
  return await fetchWithRetry(() => api.get(`/products/${id}`));
};

/** Fetch featured products */
export const getFeaturedProducts = async () => {
  return await fetchWithRetry(() => api.get('/products/featured'));
};

/** Fetch all categories */
export const getCategories = async () => {
  return await fetchWithRetry(() => api.get('/products/categories'));
};

/** Fetch all unique brands */
export const getBrands = async () => {
  return await fetchWithRetry(() => api.get('/products/brands'));
};

/** Fetch dynamic specs and brands for a specific category or search */
export const getDynamicFilters = async (params = {}) => {
  return await fetchWithRetry(() => api.get('/products/filters', { params }));
};

/** Fetch the Home page layout with categorized products */
export const getHomeLayout = async () => {
  return await fetchWithRetry(() => api.get('/products/home-layout'));
};
