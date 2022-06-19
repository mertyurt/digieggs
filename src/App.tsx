import "./App.css";
import CardList from "./components/CardList";
import FilterModal from "./components/FilterModal";
import Header from "./components/Header";

function App() {
  return <div className="App">
    <Header/>
    <CardList/>
    <FilterModal showModal={true} />
  </div>;
}

export default App;
