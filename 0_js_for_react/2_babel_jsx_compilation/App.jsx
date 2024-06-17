// JSX (JavaScript XML)
// JSX allows you to write HTML elements in JavaScript and place them in the DOM without using createElement() or appendChild() methods.

// Before Babel transformation (JSX)
const App = () => {
  return <h1>Hello, world!</h1>;
};

export default App;

// After Babel transformation (JS)
// "use strict";

// Object.defineProperty(exports, "__esModule", {
//   value: true
// });
// exports["default"] = void 0;
// var App = function App() {
//   return /*#__PURE__*/React.createElement("h1", null, "Hello, world!");
// };
// var _default = exports["default"] = App;
