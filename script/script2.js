import {Card} from "./Card.js";
import {Popup} from "./Popup.js";
import {initialCards} from "./index.js";


const cardItem = document.querySelector('.elements');

initialCards.forEach(function(item) {
  const card = new Card(item, '.template').render();
  cardItem.append(card);
});



 