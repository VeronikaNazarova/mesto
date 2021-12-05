import Popup from './Popup.js';

export default class PopupWithSubmit extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._submitHundler = null;
    this._form = this._popup.querySelector('.popup__form');
    this._buttonSelector = this._popup.querySelector('.popup__button');
  }

  addAction(action){
    this._submitHundler = action;
  }

  setEventListeners() {
    super.setEventListeners();
    
    this._form.addEventListener("submit", (e) => {
      e.preventDefault();
      this._submitHundler();
    });
  }

  renderLoading(isLoading) {
    if(isLoading) {
      this._buttonSelector.textContent = "Сохранение...";
    }
    else {
      this._buttonSelector.textContent = "Да";
    }
  }
}
