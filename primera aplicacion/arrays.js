// un array o arreglo es una colleción de datos
let myPets = ['tocino', 'camilito', 'mila'];

console.log(myPets);

//nos encontramos un perrito
myPets.push('firulais'); // push agrega un elemento al final

console.log(myPets);

//lo dejamos ir
myPets.pop(); //pop quita el ultimo elemento

console.log(myPets);

console.log(myPets[0])
console.log(myPets[1])
console.log(myPets[2])

// tocinito se muere
myPets.shift(); // shift quita el primer elemento

console.log(myPets);

myPets.unshift('tocino'); // unshift agrega un elemento al inicio

console.log(myPets);

console.log(myPets.length)

myPets.push('firulais');

console.log(myPets.length);

function printPet(pet) {
  console.log(pet)
}

myPets.forEach(printPet);

console.log(myPets)
//quitar la posicion 1


myPets = myPets.filter((pet, index) => {
  if(index === 1) {
    return false;
  } else {
    return true;
  }
});

console.log(myPets)

// 'tocino, mila, firulais'

//join
console.log(myPets.join(', '));
console.log(myPets);

const string = 'alexis, juan, mariana';
console.log(string.split(', '))