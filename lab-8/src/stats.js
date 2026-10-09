/** @typedef {import('./normalize.js').Show} Show */
/** @typedef {import('./stats.js').GenreStats} GenreStats */

/**
 * C4. Рахує статистику для кожного жанру.
 *
 * @param {Show[]} shows
 * @returns {Record<string, GenreStats>}
 */
export function genreStats(shows) {
  /** @type {Record<string, { count: number, sum: number, ratedCount: number }>} */
  const acc = {};

  for (const show of shows) {
    for (const genre of show.genres) {
      if (!acc[genre]) {
        acc[genre] = { count: 0, sum: 0, ratedCount: 0 };
      }
      acc[genre].count += 1;
      if (show.rating !== null) {
        acc[genre].sum += show.rating;
        acc[genre].ratedCount += 1;
      }
    }
  }

  /** @type {Record<string, GenreStats>} */
  const result = {};

  for (const [genre, data] of Object.entries(acc)) {
    result[genre] = {
      count: data.count,
      averageRating:
        data.ratedCount > 0
          ? Math.round((data.sum / data.ratedCount) * 10) / 10
          : null,
    };
  }

  return result;
}