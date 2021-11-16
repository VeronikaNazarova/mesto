
export default class Card {
  
  constructor(data, template, handle) {
    this._name = data.name;
    this._link = data.link;
    this._template = template;
    this.handle = handle;
  }
  _getTemplate() {
    // забираем разметку из HTML и клонируем элемент
      const cardElement = document
      .querySelector(this._template)
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
    this._image = this._element.querySelector('.element__image');
    this._title = this._element.querySelector('.element__title');
    this._like = this._element.querySelector('.element__like');
    this._delete = this._element.querySelector('.element__delete');
    this._elementLink = this._element.querySelector('.element__link');

    this._image.src = this._link;
    this._image.alt = this._name;
    this._title.textContent = this._name;

    // Вернём элемент наружу
    return this._element;
  } 

  _setEventListeners() {
    this._like.addEventListener('click', () => {
      this._handleCardClick();
    });
    this._delete.addEventListener('click', () => {
      this._handleCardDelete();
    });
    this._elementLink.addEventListener('click', () => {
      this.handle(this._link, this._name);
    });
  }

  _handleCardClick() {
    this._like.classList.toggle('element__like_active');
  }

  _handleCardDelete() {
    this._delete.closest('.element').remove();
  }
}