export class Card {
  
  constructor(initialCards, templateSelector) {
    this._initialCards = initialCards;
    this._templateSelector = templateSelector;
    this._element = null;
  }

  _getTemplate() {
    // забираем разметку из HTML и клонируем элемент
      const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);
      
    // вернём DOM-элемент карточки
      return cardElement;
  } 

  render() {
    // Запишем разметку в приватное поле _element. 
    // Так у других элементов появится доступ к ней.
    this._element = this._getTemplate();
    this._setEventListeners();
  
    // Добавим данные
    this._element.querySelector('.element__image').src = this._initialCards.link;
    this._element.querySelector('.element__title').textContent = this._initialCards.name;
  
    // Вернём элемент наружу
    return this._element;
  } 

  _setEventListeners() {
    this._element.querySelector('.element__like').addEventListener('click', () => {
      this._handleCardClick();
    });
    this._element.querySelector('.element__delete').addEventListener('click', () => {
      this._handleCardDelete();
    });
    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._handleCardDelete();
    });
  }

  _handleCardClick() {
    this._element.querySelector('.element__like').classList.toggle('.element__like_active');
  }

  _handleCardDelete() {
    this._element.querySelector('.element__delete').target.closest('.element').remove();
  }
}