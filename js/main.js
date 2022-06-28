"use strict";

function createCards(number) {
  let card = document.createElement("article");
  card.textContent = number;
  card.classList.add('card');
  document.querySelector('.game__container').append(card);
}

createCards(1);
createCards(2);
createCards(3);
createCards(4);
createCards(4);
createCards(4);
createCards(4);
createCards(4);
createCards(4);
createCards(4);
