import "./index.css";

//from components
import Card from "../components/Card.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";
import {configClassValidate} from "../components/FormValidator.js";

//from utils
import {popupInputDescription, popupInputName, initialCards, cardItem, formAdd, popupAdd, profilePopup, buttonEdit, buttonAdd, popupPhoto} from "../utils/constants.js";


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


const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const newCard = createCard(item);
    cardList.addItem(newCard);
  },
},
cardItem);


cardList.renderItems();

//userInfo

const userInfo = new UserInfo({nameSelector: '.profile__title', descriptionSelector: '.profile__subtitle'});

userInfo.setUserInfo({name: 'Жак-Ив Кусто', description: 'Исследователь океана'});

userInfo.updateUserInfo();

const userProfilePopup = new PopupWithForm(profilePopup, submitUserForm);
const userAddPopup = new PopupWithForm(popupAdd, submitCardForm);

function submitUserForm(data) {
  userInfo.setUserInfo(data);
  userInfo.updateUserInfo();
  userProfilePopup.closeModal();
}


function submitCardForm({name, image}) {
  const newCard = createCard({
    name,
    link: image
  });
  cardList.addItem(newCard);
  userAddPopup.closeModal();
  formValidatorAdd.disableButton();
  formAdd.reset();
}

buttonEdit.addEventListener('click', function() {
  const dataUser = userInfo.getUserInfo();
  popupInputName.value = dataUser.name;
  popupInputDescription.value = dataUser.description;
  userProfilePopup.openModal();
})

buttonAdd.addEventListener('click', function() {
  formValidatorAdd.disableButton();
  userAddPopup.openModal();
  
})

userProfilePopup.setEventListeners();
userAddPopup.setEventListeners();


//validate
const formValidator = new FormValidator(configClassValidate, '.popup__container');
const formValidatorAdd = new FormValidator(configClassValidate, '.popupAdd__container');

formValidator.enableValidation();
formValidatorAdd.enableValidation();


