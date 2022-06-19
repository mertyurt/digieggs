function FilterModal({showModal}: any) {
  
  return <div style={{display: showModal}} className="modal">
    <div className="modal-container">
      <div className="modal-header">
        <h3>Filter</h3>
        <button className="close"></button>
      </div>
      <hr/>
      <div className="modal-content">
        <label style={{marginBottom: "1rem"}}>
          Rick <input type="radio"name="filter"/>
          <span className="checkmark"></span>  
        </label>
        <label>
          Morty <input type="radio" name="filter"/>
          <span className="checkmark"></span>  
        </label>
      </div>
    </div>
  </div>;
}

export default FilterModal;
