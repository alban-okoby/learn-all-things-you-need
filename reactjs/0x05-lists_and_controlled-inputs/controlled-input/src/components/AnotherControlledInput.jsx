import { useState } from "react";

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");

    const inputChange = (e) => setInput(e.target.value);
    const handleAdd = () => {
        if (input.trim() !== "") {
            setTasks([...tasks, input]);
            setInput("");
        }
    };

    return (
        <>
            <h3>Todo list controlled Input </h3>
            <input type="text" value={input} onChange={inputChange} title="My controlled input"/>
            <button onClick={handleAdd}>Add task</button>
            <ul>
                {tasks.map((task, idx) => (
                    <li key={idx}>{task}</li>
                ))}
            </ul>
        </>
    );
}

export default TodoList;