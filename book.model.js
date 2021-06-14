import * as fs from "fs/promises";

const BOOKS_FILE = "./books.json";

export async function getAllBooks(){
       
     try  {
        let booksTxt = await fs.readFile(BOOKS_FILE, "utf8");
        let books = JSON.parse(booksTxt);
        return books;   
        }
        catch(error){
                if(error.code == "ENOENT"){
                        await save([]);
                        return [];
                }
                else throw error;
         }
}

async function save(books){
        let booksTxt = JSON.stringify(books);
        await fs.writeFile(BOOKS_FILE, booksTxt);
}

function findBook(books, id){
        return books.findIndex(currBook => currBook.id === id);
}

export async function findBookById(id){
        let books = await getAllBooks();
        let index = findBook(books, id);
        if(index === -1) throw new Error(`Book with id ' ${id} ' does not exist.`);
        else{
                return books[index];
        }
}

export async function addBook(newBook){
        let books = await getAllBooks();
        if(findBook(books, newBook.id) !== -1){
                throw new Error (`Book with ID: ${newBook.id} already exists!`);
        }else{
                books.push(newBook);
                await save(books);
        }
}

export async function changeBook(id, newDescription){
        let books = await getAllBooks();
        let bookIndex = findBook(books, id);
        if(findBook(books, id) === -1){
                throw new Error (`Book with ID: ${id} does not exist!`);
        }else{
                books[bookIndex].description = newDescription;
                await save(books);
        }
        
}

export async function deleteBook(id){
        let books = await getAllBooks();
        let bookIndex = findBook(books, id);
        if(bookIndex === -1){
                throw new Error (`Book with ID: ${id} does not exist!`);  

        }else{
                books.splice(bookIndex,1);
                await save(books);
         }
}