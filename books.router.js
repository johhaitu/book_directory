import * as express from "express";
import { getBooks, postBook, getBookByID, deleteBook, changeBook } from "./books.controller.js";

export const booksrouter = express.Router();

//middleware
//booksrouter.use(express.json());

//retrieve all books
booksrouter.get("/books", getBooks);

//get book by id
booksrouter.get("/books/:id", getBookByID);

//delete book
booksrouter.delete("/books/:id", deleteBook);

//add new book
booksrouter.post("/books/:id", postBook);

//change name and/or description of the book
booksrouter.put("/books/:id", changeBook)
