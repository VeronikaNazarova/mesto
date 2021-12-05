export default class UserInfo {
  constructor({nameSelector, descriptionSelector, avatarSelector}) {
    this._nameElement = document.querySelector(nameSelector);
    this._descriptionElement = document.querySelector(descriptionSelector);
    this._name = null;
    this._about = null;
    this._avatar = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      about: this._descriptionElement.textContent
    }
  }
  setUserInfo({name, about}) {
    this._nameElement.textContent = name;
    this._descriptionElement.textContent = about;

  }

  setAvatar(avatar) {
    if(avatar) {
      this._avatar.src = `${avatar}`;
    }
    else {
      console.log('err')
    }
  }
}