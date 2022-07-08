import './App.css';
import  groceryData from './data/groceryData'

import { Component } from 'react'

import GroceryList from './components/GroceryList'
import Form from './components/Form'


class App extends Component {

state= {
  groceryData: groceryData,
  groceryItem: "",
  groceryBrand: "",
  groceryUnits: "",
  groceryQuantity: 0,
  isPurchased: false
}


handleChange = (event) =>{
  
  this.setState({ [event.target.id] : event.target.value} )
}

handleSubmit = (event) => {
  event.PreventDefault()

  const newGrocery = {
    item: this.state.item,
    brand: this.state.brand,
    units: this.state.units,
    quantity: this.state.quantity,
    isPurchased: false
  }

  // sets the new values in the state
  this.setState({
    groceryData: [newGrocery, ...this.state.groceryData],
    item: '',
    brand: '',
    units: '',
    quantity: 0,
    isPurchased: false
  })
}


// addToList = (item) => {
//   this.setState({
//     groceries: [item, ...this.state.groceries],
//   });
// };

// removeItem = (product) => {
//   const items = this.state.groceries.filter(i => i.item !== product.item)
//   this.setState({items})
// }



render() {
  console.log(groceryData);
  return(
    <div className="App">
      <h1>Grocery</h1>

      
      <Form 
      handleSubmit={this.handleSubmit}
      handleChange={this.handleChange}
      groceryItem={this.grocercyItem}
      groceryBrand={this.groceryBrand}
      groceryUnits={this.groceryUnits}
      groceryQuantity={this.groceryQuantity}
      />

      <GroceryList groceryData={this.state.groceryData} id="groceryName" />

      
    </div>
  )
}
}

export default App;