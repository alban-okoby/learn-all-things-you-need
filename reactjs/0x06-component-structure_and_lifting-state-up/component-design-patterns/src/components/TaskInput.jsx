import { useState } from "react";

function TaskInput({ onAddTask }) {
  const [task, setTask] = useState("");
  const handleAdd = () => {
    if (task.trim() !== "") {
      onAddTask(task);
      setTask("");
    }
  };
  
  return (
    <>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
     <button onClick={handleAdd} type="button">Add</button>
    </>
  );
}

export default TaskInput;
