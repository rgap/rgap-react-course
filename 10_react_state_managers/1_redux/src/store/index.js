import { createStore } from "redux";
import rootReducer from "./reducers";

// Create the Redux store using the root reducer
const store = createStore(rootReducer);

export default store;
