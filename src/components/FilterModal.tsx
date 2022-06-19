function FilterModal({show, handleClose, setFilter}: any) {

  const handleFilter = (event: any) => {
    console.log(event.target.value)
    setFilter(event.target.value)
    handleClose()
  }
  
  return show ? <div className="modal">
    <div className="modal-container">
      <div className="modal-header">
        <h3>Filter</h3>
        <button className="close" onClick={handleClose}></button>
      </div>
      <hr/>
      <div className="modal-content" onChange={(e) => handleFilter(e)}>
        <label style={{marginBottom: "1rem"}}>
          Rick <input type="radio" name="filter" value="Rick"/>
          <span className="checkmark"></span>  
        </label>
        <label>
          Morty <input type="radio" name="filter" value="Morty"/>
          <span className="checkmark"></span>  
        </label>
      </div>
    </div>
  </div> : <></>;
}

export default FilterModal;
