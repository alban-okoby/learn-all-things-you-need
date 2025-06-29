
# Event Handling & Conditional Rendering

## Focus on :
- Handle user events (clicks, inputChanges ..)
- Render different UI based on state (conditions)

### Event Handing
Recat events are like browser events, but :
- They're writen in **camalCase** (onClick, onChange, onSubmit ...)
- They receive a synthetic event objet as parameter

### Conditional Rendering
Use if/else logic t determine what React renders
- if/else inside a component `if (isLoggedIn) return <Dashboard />; else return <Login />`
- Ternary operator : `if {isLoggedIn ? <Dashboard /> : <Login />}`
- Short-circuit : `{isLoggedIn && <Dashboard />}` 