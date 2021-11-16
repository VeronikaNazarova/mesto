import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popup.querySelector('.popup-img__inner');
    this._title = this._popup.querySelector('.popup-img__title');
  }

  openModal(src, text) {
    this._image.src = src;
    this._image.alt = text;
    this._title.textContent = text;

    super.openModal();
  }
}