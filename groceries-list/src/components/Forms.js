const Form = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <label htmlFor="groceryItem">Item </label>
        <input
          type="text"
          value={props.groceryItem}
          onChange={props.handleChange}
          id="groceryItem"
        />
        <br />

        <label htmlFor="groceryBrand">Brand </label>
        <input 
        type="text"
        value={props.groceryBrand}
        onChange={props.handleChange}
        id='grocercyBrand'
        />

        <label htmlFor="groceryUnits">Units </label>
        <input
          type="number"
          value={props.groceryUnits}
          onChange={props.handleChange}
          id="groceryUnits"
        />

        <label htmlFor="groceryQuantity">Quantity </label>
        <input
          type="number"
          value={props.groceryQuantity}
          onChange={props.handleChange}
          id="groceryQuantity"
        />


        <input type="submit"  />
      </form>
    );
  };
  
  export default Form;
  
  
  
  
  
  
  
  
  
  
  

  
  
  
  