
## Focus: Props & State
- Understand props: how to pass data to components.
- Understand state: how to store and update local data inside a component.
- Learn useState hook to make your components interactive


### 1. What are props ?
**Props** are read-only data you pass from a parent to a child component
- Props are immutable
- Props can be of any type (string, number, object, function, even JSX)

### 2. What is state ?
**State** is data internal to a component, that changes over time and causes a re-render when updated
- useState(initialValue) returns an array: [value, setterFunction]