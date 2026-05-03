import { Slot } from "@radix-ui/react-slot";

export function Button({
  children,
  variant = "primary",
  asChild = false,
  className = "",
  ...props
}) {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      className={`button button-${variant} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
