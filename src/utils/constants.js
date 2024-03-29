export const cardItem = document.querySelector('.elements');
export const popupPhoto = document.querySelector('.popup-photo');
export const buttonEdit = document.querySelector('.profile__button-edit');
export const profilePopup = document.querySelector('.popup_profile');
export const popupInputName = document.querySelector('[name=name]');
export const popupInputDescription = document.querySelector('[name=description]');
export const popupInputAvatar = document.querySelector('[name=avatar]');

export const buttonAdd = document.querySelector('.profile__button-add');
export const linkAvatar = document.querySelector('.avatar');
export const imgAvatar = document.querySelector('.avatar-hover');
export const popupAdd = document.querySelector('.popupAdd');
export const popupAvatar = document.querySelector('.popup-avatar');
export const formAdd = document.querySelector('[name="popupAdd-form"]');
export const popupDelete = document.querySelector('.popup-delete');

export const configClassValidate = {
  formSelector: 'form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_invalid',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error'
};

export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

