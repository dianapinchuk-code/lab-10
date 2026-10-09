/** @typedef {import('./normalize.js').Show} Show */
/** @typedef {import('./normalize.js').RawShow} RawShow */

/**
 * C1. Перетворює запис TVmaze на Show.
 *
 * @param {RawShow} raw
 * @returns {Show}
 */
export function normalizeShow(raw) {
  return {
    id: raw.id,
    name: raw.name,
    year: raw.premiered ? parseInt(raw.premiered.slice(0, 4), 10) : null,
    rating: raw.rating?.average ?? null,
    runtime: raw.runtime ?? null,
    network: raw.network?.name ?? null,
    genres: raw.genres ? [...raw.genres] : [],
  };
}