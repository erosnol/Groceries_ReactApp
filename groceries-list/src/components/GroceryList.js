import GroceryItem from './GroceryItem'

const GroceryList = (props) => {
  console.log(props.groceries);
  return (
    <div>
      <h2>Grocery</h2>

      {/* Here we map over the array */}
      {/* {props.products.map((product, idx) => <ProductItem product={product} key={idx} /> )} */}
    
      {/* {props.products.map((item, idx) =>
        item.inStock ? (
          <ProductItem product={item} key={idx} />
        ) : (
          <h3 key={idx}>{item.name} is out of stock!</h3>
        )
      )} */}
    
   {/* conditional rendering */}
{
  props.groceries.map(
    (item, idx) => item.inStock && <GroceryItem grocery={item} key={idx}/>)}    
    </div>
  );
};



export default GroceryList;