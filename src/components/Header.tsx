
const filterImg = require("../filter.png")

function Header({toggle}: any) {

  return <div className="header">
      <div className="head">
        <h1>Rick and Morty</h1>
        <button onClick={toggle}><img className="filter" src={filterImg}/></button>
      </div>
    </div>
}

export default Header;
