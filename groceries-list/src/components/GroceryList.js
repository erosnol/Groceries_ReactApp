import GroceryItem from './GroceryItem'

const GroceryList = (props) => {
  console.log(props.groceries);
  return (
    <div>
    
   {props.groceries.map((grocery, idx) => <GroceryItem product={grocery} key={idx} /> )}
    </div>
  );
};



export default GroceryList;