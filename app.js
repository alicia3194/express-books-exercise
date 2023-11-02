const books = require("./data/books.json");
const express = require("express");
const app = express();
const port = 3001;

app.get("/all", (req, res) => {
  res.status(200).json(books);
});

app.get("/first", (req, res) => {
  res.status(200).json(books[0]);
});

app.get("/last", (req, res) => {
  res.status(200).json(books[books.length - 1]);
});

app.get("/middle", (req, res) => {
  res.status(200).json(books[50]);
});

app.get("/author/dante-alighieri", (req, res) => {
  let book = books.find((book) => book.author === "Dante Alighieri");
  res.status(200).json(book.title);
});

app.get("/country/charles-dickens", (req, res) => {
  let book = books.find((book) => book.author === "Charles Dickens");
  res.status(200).json(book.country);
});

app.get("/year&pages/cervantes", (req, res) => {
  console.log(req.book);
  let book = books.find((book) => book.author === "Miguel de Cervantes");
  res.status(200).json({ pages: book.pages, year: book.year });
});

app.get("/country/count/spain", (req, res) => {
  console.log(req.book);
  let book = books.filter((book) => book.country === "Spain");
  res.status(200).json(book.length);
});

app.get("/country/at-least/germany", (req, res) => {
  console.log(req.book);
  let book = books.find((book) => book.country === "Germany");
  res.status(200).json(book.country.includes("Germany"));
});

app.get("/pages/all-greater/200", (req, res) => {
  console.log(req.book);
  let book = books.every((book) => book.pages >= 200);
  res.status(200).json(book);
});

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
