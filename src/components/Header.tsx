const filterImg = require("../filter.png")

function Header() {
  return <div className="header">
      <div className="head">
        <h1>Rick and Morty</h1>
        <img className="filter" src={filterImg}/>
      </div>
    </div>
}

export default Header;
