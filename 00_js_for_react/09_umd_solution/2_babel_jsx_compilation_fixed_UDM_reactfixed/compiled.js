(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.App = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function () {
  "use strict";

  var App = function App() {
    return /*#__PURE__*/React.createElement("h1", null, "Hello, world!");
  };

  // Make sure ReactDOM renders the component in the root element
  // Old version: ReactDOM.render(<App />, document.getElementById("root"));
  ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
});
