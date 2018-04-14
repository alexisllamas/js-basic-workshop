const fakeNumber = '10';
const fakeString = 123;

//así convierto una string a número
const realNumber = Number(fakeNumber);

//así convierto un número a string
const realString = fakeString.toString();

console.log(10 + realNumber);
console.log(Number('algo que no es un número'));
console.log(realString);
