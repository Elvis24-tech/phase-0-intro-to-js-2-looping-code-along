// Code your solutions in this file

function writeCards(names, event) {
    return names.map(name => {
      return `Thank you, ${name}, for the wonderful ${event} gift!`;
    });
  }
  
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  