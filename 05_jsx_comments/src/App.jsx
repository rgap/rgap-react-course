function App() {
  // This is a single-line comment
  const name = "React";

  /*
    This is a
    Multi-line comment
  */

  return (
    <div>
      {/* Single-line comment: This comment is placed before a tag. */}
      <h1>Welcome Welcome</h1>
      <h1>Welcome to the Comment Example</h1> {/* Single-line comment: This comment is placed after a tag. */}
      <section>
        {/*
          Multi-line comment in JSX: This comment spans multiple lines 
          and is used to describe broader sections of the code.
        */}
        <h2>Understanding JSX Comments</h2>
      </section>
      <section>
        {
          // This is another single-line comment
          <p>Expression example</p>
        }
        {
          /*
            This is another
            multi-line comment
          */
          <p>Another expression example</p>
        }
        <p>Final expression example</p>
      </section>
    </div>
  );
}

export default App;
