/** @typedef {import('./normalize.js').Show} Show */
/** @typedef {import('./filter.js').FilterOptions} FilterOptions */

/**
 * C2. Повертає серіали, які відповідають усім заданим фільтрам.
 *
 * @param {Show[]} shows
 * @param {FilterOptions} [options]
 * @returns {Show[]}
 */
export function filterShows(shows, options = {}) {
  const query = options?.query?.trim().toLowerCase();
  const genre = options?.genre?.trim();
  const minRating = options?.minRating;
  const isRatingFilterActive = minRating != null && minRating > 0;

  return shows.filter((show) => {
    if (query && !show.name.toLowerCase().includes(query)) {
      return false;
    }
    if (genre && !show.genres.includes(genre)) {
      return false;
    }
    if (isRatingFilterActive && (show.rating === null || show.rating < minRating)) {
      return false;
    }
    return true;
  });
}