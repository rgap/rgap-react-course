import Cart from "./components/Cart";
import cartStore from "./store/cartStore";

// The App component renders the Cart component and passes the store as a prop
const App = () => (
  <div>
    <Cart store={cartStore} />
  </div>
);

export default App;
