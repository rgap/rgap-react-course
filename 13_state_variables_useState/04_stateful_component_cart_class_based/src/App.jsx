import { Component } from "react";

// Cart component managing the quantity of a single product
class Cart extends Component {
  // Initialize the state in the constructor
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0, // Initial product quantity state to 0
    };
  }

  // Function to increment the product quantity
  incrementQuantity = () => {
    this.setState(prevState => ({
      quantity: prevState.quantity + 1, // Updates the quantity
    }));
  };

  render() {
    return (
      <div>
        <h1>Product Quantity: {this.state.quantity}</h1>
        <button onClick={this.incrementQuantity}>Add to Cart</button>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Cart />
      </div>
    );
  }
}

export default App;
