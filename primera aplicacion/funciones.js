// funciones :D

let mensaje = 'haz algo';

function doSomething() {
  console.log(mensaje);
}

doSomething();

function saySomething(quien, mensaje = 'No hay mensaje :(') {
  console.log(`${quien}: ${mensaje}`);
}

saySomething('Yop', 'los aprecio');
saySomething('Angel', 'yo tambien');
saySomething('Miguelito');

// function sum(a, b) {
//   return a + b;
// }

// const sum = (a, b) => {
//   return a + b;
// }

const sum = (a, b) => a + b;

console.log(sum(5, 10));

function checkAge(age) {
  if(age >= 18) {
    return true;
  } else {
    return false;
  }
}

console.log(checkAge(19))
console.log(checkAge(17))
console.log(checkAge(20))

console.log(saySomething('algo'));

//callbacks
function checkAgeWithCallbacks(age, yes, no) {
  if(age >= 18) {
    yes('cualquier cosa');
  } else {
    no();
  }
}

function myYes() {
  console.log('yay, si, todo chido :D ')
}

function myNo() {
  console.log('nope :(')
}

checkAgeWithCallbacks(20, (paramFromFunction) => {
  console.log(`from checkAgeWithCallbacks: ${paramFromFunction}`)
}, myNo)
