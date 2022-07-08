const GroceryItem = (props) => {
    const {item, brand, units, quantity} = props.groceries
      return(
          <div>
            {/* <h1>Item: {item}</h1>
            <h2>Brand: {brand}</h2>
            <h2>Units: {units}</h2>
            <h2>Quantity: {quantity}</h2>
            <button onClick={ () => props.removeItem(props.product) }>Remove</button> */}



          </div> 
      )
  }
  
  export default GroceryItem