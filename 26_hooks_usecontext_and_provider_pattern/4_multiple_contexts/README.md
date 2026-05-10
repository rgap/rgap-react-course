# 4. Multiple Contexts

Real applications usually need more than one context. For example:

- **Theme** (light / dark)
- **Auth** (logged in user)
- **Language** (locale)

Each concern gets its own context, its own Provider, and its own custom hook.

---

## Nesting Providers

You nest Providers inside each other in your App:

```jsx
function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <LanguageProvider>
          <Dashboard />
        </LanguageProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
```

The nesting order does not matter unless one Provider depends on another.

---

## Consuming Multiple Contexts

A component can call as many custom hooks as it needs:

```jsx
function Dashboard() {
  const { theme } = useTheme();
  const { user } = useAuth();
  const { language } = useLanguage();

  // Use all three values
}
```

Each context is **independent**. Changing the theme does not cause components that only consume auth to re-render.

---

## File Organization

In a larger project, each context typically gets its own file:

```txt
src/
  contexts/
    ThemeContext.jsx     → ThemeProvider + useTheme
    AuthContext.jsx      → AuthProvider + useAuth
    LanguageContext.jsx  → LanguageProvider + useLanguage
```

Each file exports only its Provider and custom hook.

---

## The Complete Provider Pattern (Summary)

For each piece of shared state:

```txt
1. createContext(undefined)     → private, not exported
2. CustomProvider({ children }) → exported, wraps children
3. useCustom()                  → exported, calls useContext + error check
```

Consumers only need:
```jsx
import { useTheme } from "./contexts/ThemeContext";
```

They never touch `createContext` or `useContext` directly.

---

## When NOT to Use Context

Context is great for:
- Global settings (theme, language, auth)
- Data that many components need at different nesting levels

Context is NOT ideal for:
- Frequently changing data (like a value that updates every frame)
- Complex state with many actions (consider `useReducer` — next module!)

When context value changes, **all consumers re-render**. For very frequent updates, this can become a performance problem.
