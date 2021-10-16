const allInputsEmpty = (inputList) => {
  return !inputList.some(inputElement => inputElement.value.length > 0);
};

const hasInvalidInput = (inputList) => {
   return inputList.some(inputElement => !inputElement.validity.valid);
};


const toggleButtonState = (buttonElement, isNotValidateInputs, {inactiveButtonClass}) => {
  if (isNotValidateInputs) {
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }
};

const showInputError = (formElement, inputElement, {inputErrorClass, errorClass}) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(errorClass);
};

const hideInputError = (formElement, inputElement, {inputErrorClass, errorClass}) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.textContent = inputElement.validationMessage.remove;
  errorElement.classList.remove(errorClass);
};       

const checkInput = (formElement, inputElement, rest) => {
  if (inputElement.validity.valid) {
    hideInputError(formElement, inputElement, rest);
  } else {
    showInputError(formElement, inputElement, rest);
  }
};
 
const setInputListeners = (formElement, {inputSelector, submitButtonSelector, ...rest}) => {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);

  inputList.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      checkInput(formElement, inputElement, rest);
      const isNotValidateInputs = hasInvalidInput(inputList) || allInputsEmpty(inputList);
      toggleButtonState(buttonElement, isNotValidateInputs, rest);
    });
  });
};

const enableValidation = ({formSelector, ...rest}) => {
  const formList = Array.from(document.querySelectorAll(formSelector));
  
  formList.forEach(formElement => {
    const buttonElement = formElement.querySelector(rest.submitButtonSelector);
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setInputListeners(formElement, rest);

    toggleButtonState(buttonElement, formElement.checkValidity(), rest);
  });
};

const configClassValidate = {
  formSelector: 'form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_invalid',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error'
};

enableValidation(configClassValidate);
