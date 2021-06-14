import { Container} from "react-bootstrap";


export async function fetchBasket() {
    try {
      const response = await fetch("http://localhost:3000/books", {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });
      return response.json();
    } catch (e) {
      console.error(e);
    }
  }

  export const getBooks = () =>{
      return(
        <div>
      <h1>Hello, and wellcome to the bookstorage!!</h1>
      <Container>
          
      </Container>
      </div>
      )
  }