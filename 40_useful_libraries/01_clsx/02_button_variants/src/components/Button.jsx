import clsx from "clsx";

export default function Button({ children, variant }) {
  return (
    <button
      className={clsx(
        "button",
        variant === "primary" && "button-primary",
        variant === "secondary" && "button-secondary",
        variant === "danger" && "button-danger"
      )}
    >
      {children}
    </button>
  );
}