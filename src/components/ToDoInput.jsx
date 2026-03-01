import { useState } from "react";

function ToDoInput({ tasks, setToDoTask }) {
  const [input, setInput] = useState("");
  const handleAddTask = () => {
    const currentTask = [...tasks];
    currentTask.push(input);
    setToDoTask(currentTask);
    setInput("");
  };
  return (
    <>
      <h3>To Do Input</h3>
      <div>
        <input
          type="text"
          className="task-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn" onClick={handleAddTask}>
          Add
        </button>
      </div>
    </>
  );
}
export default ToDoInput;
