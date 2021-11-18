import "../../pages/index.css";

//from components
import Card from "../components/Card.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";
import {configClassValidate} from "../components/FormValidator.js";

//from utils
import {initialCards, cardItem, formAdd, popupAdd, profilePopup, buttonEdit, buttonAdd, popupPhoto} from "../utils/constants.js";


//popupWithImage

const popupWithImage = new PopupWithImage(popupPhoto);

popupWithImage.setEventListeners();

//CARD

function handleCardOpen(link, name) {
  popupWithImage.openModal(link, name);
}


function createCard(item) {
  return new Card(item, '.template', handleCardOpen).render();
}



const createCardDomNode = (evt) => {
  evt.preventDefault();
  const data = {
    name: document.querySelector('.popupAdd__input-name').value,
    link: document.querySelector('.popupAdd__input-image').value
  }
  cardList.addItem(createCard(data));
  evt.currentTarget.reset();
  userAddPopup.closeModal();
 } 

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const newCard = createCard(item);
    cardList.addItem(newCard);
  },
},
cardItem);

formAdd.addEventListener('submit', createCardDomNode);

cardList.renderItems();

//userInfo

const userInfo = new UserInfo({nameSelector: '.profile__title', descriptionSelector: '.profile__subtitle'});

userInfo.setUserInfo({name: 'Жак-Ив Кусто', description: 'Исследователь океана'});

userInfo.updateUserInfo();

const userProfilePopup = new PopupWithForm(profilePopup, userFormSubmit);
const userAddPopup = new PopupWithForm(popupAdd, cardFormSubmit);

function userFormSubmit(data) {
  userInfo.setUserInfo(data);
  userInfo.updateUserInfo();
  userProfilePopup.closeModal();
}


function cardFormSubmit() {
  cardList.addItem(createCard(item));
  userAddPopup.closeModal();
  formValidatorAdd.disableButton();
}

buttonEdit.addEventListener('click', function() {
  userProfilePopup.openModal();
})

buttonAdd.addEventListener('click', function() {
  userAddPopup.openModal();
  formValidatorAdd.disableButton();
})

userProfilePopup.setEventListeners();
userAddPopup.setEventListeners();


//validate
const formValidator = new FormValidator(configClassValidate, '.popup__container');
const formValidatorAdd = new FormValidator(configClassValidate, '.popupAdd__container');

formValidator.enableValidation();
formValidatorAdd.enableValidation();


