import GroceryItem from '../components/GroceryItem'

const GroceryList = (props) => {
  return (
    <div>
      {props.groceryData.map(
        (item, idx) => !groceryData.isPurchased && (<GroceryItem groceryData={item} key={idx} />
        )
      )}

    </div>
  );
};



export default GroceryList;