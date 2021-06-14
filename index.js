import * as model from "./book.model.js";

let get = model.getAllBooks();

await model.addBook(
    {
        "id":3,
        "name": "The great brewer",
        "Description": "A book about coffee"
    }
);

const x = await model.getAllBooks();


console.log(x);
