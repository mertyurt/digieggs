import { useState } from "react";
import "./App.css";
import CardList from "./components/CardList";
import FilterModal from "./components/FilterModal";
import Header from "./components/Header";
import useToggle from "./useToggle";

function App() {
  const [isVisible, toggleVisible] = useToggle(false)
  const [filter, setFilter] = useState("")

  return <div className="App">  
    <Header toggle={toggleVisible}/>
    <CardList filter={filter}/>
    <FilterModal show={isVisible} handleClose={toggleVisible} setFilter={setFilter}/>
  </div>;
}

export default App;
