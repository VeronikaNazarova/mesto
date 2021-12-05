
export default class Section {
  constructor({ renderer }, container) {

    this.renderer = renderer;
    this._container = container;
  }

  renderItems(items) {
    items.forEach((item) => {
      this.renderer(item); 
    });
  }

  addItem(element) {
    this._container.prepend(element);
  }
}