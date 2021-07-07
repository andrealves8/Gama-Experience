//Programação Orientada a Objetos em JavaScript - Herança

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

class ITBook extends Book {
  constructor(title, author, pages, technology) {
    super(title, author, pages);
    this.technology = technology;
  }
}

let itBook = new Book('Algoritimos para viver', 'Brian', 500);
console.log(itBppk.title);