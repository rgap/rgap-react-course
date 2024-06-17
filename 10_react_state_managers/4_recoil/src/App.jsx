import { RecoilRoot } from "recoil";
import Cart from "./components/Cart";

// The App component wraps the Cart component with the RecoilRoot to make the Recoil state available
const App = () => (
  <RecoilRoot>
    <Cart />
  </RecoilRoot>
);

export default App;
