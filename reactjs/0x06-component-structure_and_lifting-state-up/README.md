## Goal 
- Learn how to break your UI into components with React
- Understand "**lifting state up**" to a common parent
- Pass **data and callbacks** between components

### Components Design patterns
- Each component should **do one thing**
- If a component gets too big, **split it**
- Structure based on **functionality**, not file type

### Lifting State Up
- Moving `useState` to the **nearest common ancestor** so that multiple components can **share** or **modify** the same state