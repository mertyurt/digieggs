function FilterModal({show, handleClose, setFilter, options}: any) {

  const handleFilter = (event: any) => {
    setFilter(event.target.value)
    handleClose()
  }
  
  return show ? <div className="modal">
    <div className="modal-container">
      <div className="modal-header">
        <h3>Filter</h3>
        <button className="close" onClick={handleClose} data-testid="close-button"></button>
      </div>
      <hr/>
      <div className="modal-content" onChange={(e) => handleFilter(e)}>
        {options.map((item: string, index: number) => (
          <label style={{marginBottom: "1rem"}} key={index}>
          {item} <input type="radio" name="filter" value={item} data-testid="radio-button"/>
          <span className="checkmark"></span>  
        </label>
        ))}
      </div>
    </div>
  </div> : <></>;
}

export default FilterModal;
