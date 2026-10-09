/** @typedef {import('./normalize.js').Show} Show */

/**
 * C3. Повертає новий масив серіалів, відсортований за полем `key`.
 *
 * @param {Show[]} shows
 * @param {'name' | 'year' | 'rating'} key
 * @param {'asc' | 'desc'} [direction]
 * @returns {Show[]}
 */
export function sortShows(shows, key, direction = 'asc') {
  return [...shows].sort((a, b) => {
    if (key === 'rating') {
      if (a.rating === null && b.rating === null) return 0;
      if (a.rating === null) return 1;
      if (b.rating === null) return -1;
      return direction === 'desc' ? b.rating - a.rating : a.rating - b.rating;
    }

    if (key === 'year') {
      if (a.year === null && b.year === null) return 0;
      if (a.year === null) return 1;
      if (b.year === null) return -1;
      return direction === 'desc' ? b.year - a.year : a.year - b.year;
    }

    if (key === 'name') {
      return direction === 'desc'
        ? b.name.localeCompare(a.name)
        : a.name.localeCompare(b.name);
    }

    return 0;
  });
}