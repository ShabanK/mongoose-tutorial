const assert = require("assert");
const mongoose = require("mongoose");
const Author = require("../models/author");

describe("Creating a nested document", () => {
  //tests
  let author;

  it("Creating an author wiht sub-docs", done => {
    author = new Author({
      name: "Dude",
      age: 20,
      books: [
        {
          title: "Gone like the flatulence",
          pages: 1
        }
      ]
    });
    author.save().then(() => {
      Author.findOne({ name: "Dude" }).then(record => {
        assert(record.books.length === 1);
        done();
      });
    });
  });
  it("Adding a book to an author's thingamajik", done => {
    author.books.push({ title: "Improvaganza", pages: 23 });
    author.save().then(() => {
      Author.findById(author._id).then(result => {
        // console.log("HELLO, result);
        assert(result.books.length === 2);
        done();
      });
    });
  });
});
