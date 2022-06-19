import "./App.css";
import CardList from "./components/CardList";

const filterImg = require("./filter.png")

function App() {
  return <div className="App">
    <div className="header">
    <h1>Rick and Morty</h1>
    <img className="filter" src={filterImg}/>
    </div>
    <CardList/>
  </div>;
}

export default App;
