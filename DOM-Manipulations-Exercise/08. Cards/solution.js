function solve() {

   let player1Cards = document.getElementById('player1Div');
   let player2Cards = document.getElementById('player2Div');
   let spanElements = document.querySelectorAll('div > span');
   let historyDiv = document.querySelector("#history");
   let cardHistory = []; 
   let upperCardSpan = spanElements[0];
   let lowerCardSpan = spanElements[2];
   let upperCardValue;
   let lowerCardValue;
   let currentUpperCard;
   let currentLowerCard;

   player1Cards.addEventListener('click', (e) => {
      e.target.src = "images/whiteCard.jpg";
      upperCardSpan.innerHTML = e.target.name;
      upperCardValue = Number(e.target.name);
      currentUpperCard = e.target;
      if (lowerCardSpan.innerHTML != '') {
         lowerCardValue = Number(lowerCardSpan.innerHTML);
         cardHistory.push(`[${upperCardValue} vs ${lowerCardValue}] `);
         if (upperCardValue > lowerCardValue) {
            currentUpperCard.style.border = '2px solid green';
            currentLowerCard.style.border = '2px solid red';
         } else {
            currentUpperCard.style.border = '2px solid red';
            currentLowerCard.style.border = '2px solid green';
         }
      }
   });

   player2Cards.addEventListener('click', (e) => {
      e.target.src = "images/whiteCard.jpg";
      lowerCardSpan.innerHTML = e.target.name;
      lowerCardValue = Number(e.target.name);
      currentLowerCard = e.target;
      if (upperCardSpan.innerHTML != '') {
         upperCardValue = Number(upperCardSpan.innerHTML);
         if (upperCardValue < lowerCardValue) {
            currentLowerCard.style.border = '2px solid green';
         } else {
            currentLowerCard.style.border = '2px solid red';
         }
      }
   });
   historyDiv.innerHTML = cardHistory.join(' ') + ' ';

}