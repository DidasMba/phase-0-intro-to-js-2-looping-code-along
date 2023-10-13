// Code your solutions in this file
// Fonction pour générer un message de remerciement pour chaque nom fourni
function writeCards(names, event) {
    const thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
      thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouMessages;
  }
  
  // Fonction pour compter à rebours à partir du nombre fourni jusqu'à zéro
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  
  module.exports = {
    writeCards,
    countDown,
  };
  