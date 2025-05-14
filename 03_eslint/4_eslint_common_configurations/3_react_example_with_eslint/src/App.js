import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import MyComponent from "./MyComponent";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(["Item 1", "Item 2", "Item 3"]);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <MyComponent />
        <ItemList items={items} />
      </header>
    </div>
  );
}

export default App;
