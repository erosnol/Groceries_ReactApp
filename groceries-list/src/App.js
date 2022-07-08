import './App.css';
import { groceries } from './data/GroceryData'

import { Component } from 'react'

import GroceryList from './components/GroceryList'
import Form from './components/Forms'


class App extends Component {

state= {
  groceries,
  item: '',
  brand: '',
  units: '',
  quantity: 0,
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
    groceries: [newGrocery, ...this.state.groceries],
    item: '',
    brand: '',
    units: '',
    quantity: 0,
    isPurchased: false
  })
}


addToList = (item) => {
  this.setState({
    groceries: [item, ...this.state.groceries],
  });
};

removeItem = (product) => {
  const items = this.state.groceries.filter(i => i.item !== product.item)
  this.setState({items})
}



render() {
  
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

      <GroceryList groceries={this.state.groceries} addToList={this.addToList} id="groceryName" />

      
    </div>
  )
}
}

export default App;