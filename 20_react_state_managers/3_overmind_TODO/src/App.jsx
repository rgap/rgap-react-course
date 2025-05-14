import { Provider } from "overmind-react";
import Cart from "./components/Cart";
import { overmind } from "./store";

// The App component wraps the Cart component with the Overmind Provider to make the store available
const App = () => (
  <Provider value={overmind}>
    <Cart />
  </Provider>
);

export default App;
