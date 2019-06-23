// utils.ts

/**
 * Generate a random number between 0 and max
 * @param max - max number to be generated
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 */
export const getRandomNum = (max: number): number => {
  return Math.floor(Math.random() * Math.floor(max));
};
