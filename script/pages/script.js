import "../../pages/index.css";

//from components
import Card from "../components/Card.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";

//from utils
import {popupPhoto, initialCards, cardItem, formAdd, popupAdd, profileTitle, profileSubTitle, buttonEdit, buttonAdd} from "../utils/constants.js";


//popupWithImage

const popupWithImage = new PopupWithImage(popupPhoto);

popupWithImage.setEventListeners();

//CARD

function handleCardOpen() {
  popupWithImage.openModal();
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
  closeModal(popupAdd);
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

const userInfo = new UserInfo({nameSelector: profileTitle, descriptionSelector: profileSubTitle});

userInfo.setUserInfo({name: 'Жак-Ив Кусто', description: 'Исследователь океана'});

userInfo.updateUserInfo();

const userProfilePopup = new PopupWithForm(profilePopup, userFormSubmit);
const userAddPopup = new PopupWithForm(popupAdd, cardFormSubmit);

function userFormSubmit(data) {
  userInfo.setUserInfo(data);
  userInfo.updateUserInfo();
  userProfilePopup.closeModal();
}

function cardFormSubmit({name, image}) {
createCard({
   name,
   link: image
  });
  cardList.addItem(createCard(data));
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


