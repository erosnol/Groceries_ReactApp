const Form = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <label htmlFor="productName">Product Name</label>
        <input
          type="text"
          value={props.productName}
          onChange={props.handleChange}
          id="productName"
        />
        <br />

        <input type="submit" />
      </form>
    );
  };
  
  export default Form;
  
  
  
  
  
  
  
  
  
  
  

  
  
  
  