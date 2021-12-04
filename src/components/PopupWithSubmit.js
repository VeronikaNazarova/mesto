import Popup from './Popup.js';

export default class PopupWithSubmit extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._submitHundler = null;
    this._form = this._popup.querySelector('.popup__form');
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

}
