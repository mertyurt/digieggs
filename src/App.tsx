import { gql, useMutation, useQuery } from "@apollo/client";
import { disconnect } from "process";
import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import CardList from "./components/CardList";
import FilterModal from "./components/FilterModal";
import useToggle from "./useToggle";
const filterImg = require("./filter.png")

export const CHARACTERS =  gql`
query GetCharacters($pageNum: Int, $filter: String) {
  characters(page: $pageNum, filter: {name: $filter}){results{id, name, status,image, location{name}}} 
}
`;

function App() {
  const [isVisible, toggleVisible] = useToggle(false)
  const [filter, setFilter] = useState("")
  const [pageNum, setPageNum] = useState(1);
  const [items, setitems] = useState<any[]>([])
  const  { data, loading, error,fetchMore } = useQuery(CHARACTERS,{
    variables: {pageNum, filter}
  });

  useEffect(() => {
    if (data) setitems((items) => {
      return [...items, data.characters.results]
    })
    console.log(data)
  }, [data])
  
  const observer = useRef<IntersectionObserver>();
  
  const lastItemRef = useCallback((node: Node) => {
    if(loading) return;
    if(observer.current) observer.current!.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting){
        setPageNum(prevPageNum => prevPageNum + 1)
        console.log('visible')
      }
    })
    if (node) observer.current!.observe(node as Element)
    console.log(node)
  },[loading ])
  

  return <div className="App">
    <div className="header">
      <div className="head">
        <h1>{filter === "" ? "Rick and Morty": filter}</h1>
        <button onClick={toggleVisible}><img className="filter" src={filterImg} alt="filter icon"/>  </button>
      </div>
    </div>
    <CardList data={items} error={error} loading={loading} fetchMore={fetchMore} lastItemRef={lastItemRef}/>
    <FilterModal show={isVisible} handleClose={toggleVisible} setFilter={setFilter} options={["Rick", "Morty"]}/>
  </div>;
}

export default App;
