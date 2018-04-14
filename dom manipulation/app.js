const p = document.getElementById('my-text');

// console.log(p);


// setTimeout(() => {
//   let age = 16;
//   if(age >= 18) {
//     p.innerText = 'Estas en el bar :D';
//   } else {
//     p.innerText = 'No entraste';
//   }
// }, 1000);

const span = document.getElementsByTagName('span')[0];
console.log(span);

const button = document.getElementById('click');
console.log(button);

// cuando haya un click (evento), cambiamos el text
// al span

let counter = 0; // veces que le hemos dado click

button.onclick = function() {
  counter = counter + 1;
  span.innerText = counter;
}

const body = document.getElementById('body');
const makeRed = document.getElementById('make-red');
const makeWhite = document.getElementById('make-white');

makeRed.addEventListener('click', function() {
  // hacer rojo todo
  body.classList.add('red');
});

makeWhite.addEventListener('click', function() {
  body.classList.remove('red');
})