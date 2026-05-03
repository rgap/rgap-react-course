import * as Label from "@radix-ui/react-label";
import "./App.css";

export default function App() {
  return (
    <main className="app">
      <h1>First Radix Primitive</h1>

      <form className="form">
        <div className="field">
          <Label.Root className="label" htmlFor="email">
            Email
          </Label.Root>

          <input
            className="input"
            id="email"
            type="email"
            placeholder="example@mail.com"
          />
        </div>
      </form>
    </main>
  );
}