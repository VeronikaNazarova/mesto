
let buttonEdit = document.querySelector('.profile__button-edit');
let popupClose = document.querySelector('.popup__icon');
let popup = document.querySelector('.popup');
let popupOpen = document.querySelector('.popup_opened');
let popupInputName = document.querySelector('[name=name]');
let popupInputDescription = document.querySelector('[name=description]');
let profileTitle = document.querySelector('.profile__title');
let profileSubTitle = document.querySelector('.profile__subtitle');

buttonEdit.addEventListener('click', function() {
  let title = profileTitle.innerText;
  let subtitle = profileSubTitle.innerText; 
  popupInputName.value = title;
  popupInputDescription.value = subtitle;
  popup.classList.add('popup_opened');
})


popupClose.addEventListener('click', function() {
  popup.classList.remove('popup_opened');
})

let formElement = document.querySelector('.popup__container');
formElement.addEventListener('submit', function(e) {
  e.preventDefault();
  let inputName = popupInputName.value;
  let inputDescription = popupInputDescription.value;
  profileTitle.innerText = inputName;
  profileSubTitle.innerText = inputDescription;
  popup.classList.remove('popup_opened');

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

const elements = document.querySelector('.elements');
const buttonAdd = document.querySelector('.profile__button-add');
const popupAdd = document.querySelector('.popupAdd');
const popupAddClose = document.querySelector('.popupAdd__icon');
const popupAddOpen = document.querySelector('.popupAdd_opened');
const formAdd = document.querySelector('.popupAdd__container');
const templateElement = document.querySelector('.template');

buttonAdd.addEventListener('click', function() {
  popupAdd.classList.add('popupAdd_opened');
})

popupAddClose.addEventListener('click', function() {
  popupAdd.classList.remove('popupAdd_opened');
})


function deleteTaskHandler(e) {
  e.target.closest('.element').remove();
}

function addTaskListeners(task) {
  const deleteButton = task.querySelector('.element__delete');
  deleteButton.addEventListener('click', deleteTaskHandler);
}

function createTaskDomNode(item){
  const newItem = templateElement.content.cloneNode(true);
  const title = newItem.querySelector('.element__title');
  const image = newItem.querySelector('.element__image');

  const likeElement = newItem.querySelector('.element__like');
    likeElement.addEventListener('.click', function() {
      likeElement.classList.toggle('element__like_active');
      });
  image.src = item.link;
  title.textContent = item.name;
  
  const popupImgInner = document.querySelector('.popup-img__inner');
  const popupImg = document.querySelector('.popup-photo');
  image.addEventListener('click', function(e) {
    popupImgInner.src = e.target.src;
      popupImg.classList.add('popup-img_opened');
      })

  return newItem;
}

function renderList() {
  const result = initialCards.map(function(item) {
    const newTask = createTaskDomNode(item);
    addTaskListeners(newTask);
    return newTask;
    
  });

  

  elements.append(...result);
}

function addTaskForm(e) {
  e.preventDefault();
  const inputAddName = formAdd.querySelector('.popupAdd__input-name');
  const inputAddImage = formAdd.querySelector('.popupAdd__input-image');

  const inputAddTitle = inputAddName.value;
  const inputAddPhoto = inputAddImage.value;
  const newTask = createTaskDomNode({ name: inputAddTitle, link: inputAddPhoto });
  
  addTaskListeners(newTask);
  elements.prepend(newTask);
  inputAddName.value = '';
  popupAdd.classList.remove('popupAdd_opened');
}

renderList();

formAdd.addEventListener('submit', addTaskForm);





