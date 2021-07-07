//Programação Orientada a Objetos em JavaScript - Classes

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  read() {
    return `Estou lendo ${this.title}`
  }
}

let book = new Book('Algoritimos para viver', 'Brian', 500);
let otherBook = new Book('Código Limpo', 'Robert Cecil Martin', 457);

console.log(book.read());
console.log(otherBook.read());
console.log(book);
console.log(otherBook);