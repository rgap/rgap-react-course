import { Provider } from "react-redux";
import Cart from "./components/Cart";
import store from "./store";

// The App component wraps the Cart component with the Redux Provider to make the store available
const App = () => (
  <Provider store={store}>
    <Cart />
  </Provider>
);

export default App;
