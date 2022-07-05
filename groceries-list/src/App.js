import './App.css';
import GroceryData from './data/GroceryData'

import { Component } from 'react'

import GroceryList from './components/GroceryItem'
import Form from './components/Forms'


class App extends Component {

state= {
  GroceryList: GroceryList,
  groceryItem: "",
  groceryBrand: "",
  groceryUnits: "",
  groceryQuantity: "",
}


handleChange = (event) =>{
  console.log(event.target.value);
  this.setState({ [event.target.id] : event.target.value})
}

handleSubmit = (event) => {
  event.PreventDefault()
}

  // const newGrocery = {
  //   item: this.state.groceryItem
  //   brand: this.state.groceryBrand
  //   units: this.state.groceryUnits
  //   quantity: this.state.groceryQuantity
  //   isPurchased: true
  // }
  // console.log(newGrocery);
  // this.setState({
  //   GroceryData: [newGrocery, ...this.state.GrocercyData],
  //   grocercyItem: '',
  //   groceryBrand: '',
  //   groceryUnits: '',
  //   groceryQuantity: ''
  // })


render() {
  return(
    <div className="App">
      <h1>Grocery List</h1>

      <div className='container'>
      <Form 
      handleSubmit={this.handleSubmit}
      handleChange={this.handleChange}
      groceryItem={this.grocercyItem}
      groceryBrand={this.groceryBrand}
      groceryUnits={this.groceryUnits}
      groceryQuantity={this.groceryQuantity}
      />

      <GroceryList groceries={this.state.production} id="groceryName" />

      </div>
    </div>
  )
}
}

export default App;