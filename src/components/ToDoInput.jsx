import { useState } from "react";
import "./ToDoInput.css";
import { FaPlus } from "react-icons/fa";

function ToDoInput({ tasks, setToDoTask }) {
  const [input, setInput] = useState("");
  const [emptyInputMsg, setEmptyInputMsg] = useState(false);
  const handleAddTask = () => {
    if (input) {
      const currentTask = [...tasks];
      const newTask = {
        id: currentTask.length + 1,
        task: input,
        isCompleted: false,
      };
      currentTask.push(newTask);
      setToDoTask(currentTask);
      setInput("");
      setEmptyInputMsg(false);
    } else {
      setEmptyInputMsg(true);
    }
  };
  return (
    <>
      <div className="input-container">
        <input
          type="text"
          className="task-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        {/* <button className="btn" >
          Add
        </button> */}
        <FaPlus className="add-icon" onClick={handleAddTask} />
      </div>
      {emptyInputMsg && <p className="error">Please enter a task.</p>}
    </>
  );
}
export default ToDoInput;
