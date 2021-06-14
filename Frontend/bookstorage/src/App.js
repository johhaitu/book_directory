import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import {getBooks} from "./components/books"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
        <Route path="/books" component={getBooks}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
