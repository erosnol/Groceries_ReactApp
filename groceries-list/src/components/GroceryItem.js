const GroceryItem = (props) => {
    // const {item, brand, units, quantity} = props.groceryData
      return(
          <div>
            <h1>Item: {props.groceryData.item}</h1>
            <h2>Brand: {props.groceryData.brand}</h2>
            <h2>Units: {props.groceryData.units}</h2>
            <h2>Quantity: {props.groceryData.quantity}</h2>
            {/* <button onClick={ () => props.removeItem(props.product) }>Remove</button> */}



          </div> 
      )
  }
  
  export default GroceryItem