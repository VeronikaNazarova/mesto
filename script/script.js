
let buttonEdit = document.querySelector('.profile__button-edit');
let popupClose = document.querySelector('.popup__icon');
let popup = document.querySelector('.popup');
let popupOpen = document.querySelector('.popup_opened');
let popupInputName = document.querySelector('[name=name]');
let popupInputDescription = document.querySelector('[name=description]');
let profileTitle = document.querySelector('.profile__title');
let profileSubTitle = document.querySelector('.profile__subtitle');

buttonEdit.addEventListener= function() {
  let title = profileTitle.innerText;
  let subtitle = profileSubTitle.innerText; 
  popupInputName.value = title;
  popupInputDescription.value = subtitle;
  popup.classList.add('popup_opened');
}

popupClose.addEventListener = function() {
  popup.classList.remove('popup_opened');
}

let formElement = document.querySelector('form');
formElement.addEventListener('submit', function(e) {
  e.preventDefault();
  let inputName = popupInputName.value;
  let inputDescription = popupInputDescription.value;
  profileTitle.innerText = inputName;
  profileSubTitle.innerText = inputDescription;
  popup.classList.remove('popup_opened');

})