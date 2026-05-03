import { Provider } from "jotai";
import Cart from "./components/Cart";

// The App component wraps the Cart component with the Jotai Provider to make the state available
const App = () => (
  <Provider>
    <Cart />
  </Provider>
);

export default App;
