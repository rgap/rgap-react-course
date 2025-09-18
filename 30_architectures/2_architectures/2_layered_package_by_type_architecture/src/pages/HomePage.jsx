import React from "react";
import Button from "../components/Button";
import Card from "../components/Card";

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Card title="Welcome!">
        <p>This is the home page of a Layer-based React app.</p>
        <Button onClick={() => alert("Hello!")}>Say Hello</Button>
      </Card>
    </div>
  );
}
