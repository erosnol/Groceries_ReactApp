const GroceryItem = (props) => {
    const {item, brand, units, quantity, isPurchased} = props.groceries
  
    console.log(props.groceries);
      return(
          <div>
            <h1>Item: {item}</h1>
            <h2>Brand: {brand}</h2>
            <h2>Units: {units}</h2>
            <h2>Quantity: {quantity}</h2>
            <h2>Paid for: {isPurchased}</h2>
          </div> 
      )
  }
  
  export default GroceryItem