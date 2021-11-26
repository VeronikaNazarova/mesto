(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._template=n,this.handle=r}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._template).content.querySelector(".element").cloneNode(!0)}},{key:"render",value:function(){return this._element=this._getTemplate(),this._setEventListeners(),this._image=this._element.querySelector(".element__image"),this._title=this._element.querySelector(".element__title"),this._image.src=this._link,this._image.alt=this._name,this._title.textContent=this._name,this._element}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".element__like").addEventListener("click",(function(){e._handleCardClick()})),this._element.querySelector(".element__delete").addEventListener("click",(function(){e._handleCardDelete()})),this._element.querySelector(".element__link").addEventListener("click",(function(){e.handle(e._link,e._name)}))}},{key:"_handleCardClick",value:function(){this._element.querySelector(".element__like").classList.toggle("element__like_active")}},{key:"_handleCardDelete",value:function(){this._element.querySelector(".element__delete").closest(".element").remove()}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=t,this._handleEscClose=this._handleEscClose.bind(this)}var t,r;return t=e,(r=[{key:"closeModal",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"openModal",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.closeModal()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){t.target===t.currentTarget&&e.closeModal()})),this._popup.querySelector(".popup__icon").addEventListener("click",(function(){e.closeModal()}))}}])&&n(t.prototype,r),e}();function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(){return a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=u(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},a.apply(this,arguments)}function u(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=c(e)););return e}function s(e,t){return s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},s(e,t)}function l(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function c(e){return c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},c(e)}var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(p,e);var t,n,r,o,u=(r=p,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=c(r);if(o){var n=c(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return l(this,e)});function p(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),(t=u.call(this,e))._image=t._popup.querySelector(".popup-img__inner"),t._title=t._popup.querySelector(".popup-img__title"),t}return t=p,(n=[{key:"openModal",value:function(e,t){this._image.src=e,this._image.alt=t,this._title.textContent=t,a(c(p.prototype),"openModal",this).call(this)}}])&&i(t.prototype,n),p}(r);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=_(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},h.apply(this,arguments)}function _(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=v(e)););return e}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}function y(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(r);if(o){var n=v(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return y(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._submitHundler=t,n._form=n._popup.querySelector(".popup__form"),n._inputList=n._popup.querySelectorAll(".popup__input"),n}return t=a,(n=[{key:"closeModal",value:function(){h(v(a.prototype),"closeModal",this).call(this),this._form.reset()}},{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;h(v(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(){e._submitHundler(e._getInputValues())}))}}])&&d(t.prototype,n),a}(r);function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var k=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._initialCards=r,this.renderer=o,this._containerSelector=n}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._initialCards.forEach((function(t){e.renderer(t)}))}},{key:"addItem",value:function(e){this._containerSelector.prepend(e)}}])&&g(t.prototype,n),e}();function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var S=function(){function e(t){var n=t.nameSelector,r=t.descriptionSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameElement=document.querySelector(n),this._descriptionElement=document.querySelector(r),this._name=null,this._description=null,this._avatar=null}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name,description:this._description,avatar:this._avatar}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.description,r=e.avatar;t&&(this._name=t),n&&(this._description=n),this._avatar=r}},{key:"updateUserInfo",value:function(){this._nameElement.textContent=this._name,this._descriptionElement.textContent=this._description}}])&&E(t.prototype,n),e}();function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var C={formSelector:"form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_invalid",inputErrorClass:"popup__input_type_error",errorClass:"popup__error"},L=function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),w(this,"_toggleButtonState",(function(){r._inputsList.some((function(e){return!e.validity.valid}))?r.disableButton():(r._submitButton.classList.remove(r._inactiveButtonClass),r._submitButton.removeAttribute("disabled"))})),w(this,"disableButton",(function(){r._submitButton.classList.add(r._inactiveButtonClass),r._submitButton.setAttribute("disabled","disabled")})),w(this,"_setInputListeners",(function(){r._toggleButtonState(),r._inputsList.forEach((function(e){e.addEventListener("input",(function(){r._checkInput(e),r._toggleButtonState()}))})),r._formElement.addEventListener("submit",(function(e){e.preventDefault()}))})),w(this,"_showInputError",(function(e,t){e.textContent=t.validationMessage,e.classList.add(r._errorClass),t.classList.add(r._inputErrorClass)})),w(this,"_hideInputError",(function(e,t){e.textContent="",e.classList.remove(r._errorClass),t.classList.remove(r._inputErrorClass)})),w(this,"_checkInput",(function(e){var t=r._formElement.querySelector("#".concat(e.id,"-error"));e.validity.valid?r._hideInputError(t,e):r._showInputError(t,e)})),w(this,"enableValidation",(function(){r._setInputListeners()})),this._config=t,this._formElement=document.querySelector(n),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._inputsList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._submitButton=this._formElement.querySelector(this._submitButtonSelector)};function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var j=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.url,this._headers=t.headers}var t,n;return t=e,(n=[{key:"getAllTasks",value:function(){return fetch(this._url,{method:"GET",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Сервер не доступен")}))}}])&&O(t.prototype,n),e}(),q=document.querySelector(".elements"),B=document.querySelector(".popup-photo"),I=document.querySelector(".profile__button-edit"),P=document.querySelector(".popup_profile"),R=document.querySelector("[name=name]"),T=document.querySelector("[name=description]"),M=document.querySelector("[name=avatar]"),x=document.querySelector(".profile__button-add"),A=document.querySelector(".avatar"),V=document.querySelector(".avatar-hover"),U=document.querySelector(".popupAdd"),D=document.querySelector(".popup-avatar"),z=(document.querySelector('[name="popupAdd-form"]'),new p(B));function H(e,t){z.openModal(e,t)}function G(e){return new t(e,".template",H).render()}z.setEventListeners();var N=new k({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){var t=G(e);N.addItem(t)}},q);N.renderItems();var F=new S({nameSelector:".profile__title",descriptionSelector:".profile__subtitle"});F.setUserInfo({name:"Жак-Ив Кусто",description:"Исследователь океана"}),F.updateUserInfo();var J=new b(P,(function(e){F.setUserInfo(e),F.updateUserInfo(),J.closeModal()})),K=new b(U,(function(e){var t=G({name:e.name,link:e.image});N.addItem(t),K.closeModal(),X.disableButton()})),Q=new b(D,(function(){M.value=V.src,Q.closeModal(),Y.disableButton()}));I.addEventListener("click",(function(){var e=F.getUserInfo();R.value=e.name,T.value=e.description,J.openModal()})),x.addEventListener("click",(function(){X.disableButton(),K.openModal()})),A.addEventListener("click",(function(){Q.openModal()})),J.setEventListeners(),K.setEventListeners();var W=new L(C,".popup__container"),X=new L(C,".popupAdd__container"),Y=new L(C,".popup__avatar");W.enableValidation(),X.enableValidation(),Y.enableValidation(),new j({url:"https://veronikanazarova.github.io/mesto/#/",headers:{"content-type":"application/json"}}).getAllTasks().then((function(e){console.log(e)}))})();