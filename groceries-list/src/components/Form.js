const Form = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <label htmlFor="groceryItem"> Item Name</label>
        <input
          type="text"
          value={props.groceryItem}
          onChange={props.handleChange}
          id="groceryItem"
        />
        <br />
        <label htmlFor="groceryBrand"> Item Brand</label>
        <input
          type="number"
          value={props.groceryBrand}
          onChange={props.handleChange}
          id="groceryBrand"
        />
         <br />
        <label htmlFor="groceryUnits">Grocery Units</label>
        <input
          type="text"
          value={props.groceryUnits}
          onChange={props.handleChange}
          id="groceryUnits"
        />
        <br />
        <label htmlFor="groceryQuantity">Grocery Quantity</label>
        <input
          type="text"
          value={props.groceryQuantity}
          onChange={props.handleChange}
          id="groceryQuantity"
        />
        <br />
        <label htmlFor="isPurchased">Purchased</label>
        <input
          type="checkbox"
          value={props.isPurchased}
          onChange={props.handleChange}
          id="isPurchased"
        />
        <input type="submit" />
      </form>
    );
  };
  
  export default Form;
  
  
  
  
  
  
  
  
  
  
  

  
  
  
  