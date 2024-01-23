function Book(title, author, publishedYear) {
  this.title = title;
  this.author = author;
  this.publishedYear = publishedYear;
  this.isAvailable = true;

  this.displayInfo = function () {
    console.log(
      `Title: ${this.title}, Author: ${this.author}, Published Year: ${this.publishedYear}, Available: ${this.isAvailable}`
    );
  };

  this.borrow = function () {
    if (this.isAvailable) {
      this.isAvailable = false;
      console.log(`Book "${this.title}" has been borrowed.`);
    } else {
      console.log(`Book "${this.title}" is not available for borrowing.`);
    }
  };

  this.returnBook = function () {
    this.isAvailable = true;
    console.log(`Book "${this.title}" has been returned.`);
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

  this.isBookAvailable = function (bookTitle) {
    const book = this.books.find((book) => book.title === bookTitle);
    if (book) {
      return book.isAvailable;
    } else {
      console.log(`Book "${bookTitle}" not found in the library.`);
      return false;
    }
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

book2.borrow();

book2.returnBook();

let isAvailable = library.isBookAvailable("To Kill a Mockingbird");
console.log(`Is "To Kill a Mockingbird" available to borrow? ${isAvailable}`);
