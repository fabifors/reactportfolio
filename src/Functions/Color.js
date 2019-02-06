class Color {
  constructor(hue, saturation, lightness, alpha) {
    this.hue = hue;
    this.saturation = saturation;
    this.lightness = lightness;
    this.alpha = alpha;
    this.hsl = `hsla(${this.hue}, ${this.saturation}%, ${this.lightness}%, ${this.alpha})`;
  }

  getNewHue(value) {
    const newHsl = `hsla(${value}, ${this.saturation}%, ${this.lightness}%, ${this.alpha})`;
    return newHsl;
  }

  getNewSaturation(value) {
    const newHsl = `hsla(${this.hue}, ${value}%, ${this.lightness}%, ${this.alpha})`;
    return newHsl;
  }

  getNewAlpha(value) {
    const newHsl = `hsla(${this.hue}, ${this.saturation}%, ${this.lightness}%, ${value})`;
    return newHsl;
  }

  lighten(value) {
    let newLightness = this.lightness + value;
    const newHsl = `hsla(${this.hue}, ${this.saturation}%, ${newLightness}%, ${this.alpha})`
    return newHsl;
  }

  darken(value) {
    let newLightness = this.lightness - value;
    const newHsl = `hsla(${this.hue}, ${this.saturation}%, ${newLightness}%, ${this.alpha})`
    return newHsl;
  }

  opacity(value) {
    let newAlpha = value;
    const newHsl = `hsla(${this.hue}, ${this.saturation}%, ${this.lightness}%, ${newAlpha})`
    return newHsl;
  }

  setNewHue(value) {
    this.hue = value;
    this.hsl = `hsla(${value}, ${this.saturation}%, ${this.lightness}%, ${this.alpha})`;
  }

  setNewSaturation(value) {
    this.saturation = value;
    this.hsl = `hsla(${this.hue}, ${value}%, ${this.lightness}%, ${this.alpha})`;
  }

  setNewLightness(value) {
    this.lightness = value;
    this.hsl = `hsla(${this.hue}, ${this.saturation}%, ${value}%, ${this.alpha})`;
  }

  setNewAlpha(value) {
    this.lightness = value;
    this.hsl = `hsla(${this.hue}, ${this.saturation}%, ${this.lightness}%, ${value})`;
  }
}

export default Color;