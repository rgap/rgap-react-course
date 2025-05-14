export default function App() {
  const greetings = [
    <h1 key="1">Hello</h1>,
    <h2 key="2">Hi</h2>,
    <h3 key="3">Hey</h3>
  ]; // Array of JSX elements

  // As React elements:

  // const greetings = [
  //   React.createElement("h1", { key: "1" }, "Hello"),
  //   React.createElement("h2", { key: "2" }, "Hi"),
  //   React.createElement("h3", { key: "3" }, "Hey"),
  // ];

  // All as a single React element:

  // const container = React.createElement("div", {}, [
  //   React.createElement("h1", { key: "1" }, "Hello"),
  //   React.createElement("h2", { key: "2" }, "Hi"),
  //   React.createElement("h3", { key: "3" }, "Hey")
  // ]);
  // Then the "return container;"

  return <div>{greetings}</div>;
}
