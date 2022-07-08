import GroceryItem from '../components/GroceryItem'

const GroceryList = (props) => {
  return (
    <div>
    { props.groceryData.map(
    (item, idx) => <GroceryItem groceryData={item} key={idx} />
    )}  
   
    </div>
  );
};



export default GroceryList;