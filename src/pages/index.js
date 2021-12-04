import "./index.css";

//from components
import Card from "../components/Card.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithSubmit from "../components/PopupWithSubmit.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";
import { configClassValidate } from "../components/FormValidator.js";
import Api from "../components/Api";

//from utils
import {popupDelete, imgAvatar, popupInputAvatar, linkAvatar, popupAvatar, popupInputDescription, popupInputName, initialCards, cardItem, formAdd, popupAdd, profilePopup, buttonEdit, buttonAdd, popupPhoto } from "../utils/constants.js";


//Api

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-30',
  headers: {
    'Content-Type': 'application/json',
    authorization: '8acb5e14-6e2d-47f9-983e-a8a675078a70',
  }
})

export let userId = null;

Promise.all([api.getCards(), api.getUserInfo()])
  .then(([dataCards, dataUser]) => {
    userId = dataUser._id;
    cardList.renderItems(dataCards);
    userInfo.setUserInfo(dataUser);
  })


//popupWithImage

const popupWithImage = new PopupWithImage(popupPhoto);

popupWithImage.setEventListeners();



//CARD

function handleCardClick(link, name) {
  popupWithImage.openModal(link, name);
}

function handleLikeClick (card) {
  if(card.isLiked()){
    api.removeCardLike(card.id)
    .then(dataCard => card.setLikes(dataCard.likes))
  }
  else {
    api.setCardLike(card.id)
    .then(dataCard => card.setLikes(dataCard.likes))
  }
  
}

const cardDeletePopup = new PopupWithSubmit(popupDelete);

function handleCardDelete(card){
  cardDeletePopup.openModal();
  cardDeletePopup.addAction(() => {
    api.removeCard(card.id)
      .then(() => {
        card.removeCard();
        cardDeletePopup.closeModal()
      })
  })
}

const  createCard = (data) => {
  return new Card({data: {...data, realUserId: userId},
     handleCardClick, handleLikeClick, handleCardDelete}, '.template').render();
}

const cardList = new Section(
  {
    renderer: (item) => {
      const newCard = createCard(item);
      cardList.addItem(newCard);
    }
  },
  cardItem);



//userInfo

const userInfo = new UserInfo({ nameSelector: '.profile__title', 
descriptionSelector: '.profile__subtitle', 
avatarSelector: '.profile__avatar' });


userInfo.updateUserInfo();

function submitUserForm(dataUser) {
  userProfilePopup.loading(true);
  api.patchUserInfo(dataUser)
  .then( (data) => {
    return userInfo.setUserInfo(data)
  })
  .finally(()=> {
    userProfilePopup.loading(false);
  })
  .catch(function (err) {
    console.log(err);
  });
    userProfilePopup.closeModal();
  }


const userProfilePopup = new PopupWithForm(profilePopup, submitUserForm);
const userAddPopup = new PopupWithForm(popupAdd, submitCardForm);


function submitCardForm(dataCard) {
  userAddPopup.loading(true);
  api.addCard(dataCard)
    .then((dataNewCard)=> {
      const newCard = createCard(dataNewCard);
      cardList.addItem(newCard);  
      userAddPopup.closeModal();
      formValidatorAdd.disableButton();
    })
  }

const userAvatarPopup = new PopupWithForm(popupAvatar, submitAvatarForm);


function submitAvatarForm(data) {
  userAvatarPopup.loading(true);
  api.patchAvatar(data)
  .then((responce) => {
    return userInfo.setAvatar(responce.avatar);
  })
  .finally(() => {
    userAvatarPopup.loading(false)
  })
    userAvatarPopup.closeModal();
  
}

buttonEdit.addEventListener('click', function () {
  const dataUser = userInfo.getUserInfo();
  popupInputName.value = dataUser.name;
  popupInputDescription.value = dataUser.about;
  userProfilePopup.openModal();
  
})

buttonAdd.addEventListener('click', function () {
  formValidatorAdd.disableButton();
  userAddPopup.openModal();

})

linkAvatar.addEventListener('click', function () {
  formValidatorAvatar.disableButton();
  userAvatarPopup.openModal();

})


userAvatarPopup.setEventListeners();
userProfilePopup.setEventListeners();
userAddPopup.setEventListeners();
cardDeletePopup.setEventListeners();



//validate
const formValidator = new FormValidator(configClassValidate, '.popup__container');
const formValidatorAdd = new FormValidator(configClassValidate, '.popupAdd__container');
const formValidatorAvatar = new FormValidator(configClassValidate, '.popup__avatar');

formValidator.enableValidation();
formValidatorAdd.enableValidation();
formValidatorAvatar.enableValidation();

