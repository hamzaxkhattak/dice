var randomNumber1 = Math.floor(Math.random() * 6) + 1;
randomNumber1;

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
randomNumber2;


// Image Selector Function for Player 1
function imageSelectorFunction1() {

  if (randomNumber1 === 1) {

    return document.querySelector('.dice .img1').setAttribute('src', 'images/dice1.png')

  }

  else if (randomNumber1 === 2) {

    return document.querySelector('.dice .img1').setAttribute('src', 'images/dice2.png')

  }

  else if (randomNumber1 === 3) {

    return document.querySelector('.dice .img1').setAttribute('src', 'images/dice3.png')

  }

  else if (randomNumber1 === 4) {

    return document.querySelector('.dice .img1').setAttribute('src', 'images/dice4.png')

  }

  else if (randomNumber1 === 5) {

    return document.querySelector('.dice .img1').setAttribute('src', 'images/dice5.png')

  }

  else {

    return document.querySelector('.dice .img1').setAttribute('src', 'images/dice6.png')

  }
}


// Image Selector Function for Player 2
function imageSelectorFunction2() {

  if (randomNumber2 === 1) {

    return document.querySelector('.dice .img2').setAttribute('src', 'images/dice1.png')

  }

  else if (randomNumber2 === 2) {

    return document.querySelector('.dice .img2').setAttribute('src', 'images/dice2.png')

  }

  else if (randomNumber2 === 3) {

    return document.querySelector('.dice .img2').setAttribute('src', 'images/dice3.png')

  }

  else if (randomNumber2 === 4) {

    return document.querySelector('.dice .img2').setAttribute('src', 'images/dice4.png')

  }

  else if (randomNumber2 === 5) {

    return document.querySelector('.dice .img2').setAttribute('src', 'images/dice5.png')

  }

  else {

    return document.querySelector('.dice .img2').setAttribute('src', 'images/dice6.png')

  }
}

// Result Declaration Function
function result() {

if (randomNumber1>randomNumber2){

  return "🚩Player 1 Won";

}

else if (randomNumber2>randomNumber1){

  return "Player 2 Won🚩";

}

else {

  return "Draw!"

}

}


// Calling the functions
imageSelectorFunction1();
imageSelectorFunction2();
document.querySelector('.container h1').innerHTML = result();
