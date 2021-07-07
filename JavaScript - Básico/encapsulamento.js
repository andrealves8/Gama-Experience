//Programação Orientada a Objetos em JavaScript - Encapsulamento

class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}

let person = new Person('André');
//atribunido novos valores
person.name = "Andrezinho"
console.log(person.name)
