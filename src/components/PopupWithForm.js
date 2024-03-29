import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitHandler) {
    super(popupSelector);
    this._submitHundler = submitHandler;
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = this._popup.querySelectorAll('.popup__input');
    this._buttonSelector = this._popup.querySelector('.popup__button');
  }

  closeModal() {
    super.closeModal();
    this._form.reset();
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach((element) => {
      this._formValues[element.name] = element.value;
    });
    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", () => {
      this._submitHundler(this._getInputValues());
    });
  }

  renderLoading(isLoading) {
    if(isLoading) {
      this._buttonSelector.textContent = "Сохранение...";
    }
    else {
      this._buttonSelector.textContent = "Сохраненить";
    }
  }

}
