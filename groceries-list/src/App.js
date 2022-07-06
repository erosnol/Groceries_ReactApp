import './App.css';
import GroceryData from './data/GroceryData'

import { Component } from 'react'

import GroceryList from './components/GroceryList'
import Form from './components/Forms'


class App extends Component {

state= {
  GroceryData: GroceryData,
  groceryItem: "",
  groceryBrand: "",
  groceryUnits: "",
  groceryQuantity: "",
  isPurchased: false
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
  console.log(GroceryData);
  return(
    <div className="App">
      <h1>Grocery</h1>

      <div className='container'>
      <Form 
      handleSubmit={this.handleSubmit}
      handleChange={this.handleChange}
      groceryItem={this.grocercyItem}
      groceryBrand={this.groceryBrand}
      groceryUnits={this.groceryUnits}
      groceryQuantity={this.groceryQuantity}
      />

      <GroceryList GroceryData={this.state.GroceryData} id="groceryName" />

      </div>
    </div>
  )
}
}

export default App;