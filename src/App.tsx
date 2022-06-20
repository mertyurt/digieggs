import { useState } from "react";
import "./App.css";
import CardList from "./components/CardList";
import FilterModal from "./components/FilterModal";
import useToggle from "./useToggle";
const filterImg = require("./filter.png")

function App() {
  const [isVisible, toggleVisible] = useToggle(false)
  const [filter, setFilter] = useState("")

  return <div className="App">  
    <div className="header">
      <div className="head">
        <h1>{filter === "" ? "Rick and Morty": filter}</h1>
        <button onClick={toggleVisible}><img className="filter" src={filterImg} alt="filter icon"/></button>
      </div>
    </div>
    <CardList filter={filter}/>
    <FilterModal show={isVisible} handleClose={toggleVisible} setFilter={setFilter} options={["Rick", "Morty"]}/>
  </div>;
}

export default App;
