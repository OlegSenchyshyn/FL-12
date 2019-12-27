const baseRange = 8,
  baseAttempts = 3,
  basePrize = 100,
  multipler = 2,
  increase = 4;
let maxRange = 8,
  maxAttempts = 3,
  prize = 0,
  maxPrize = 100,
  possiblePrize = 100,
  play = confirm('Do you want to play a game?');
if (play === true) {
  let randNumb = Math.floor(Math.random() * (maxRange + 1));
  while (maxAttempts > 0) {
    let choise = parseInt(
      prompt(`
      Choose a roulette number from 0 to ${maxRange}
      Attempts left: ${maxAttempts}
      Total prize: ${prize}$
      Possible prize on current attempt: ${possiblePrize}$
      `)
    );

    if (choise === randNumb) {
      prize += possiblePrize;
      let nextChoise = confirm(`
        Congratulation, you won!
        Your prize is: ${prize}$.
        Do you want to continue?`);
      if (nextChoise === true) {
        maxRange += increase;
        randNumb = Math.floor(Math.random() * (maxRange + 1));
        maxPrize *= multipler;
        possiblePrize = maxPrize;
        maxAttempts = baseAttempts;
      } else {
        alert(`Thank you for your participation. Your prize is: ${prize}$`);
        play = confirm('Do you want to play again?');
        if (play === true) {
          maxRange = baseRange;
          maxAttempts = baseAttempts;
          prize = 0;
          possiblePrize = basePrize;
          randNumb = Math.floor(Math.random() * (maxRange + 1));
        } else {
          break;
        }
      }
    } else {
      maxAttempts--;
      possiblePrize /= multipler;
    }

    if (maxAttempts === 0) {
      alert(`Thank you for your participation. Your prize is: ${prize}$`);
      let play = confirm('Do you want to play again?');
      if (play === true) {
        maxRange = baseRange;
        maxAttempts = baseAttempts;
        prize = 0;
        possiblePrize = basePrize;
        randNumb = Math.floor(Math.random() * (maxRange + 1));
      } else {
        break;
      }
    }
  }
} else {
  alert('You did not become a billionaire, but can.');
}
