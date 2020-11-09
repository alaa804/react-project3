import logo from './logo.svg';
import './App.css';
import Card from "./card/card";
import Cards from "./card/cards";
import Form from "./card/form";



function App() {
return (
  <div>
    
    <div>
  <h1 className="card-titlee"> My FAVOURITES </h1>
  </div>
  <Cards/>
  <h1 className="form-title">CONTACT ME</h1>
  <Form/>
  </div>
  
)
    
  }

export default App;
