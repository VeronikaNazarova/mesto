class FormValidator {
  static _template = document.querySelector(".template");

  constructor() {

  }

  render(container) {
    this._view = FormValidator._template.cloneNode(true);
  }
}