export default function App() {
  const greetings = (
    <>
      <h1 key="1">Hello</h1>
      <h2 key="2">Hi</h2>
      <h3 key="3">Hey</h3>
    </>
  );
  
  return <div>{greetings}</div>;
}
