export default class UserInfo {
  constructor({nameSelector, descriptionSelector}) {
    this._nameElement = document.querySelector(nameSelector);
    this._descriptionElement = document.querySelector(descriptionSelector);
    this._name = null;
    this._description = null;
  }

  getUserInfo() {
    return {
      name: this._name,
      description: this._description
    }
  }
  setUserInfo({name, description}) {
    this._name = name;
    this._description = description;
  }

  updateUserInfo() {
    this._nameElement.textContent = this._name;
    this._descriptionElement.textContent = this._description;
  }
}