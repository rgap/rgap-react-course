# Button-like Component

En esta sección creamos un componente parecido a un botón usando Radix Slot.

## Objetivo

Aprender a crear un componente reutilizable que pueda comportarse como:

- Un `button`
- Un `a`
- Otro componente hijo

## Componente usado

```jsx
Slot
```

Radix Slot permite pasar propiedades desde un componente padre hacia su hijo directo.

Esto es útil para crear componentes flexibles.

## Idea principal

Normalmente un botón se escribe así:

```jsx
<button>
  Save changes
</button>
```

Pero a veces queremos que el mismo estilo de botón se use en un link:

```jsx
<a href="/profile">
  View profile
</a>
```

Con nuestro componente podemos hacer ambas cosas.

## Como botón normal

```jsx
<Button>
  Save changes
</Button>
```

Resultado conceptual:

```html
<button class="button button-primary">
  Save changes
</button>
```

## Como link

```jsx
<Button asChild>
  <a href="/profile">
    View profile
  </a>
</Button>
```

Resultado conceptual:

```html
<a class="button button-primary" href="/profile">
  View profile
</a>
```

## Qué hace `asChild`

Cuando `asChild` es `false`, el componente renderiza un `button`.

```jsx
const Component = "button";
```

Cuando `asChild` es `true`, el componente usa `Slot`.

```jsx
const Component = Slot;
```

Eso permite que el hijo reciba las clases y propiedades.