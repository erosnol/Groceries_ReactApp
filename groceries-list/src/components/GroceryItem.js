const GroceryItem = (props) => {
    const {} = props.groceries
  
    console.log('from product item->', props.groceries);
      return(
          <div onClick={ () => props.addToCart(props.groceries) }>
            <h3>{item}</h3>
            <h2>{brand}</h2>
            <h2>{units}</h2>
            <p>{quantity}</p>
            <p>{isPurchased}</p>
          </div> 
      )
  }
  
  export default GroceryItem