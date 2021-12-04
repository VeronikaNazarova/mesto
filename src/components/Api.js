
function onResponce(res) {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res}`);
}

export default class Api {
  constructor({url, headers}) {
    this._url = url;
    this._headers = headers;
  }


  getCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers
    })
    .then(onResponce)
  }

  addCard(dataCard) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: dataCard.name,
        link: dataCard.image
      })
    })
    .then(onResponce)
  }

  removeCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(onResponce)
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers
    })
    .then(onResponce)
  }

  setCardLike(cardId) {
    return fetch(`${this._url}/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: this._headers
    })
    .then(onResponce)
  }

  removeCardLike(cardId) {
    return fetch(`${this._url}/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    })
    .then(onResponce)
  }

  patchUserInfo(dataInfo) {
    
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: dataInfo.name,
        about: dataInfo.description
      })
    })
    .then(onResponce)
  }

  patchAvatar({avatar}) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: `${avatar}`
      })
    })
    .then(onResponce)
  }


}