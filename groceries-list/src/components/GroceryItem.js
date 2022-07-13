const GroceryItem = (props) => {
    const {item, brand, units, quantity, isPurchased} = props.groceryData
      return(
          <div onClick={() => props.addToCart(props.groceryData)}>
            <h3 className="itemName">Item: {item}</h3>
            <div className="details">
            <p className="displaytext">Brand: {brand}</p>
            <p className="displaytext">Units: {units}</p>
            <p className="displaytext">Quantity: {quantity}</p>
            </div>
            {/* <button onClick={ () => props.removeItem(props.product) }>Remove</button> */}



          </div> 
      )
  }
  
  export default GroceryItem