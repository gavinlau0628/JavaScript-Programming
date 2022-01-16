let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.querySelector("#cards-el");
let cards = [];
let sum = 0;

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    sum = firstCard + secondCard;
    cards = [firstCard, secondCard];
    renderGame();
}

function getRandomCard() {
    let num =  Math.floor(Math.random() * 13) + 1;
    if (num === 1) {
        return 11;
    } else if (num >= 11) {
        return 10;
    } else {
        return num; 
    }
}

function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (let i=0; i<cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        hasBlackJack = true;
        message = "You've got Blackjack!";
    } else {
        isAlive = false;
        message = "You're out of the game!";
    }
    messageEl.textContent = message;
}

function newCard() {
    console.log("isAlive: "+isAlive+" "+" hasBlackJack: "+hasBlackJack);
    if (isAlive && !hasBlackJack) {
        let newCard = getRandomCard();
        cards.push(newCard);
        sum += newCard;
        renderGame();
    }
}