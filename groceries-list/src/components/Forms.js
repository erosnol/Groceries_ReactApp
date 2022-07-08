const Form = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <label htmlFor="groceryItem">Item </label>
        <input
          type="text"
          value={props.item}
          onChange={props.handleChange}
          id="groceryItem"
        />
        <br />

        <label htmlFor="groceryBrand">Brand </label>
        <input 
        type="text"
        value={props.brand}
        onChange={props.handleChange}
        id='grocercyBrand'
        />
        <br />
        
        <label htmlFor="groceryUnits">Units </label>
        <input
          type="text"
          value={props.units}
          onChange={props.handleChange}
          id="groceryUnits"
        />
        <br />

        <label htmlFor="groceryQuantity">Quantity </label>
        <input
          type="number"
          value={props.quantity}
          onChange={props.handleChange}
          id="groceryQuantity"
        />
        <br />

        <label htmlFor="is-purchased">Purchased</label>
        <input
        type="checkbox"
        value={props.isPurchased}
        onChange={props.handleChange}
        id="is-puchased"
      />


        <input type="submit"  />
      </form>
    );
  };
  
  export default Form;
  
  
  
  
  
  
  
  
  
  
  

  
  
  
  