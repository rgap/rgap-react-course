# 06 Select Basic

En esta sección usamos el componente `Select` de Radix UI.

`Select` sirve para crear una lista desplegable accesible y personalizable.

## Componente usado

```jsx
Select.Root
Select.Trigger
Select.Value
Select.Icon
Select.Portal
Select.Content
Select.Viewport
Select.Item
Select.ItemText
```

## Idea principal

Un select normal en HTML se ve así:

```html
<select>
  <option value="viewer">Viewer</option>
  <option value="editor">Editor</option>
  <option value="admin">Admin</option>
</select>
```

Con Radix UI, el select se divide en piezas:

```jsx
<Select.Root>
  <Select.Trigger>
    <Select.Value />
    <Select.Icon />
  </Select.Trigger>

  <Select.Content>
    <Select.Viewport>
      <Select.Item value="viewer">
        <Select.ItemText>Viewer</Select.ItemText>
      </Select.Item>
    </Select.Viewport>
  </Select.Content>
</Select.Root>
```

## ¿Para qué sirve cada parte?

| Parte | Función |
|---|---|
| `Select.Root` | Controla todo el select |
| `Select.Trigger` | Botón que abre el menú |
| `Select.Value` | Muestra el valor seleccionado |
| `Select.Icon` | Muestra un ícono visual |
| `Select.Portal` | Renderiza el menú fuera del flujo normal |
| `Select.Content` | Contenedor del menú desplegable |
| `Select.Viewport` | Área donde viven las opciones |
| `Select.Item` | Cada opción seleccionable |
| `Select.ItemText` | Texto visible de cada opción |

## Estado usado

En este ejemplo usamos `useState`:

```jsx
const [role, setRole] = useState("viewer");
```

Luego conectamos ese estado al select:

```jsx
<Select.Root value={role} onValueChange={setRole}>
```

Eso significa:

```txt
El usuario selecciona una opción
↓
Radix ejecuta onValueChange
↓
React actualiza role
↓
La pantalla muestra el nuevo valor
```
