import "./App.css";
import { Button } from "./components/Button";

export default function App() {
  return (
    <main className="app">
      <section className="card">
        <h1>Button-like Component</h1>

        <p className="description">
          This example creates a reusable Button component using Radix Slot.
        </p>

        <div className="actions">
          <Button>
            Save changes
          </Button>

          <Button variant="secondary">
            Cancel
          </Button>

          <Button variant="danger">
            Delete account
          </Button>
        </div>

        <div className="linkExample">
          <p>
            The same Button component can also render an anchor element.
          </p>

          <Button asChild variant="secondary">
            <a href="https://www.radix-ui.com/" target="_blank">
              Open Radix UI
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
}