const RATINGS = [1, 2, 3, 4, 5];

export default class Movie {
  constructor(data) {
    this.raw = data;
    this.name = String(data?.name || '');
    this.description = String(data?.description || '');
    this.image = String(data?.image || '');
    this.genre = String(data?.genre || '');
    this.genres = Array.isArray(data?.genres) ? data.genres : [];
    this.released = Boolean(data?.released || false);
    this.rating = Number(data?.rating || 0);
    this.ratings = RATINGS;

    // return this.unpack(data);
  }

  // unpack(data) {
  //   if (data) {
  //     for (const key in data) {
  //       if (this[key] === undefined) this[key] = data[key];
  //     }
  //   }
  //   return this;
  // }
}
