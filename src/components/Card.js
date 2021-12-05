
export default class Card {
  
  constructor({data, handleCardClick, handleLikeClick, handleCardDelete}, template) {
    this._data = data;
    this._likes = data.likes;
    this._name = data.name;
    this._link = data.link;
    this.id = data._id;
    this._realUserId = data.realUserId;
    
    this.handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleCardDelete = handleCardDelete;

    this._template = template;
  }
  _getTemplate() {
    // забираем разметку из HTML и клонируем элемент
      const cardElement = document
      .querySelector(this._template)
      .content
      .querySelector('.element')
      .cloneNode(true);

      if(this._data.owner._id === this._realUserId) {
        console.log(this._data.owner._id)
      }
      else {
        cardElement.querySelector('.element__delete').classList.add('element__delete_remove');
      }
      
    // вернём DOM-элемент карточки
      return cardElement;
  } 

  render() {
    // Запишем разметку в приватное поле _element. 
    // Так у других элементов появится доступ к ней.
    this._element = this._getTemplate();
    this._setEventListeners();
    this._updateLikesView();
    
    
  
    // Добавим данные
    this._image = this._element.querySelector('.element__image');
    this._title = this._element.querySelector('.element__title');

    this._image.src = this._link;
    this._image.alt = this._name;
    this._title.textContent = this._name;

    if(this._data.likes.length > 0) {
      this._element.querySelector('.element__number').textContent = this._data.likes.length;
    }
    else {
      this._element.querySelector('.element__number').textContent = 0;
    }

    // Вернём элемент наружу
    return this._element;
  } 

  _setEventListeners() {
    this._element.querySelector('.element__like').addEventListener('click', () => {
      this._handleLikeClick(this);
    });
    this._element.querySelector('.element__delete').addEventListener('click', () => {
      this._handleCardDelete(this);
    });
    this._element.querySelector('.element__link').addEventListener('click', () => {
      this.handleCardClick(this._link, this._name);
    });
    
  }

  isLiked() {
    return this._likes.some(user => user._id === this._realUserId)
  }

  setLikes(dataLikes) {
    this._likes = dataLikes;
    if(dataLikes) {
      this._element.querySelector('.element__number').textContent = dataLikes.length;
    }
    this._updateLikesView();
  }

  _updateLikesView() {
    if(!this.isLiked()){
      this._element.querySelector('.element__like').classList.remove('element__like_active');
    }
    else {
      this._element.querySelector('.element__like').classList.add('element__like_active');
    }
  }


  removeCard() {
    this._element.remove();
    this._element = null
  }
}
