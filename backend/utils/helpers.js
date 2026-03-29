/**
 * Generic Helper Utilities
 */

/**
 * Durstenfeld shuffle algorithm for arrays
 * @param {Array} array 
 * @returns {Array} Shuffled array
 */
const shuffleArray = (array) => {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

module.exports = {
  shuffleArray,
};
