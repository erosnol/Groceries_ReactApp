const GroceryItem = (props) => {
    
      return(
          <div>
            <h1>Item: {props.GroceryData.item}</h1>
            <h2>Brand: {props.GroceryData.brand}</h2>
            <h2>Units: {props.GroceryData.units}</h2>
            <h2>Quantity: {props.GroceryData.quantity}</h2>
            <h2>Paid for: {props.GroceryData.isPurchased}</h2>
          </div> 
      )
  }
  
  export default GroceryItem