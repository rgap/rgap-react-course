export default function App() {
  // These will be called JSX objects or JSX elements or JSX variables because they are written in JSX syntax
  // JSX objects are not actual React elements, but they are transformed into React elements
  // by the Babel compiler before they are rendered to the DOM

  // Declare a simple JSX object
  const heading = <h1>Hello, World!</h1>;

  // This would be equivalent to the following React.createElement() call:
  // const heading = React.createElement("h1", {}, "Hello, World!");

  return <div>{heading}</div>;
}
