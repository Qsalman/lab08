
let getItem = function() {
  let userInput = prompt('please pick pick youtube?');
  let item = '';

  while(userInput !== 'facebook' && userInput !== 'youtube') {
    userInput = prompt('Please  pick facbook or youtube ');
  }

  if(userInput === 'facbook') {
    item = '<img src="facebook.jpg" />';
  } else if (userInput === 'youtube') {
    item = '<img src="youtube.jpg" />';
  }

  return item;
}

let howMany = function() {
  let count = prompt('How many time you like to use it?');

  while(count === '' || isNaN(count)) {
    count = prompt('Please enter a number!!');
  }

  return count;
}

// function showOrder
// declare the other fuunction
// call functioon from the html

let showOrder = function() {
  let item = getItem();
  let total = howMany();
  let result = '';

  for(let i = 0; i < total; i++) {
    result = result + '<p>Model #' + i + ' ' + item + '</p>';
  }
  // document.write(item);
  return result;
}
