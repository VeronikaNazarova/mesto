
export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._initialCards = items;
    this.renderer = renderer;
    this._containerSelector = document.querySelector(containerSelector);
  }

  renderItems() {
    this._initialCards.forEach((item) => {
      this.renderer(item); 
    });
  }

  addItem(element) {
    this._containerSelector.append(element);
  }
}