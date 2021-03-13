
const buttonEdit = document.querySelector('.profile__button-edit');
const popupClose = document.querySelector('.popup__icon');
const popup = document.querySelector('.popup');
const popupOpen = document.querySelector('.popup_opened');
const popupInputName = document.querySelector('[name=name]');
const popupInputDescription = document.querySelector('[name=description]');
const profileTitle = document.querySelector('.profile__title');
const profileSubTitle = document.querySelector('.profile__subtitle');
const formElement = document.querySelector('.popup__container');

const elements = document.querySelector('.elements');
const buttonAdd = document.querySelector('.profile__button-add');
const popupAdd = document.querySelector('.popupAdd');
const popupAddClose = document.querySelector('.popupAdd__icon');
const formAdd = document.querySelector('.popupAdd__container');
const templateElement = document.querySelector('.template');
const popupImg = document.querySelector('.popup-photo');
const popupImgInner = document.querySelector('.popup-img__inner');
const inputAddName = formAdd.querySelector('.popupAdd__input-name');
const inputAddImage = formAdd.querySelector('.popupAdd__input-image');
const popupImgClose = document.querySelector('.popup-img__icon');

function closeModal(modal) {
  modal.classList.remove('popup_opened');
}

function openModal(modal) {
  modal.classList.add('popup_opened');
}

buttonEdit.addEventListener('click', function() {
  const title = profileTitle.innerText;
  const subtitle = profileSubTitle.innerText; 
  popupInputName.value = title;
  popupInputDescription.value = subtitle;
  openModal(popup);
})

popupClose.addEventListener('click', function() {
  closeModal(popup);
})

formElement.addEventListener('submit', function(e) {
  e.preventDefault();
  const inputName = popupInputName.value;
  const inputDescription = popupInputDescription.value;
  profileTitle.innerText = inputName;
  profileSubTitle.innerText = inputDescription;
  closeModal(popup);

})

buttonAdd.addEventListener('click', function() {
  openModal(popupAdd);
})

popupAddClose.addEventListener('click', function() {
  closeModal(popupAdd);
})

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


function deleteCardHandler(e) {
  e.target.closest('.element').remove();
}

function addCardListeners(card) {
  const deleteButton = card.querySelector('.element__delete');
  deleteButton.addEventListener('click', deleteCardHandler);
}

function createCardDomNode(item){
  const newItem = templateElement.content.cloneNode(true);
  const title = newItem.querySelector('.element__title');
  const image = newItem.querySelector('.element__image');

  const likeElement = newItem.querySelector('.element__like');
    likeElement.addEventListener('click', function() {
      likeElement.classList.toggle('element__like_active');
      });
  image.src = item.link;
  title.textContent = item.name;
  
  image.addEventListener('click', function(e) {
    e.preventDefault();
    popupImgInner.src = e.target.src;
      popupImg.classList.add('popup-img_opened');
      })

  return newItem;
}

function renderList() {
  const result = initialCards.map(function(item) {
    const newCard = createCardDomNode(item);
    addCardListeners(newCard);
    return newCard;
  });
  
  elements.append(...result);
}

popupImgClose.addEventListener('click', function() {
  popupImg.classList.remove('popup-img_opened');
})

function addCardForm(e) {
  e.preventDefault();
  

  const inputAddTitle = inputAddName.value;
  const inputAddPhoto = inputAddImage.value;
  const newCard = createCardDomNode({ name: inputAddTitle, link: inputAddPhoto });
  
  addCardListeners(newCard);
  elements.prepend(newCard);
  inputAddName.value = '';
  popupAdd.classList.remove('popup_opened');
}

renderList();

formAdd.addEventListener('submit', addCardForm);





