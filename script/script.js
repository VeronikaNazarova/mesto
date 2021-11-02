
import {Card} from "./Card.js";
//import {configClassValidate, FormValidator} from "./FormValidator.js";

const initialCards = [
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


const cardItem = document.querySelector('.elements');
const buttonEdit = document.querySelector('.profile__button-edit');
const popupClose = document.querySelector('.popup__icon');
const profilePopup = document.querySelector('.overlay');
const popup = document.querySelector('.popup');
const popupOpen = document.querySelector('.popup_opened');
const popupInputName = document.querySelector('[name=name]');
const popupInputDescription = document.querySelector('[name=description]');
const profileTitle = document.querySelector('.profile__title');
const profileSubTitle = document.querySelector('.profile__subtitle');
const formElement = document.querySelector('[name="popup-form"]');

const buttonAdd = document.querySelector('.profile__button-add');
const popupAdd = document.querySelector('.popupAdd');
const popupAddClose = document.querySelector('.popupAdd__icon');
const formAdd = document.querySelector('[name="popupAdd-form"]');
const templateElement = document.querySelector('.template');
const popupImg = document.querySelector('.popup-photo');
const popupImgInner = document.querySelector('.popup-img__inner');
const textPopupWithImg = document.querySelector('.popup-img__title');
const inputAddName = formAdd.querySelector('.popupAdd__input-name');
const inputAddImage = formAdd.querySelector('.popupAdd__input-image');
const buttonSubmitAdd = formAdd.querySelector('.popupAdd__button');
const popupImgClose = document.querySelector('.popup-img__icon');
const overlayPopup = document.querySelector('.overlay');
const overlayAddPopup = document.querySelector('.overlayAdd');
const overlayPhotoPopup = document.querySelector('.overlay-photo');



function closeModal(modal) {
  modal.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
}

function openModal(modal) {
  modal.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
}

buttonEdit.addEventListener('click', function() {
  const title = profileTitle.innerText;
  const subtitle = profileSubTitle.innerText; 
  popupInputName.value = title;
  popupInputDescription.value = subtitle;
  openModal(profilePopup);
})

popupClose.addEventListener('click', function() {
  closeModal(profilePopup);
})

formElement.addEventListener('submit', function(e) {
  e.preventDefault();
  const inputName = popupInputName.value;
  const inputDescription = popupInputDescription.value;
  profileTitle.innerText = inputName;
  profileSubTitle.innerText = inputDescription;
  closeModal(profilePopup);

})

 buttonAdd.addEventListener('click', function() {
   //toggleButtonState(buttonSubmitAdd, true, configClassValidate);
   openModal(popupAdd);
 })

popupAddClose.addEventListener('click', function() {
  closeModal(popupAdd);
})

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened')
    closeModal(openedPopup);
  }
}

function togglePopup(overlay) {
  if (overlay.classList.contains('popup_opened')) {}

  overlay.focus();
  closeModal(overlay);
}

overlayPopup.addEventListener('click', function() {
  togglePopup(overlayPopup);
});

overlayAddPopup.addEventListener('click', function() {
  togglePopup(overlayAddPopup);
});

overlayPhotoPopup.addEventListener('click', function() {
  togglePopup(overlayPhotoPopup);
});

function stopOverlay(evt) {
  evt.stopPropagation();
}

document.querySelector('.popup__container').addEventListener('click', stopOverlay);

document.querySelector('.popupAdd__container').addEventListener('click', stopOverlay);

document.querySelector('.popup-img').addEventListener('click', stopOverlay);

//начальные карточки
initialCards.forEach(function(item) {
  const card = new Card(item, '.template').render();
  cardItem.append(card);
});

// //новый карточки
const createCardDomNode = (evt) => {
 evt.preventDefault();
 const data = {
   name: document.querySelector('.popupAdd__input-name').value,
   link: document.querySelector('.popupAdd__input-image').value
 }
 const card = new Card(data, '.template').render();
 cardItem.prepend(card);
 evt.currentTarget.reset();
 closeModal(popupAdd);
} 

formAdd.addEventListener('submit', createCardDomNode);

 

//validate
const formValidator = new FormValidator(configClassValidate, '.popup__container');
const formValidatorAdd = new FormValidator(configClassValidate, '.popupAdd__container');

formValidator.enableValidation();
formValidatorAdd.enableValidation();