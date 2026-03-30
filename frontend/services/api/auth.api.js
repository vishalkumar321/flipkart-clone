import api from './axios';
import { fetchWithRetry } from './apiUtils';

/** Register a new user */
export const register = async (data) => {
  return await fetchWithRetry(() => api.post('/auth/register', data));
};

/** Login with email/password */
export const login = async (data) => {
  return await fetchWithRetry(() => api.post('/auth/login', data));
};

/** Get current user profile */
export const getMe = async () => {
  return await fetchWithRetry(() => api.get('/auth/me'));
};

/** Update user profile */
export const updateProfile = async (data) => {
  return await fetchWithRetry(() => api.put('/auth/profile', data));
};

/** Send OTP to mobile */
export const sendOTP = async (phone) => {
  return await fetchWithRetry(() => api.post('/auth/send-otp', { phone }));
};

/** Verify OTP and login/register */
export const verifyOTP = async (phone, otp) => {
  return await fetchWithRetry(() => api.post('/auth/verify-otp', { phone, otp }));
};
