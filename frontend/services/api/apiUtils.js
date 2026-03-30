/**
 * Reusable utility for API calls with automatic retry logic
 * Particularly useful for handling cold starts on serverless backends
 */

const MAX_RETRIES = 3;
const RETRY_DELAY_MS = 2000;

/**
 * Utility to wait for a specified duration
 * @param {number} ms Milliseconds to wait
 */
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Executes an API call with automatic retries on timeout or network errors
 * @param {Function} apiFunc Function that returns an Axios promise (e.g., () => api.get('/path'))
 * @returns {Promise<any>} The response data
 */
export const fetchWithRetry = async (apiFunc) => {
  let lastError;

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const response = await apiFunc();
      
      // If we made it here, the call succeeded
      if (attempt > 1) {
        console.log(`✅ API recovered on attempt ${attempt}`);
      }
      return response.data;
    } catch (error) {
      lastError = error;

      // Check if the error is retriable (Timeout or Network Error)
      const isTimeout = error.code === 'ECONNABORTED' || error.message?.toLowerCase().includes('timeout');
      const isNetworkError = !error.response && error.request; // No response from server

      if (attempt < MAX_RETRIES && (isTimeout || isNetworkError)) {
        console.warn(
          `⚠️ API call failed (Attempt ${attempt}/${MAX_RETRIES}). ` +
          `Reason: ${isTimeout ? 'Timeout' : 'Network Error'}. ` +
          `Retrying in ${RETRY_DELAY_MS}ms...`
        );
        
        await sleep(RETRY_DELAY_MS);
        continue;
      }

      // If we reached here, it's either not a retriable error OR we exhausted retries
      console.error(
        `❌ API call failed after ${attempt} attempts.`,
        error.response?.data || error.message
      );
      throw error;
    }
  }

  throw lastError;
};
