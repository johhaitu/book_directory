import * as bookModel from "./book.model.js";



export async function getBooks (req, res) {
    try {
      let books = await bookModel.getAllBooks();
      res.json(books);
    } catch (error) {
      res.status(404).send(error.message);
    }
  }

export async function getBookByID(req, res){
    try{
        let bookId = parseInt(req.params.id);
        let book = await bookModel.findBookById(bookId);
        res.json(book);
     }catch(error){
        res.status(400).send(error.message);
    }
}

export async function deleteBook(req, res){
    try{
        let bookId = parseInt(req.params.id);
        await bookModel.deleteBook(bookId);
        res.status(200).send({Message:"The book is now deleted"})
    }catch(error){
        res.status(400).send(error.message);
    }
}

export async function postBook(req,res){
    try{
        let id = parseInt(req.params.id);
        let description = req.body.description;
        let name = req.body.name;
        let newBook = {id, name, description};
        await bookModel.addBook(newBook);
        res.status(201).send({message: `The book with id: ${id}, is now added to the collection`})
    }catch(error){
        res.status(400).send(error.message);
    }
}

export async function changeBook(req,res){
    try{
        let id = parseInt(req.params.id);
        let name = req.body.name;
        let description = req.body.description;
        await bookModel.changeBook(id, name, description);
        res.status(201).send({message: `The book with id ${id} is now updated`});
    }catch(error){
        res.status(400).send(error.messge);
    }
}