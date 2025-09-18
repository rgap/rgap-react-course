import React from "react";
import { greet } from "./utils";

export default function App() {
  return (
    <div>
      <h1>{greet("Flat src Architecture")}</h1>
      <p>
        All source files are dumped inside a single folder: <code>/src</code>.
      </p>
    </div>
  );
}
