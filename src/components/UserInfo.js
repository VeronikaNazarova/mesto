export default class UserInfo {
  constructor({nameSelector, descriptionSelector}, avatarUser) {
    this._nameElement = document.querySelector(nameSelector);
    this._descriptionElement = document.querySelector(descriptionSelector);
    this._name = null;
    this._about = null;
    this._avatarUser = document.querySelector('.profile__avatar');
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      about: this._descriptionElement.textContent,
      avatar: this._avatar
    }
  }
  setUserInfo({name, about, avatar}) {
    this._nameElement.textContent = name;
    this._descriptionElement.textContent = about;
    this._avatar = avatar;

  }

  updateUserInfo() {
    this._nameElement.textContent = this._name;
    this._descriptionElement.textContent = this._description;
  }

  setAvatar(avatar) {
    if(avatar) {
      this._avatarUser.src = `${avatar}`;
    }
    else {
      console.log('err')
    }
  }
}