import GroceryItem from '../components/GroceryItem'

const GroceryList = (props) => {
  return (
    <div>
    <h1>Grocery List</h1>
   {props.GroceryData.map((item, idx) => <GroceryItem GroceryData={item} key={idx} /> )}
    </div>
  );
};



export default GroceryList;