function Book(title, author, publishedYear) {
  this.title = title;
  this.author = author;
  this.publishedYear = publishedYear;
  this.displayInfo = function () {
    console.log(
      `Title: ${this.title}, Author: ${this.author}, Published Year: ${this.publishedYear}`
    );
  };
}

function Library() {
  this.books = [];

  this.addBook = function (book) {
    this.books.push(book);
  };

  this.displayLibrary = function () {
    console.log("Library Books:");
    this.books.forEach(function (book) {
      book.displayInfo();
    });
  };
}

let book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
let book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
let book3 = new Book("1984", "George Orwell", 1949);
let library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.displayLibrary();
