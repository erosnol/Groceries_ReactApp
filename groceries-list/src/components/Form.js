const Form = (props) => {
    return (
        
      <form className="form" onSubmit={props.handleSubmit}>
        <label htmlFor="groceryItem"> Item Name</label>
        <input
          type="text"
          value={props.groceryItem}
          onChange={props.handleChange}
          id="groceryItem"
        />
   
        <label htmlFor="groceryBrand"> Item Brand</label>
        <input
          type="number"
          value={props.groceryBrand}
          onChange={props.handleChange}
          id="groceryBrand"
        />
        
        <label htmlFor="groceryUnits">Grocery Units</label>
        <input
          type="text"
          value={props.groceryUnits}
          onChange={props.handleChange}
          id="groceryUnits"
        />
      
        <label htmlFor="groceryQuantity">Grocery Quantity</label>
        <input
          type="text"
          value={props.groceryQuantity}
          onChange={props.handleChange}
          id="groceryQuantity"
        />
       
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
  
  
  
  
  
  
  
  
  
  
  

  
  
  
  