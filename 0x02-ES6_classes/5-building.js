export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (this.constructor !== Building && !this.evacuationWarningMessage) {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  set sqft(value) {
    this._sqft = value;
  }

  get sqft() {
    return this._sqft;
  }
}
