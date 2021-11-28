
export default class Section {
  constructor({ renderer }, containerSelector) {

    this.renderer = renderer;
    this._containerSelector = containerSelector;
  }

  renderItems(items) {
    items.forEach((item) => {
      this.renderer(item); 
    });
  }

  addItem(element) {
    this._containerSelector.append(element);
  }
}