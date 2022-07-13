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
  
  this.setState({ [event.target.id] : event.target.value })
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

      <h1 className='Title'>Grocery List </h1>

      
      <Form 
      handleSubmit={this.handleSubmit}
      handleChange={this.handleChange}
      groceryItem={this.state.grocercyItem}
      groceryBrand={this.state.groceryBrand}
      groceryUnits={this.state.groceryUnits}
      groceryQuantity={this.state.groceryQuantity}
      isPurchased={this.state.isPurchased}
      />

      <GroceryList groceryData={this.state.groceryData} addToList={this.addToList} className="groceryList" />

      
    </div>
  )
}
}

export default App;