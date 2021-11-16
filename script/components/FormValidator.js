const configClassValidate = {
    formSelector: 'form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_invalid',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error'
  };

export default class FormValidator {
  constructor(config, formElementSelector) {
      this._config = config;
      this._formElement = document.querySelector(formElementSelector);
      this._inputSelector = config.inputSelector;
      this._submitButtonSelector = config.submitButtonSelector;
      this._inactiveButtonClass = config.inactiveButtonClass;
      this._inputErrorClass = config.inputErrorClass;
      this._errorClass = config.errorClass;

      this._inputsList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
      this._submitButton = this._formElement.querySelector(this._submitButtonSelector);
  }

  _toggleButtonState = () => {
    const formIsValid = this._inputsList.some((inputElement) => {
        return !inputElement.validity.valid;
   })
    if (formIsValid) {
        this.disableButton();
    }
    else {
        this._submitButton.classList.remove(this._inactiveButtonClass);
       this._submitButton.removeAttribute('disabled');
    }
  } 
  
  disableButton = () => {
    this._submitButton.classList.add(this._inactiveButtonClass);
    this._submitButton.setAttribute('disabled', true);
  }

  _setInputListeners = () => {
    this._toggleButtonState();
    this._inputsList.forEach(inputElement => {
        inputElement.addEventListener('input', () => {
            this._checkInput(inputElement);
            this._toggleButtonState();
        })
    })
    this._formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
    })
    }

  _showInputError = (errorElement, inputElement) => {
      errorElement.textContent = inputElement.validationMessage;
      errorElement.classList.add(this._errorClass);
      inputElement.classList.add(this._inputErrorClass);
  }
  _hideInputError = (errorElement, inputElement) => {
      errorElement.textContent = '';
      errorElement.classList.remove( this._errorClass);
      inputElement.classList.remove( this._inputErrorClass);
  }
  _checkInput = (inputElement) => {
      const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
      if (!inputElement.validity.valid) {
          this._showInputError(errorElement, inputElement);
      } else {
          this._hideInputError(errorElement, inputElement);
      }
  }
  
  
  enableValidation = () => {
      this._setInputListeners();
  }
}
