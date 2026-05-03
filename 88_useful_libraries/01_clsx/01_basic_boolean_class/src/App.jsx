import clsx from "clsx";
import "./App.css";

export default function App() {
  const isActive = true;

  return (
    <main className="page">
      <h1>Basic clsx Example</h1>

      {/*
       If isActive is true, then "button-active" will be added to the class list beside the default class "button"
       
       General syntax: clsx("base-class", condition && "extra-class")
      */}
      <button className={clsx("button", isActive && "button-active")}>
        Click me
      </button>
    </main>
  );
}