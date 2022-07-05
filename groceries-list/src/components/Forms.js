const Form = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <label htmlFor="productName">Product Name </label>
        <input
          type="text"
          value={props.groceryItem}
          onChange={props.handleChange}
          id="groceryItem"
        />
        <br />

        <input type="submit" />
      </form>
    );
  };
  
  export default Form;
  
  
  
  
  
  
  
  
  
  
  

  
  
  
  