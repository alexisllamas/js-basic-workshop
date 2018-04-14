// objetos : D

const tocinito = {
  name: 'Tocinito',
  age: 5,
  animal: 'dog',
  sayWoof: function(someParam) {
    console.log(`woof!!! ${this.name}`)
  }
}

console.log(tocinito);
console.log(tocinito.name);
console.log(tocinito['name'])
console.log(tocinito.algoquenoexiste)

tocinito.algoquenoexiste = 'algo que si existe';
console.log(tocinito.algoquenoexiste)

tocinito.sayWoof();