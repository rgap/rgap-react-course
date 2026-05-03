import "./App.css";
import Button from "./components/Button";

export default function App() {
  return (
    <main className="page">
      <h1>Button Variants with clsx</h1>

      <div className="button-group">
        <Button variant="primary">Save</Button>
        <Button variant="secondary">Cancel</Button>
        <Button variant="danger">Delete</Button>
      </div>
    </main>
  );
}