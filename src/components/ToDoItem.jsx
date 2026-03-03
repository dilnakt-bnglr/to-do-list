import "./ToDoItem.css";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";

function ToDoItem({
  todoItem,
  handleDeleteTask,
  handleCompleted,
  handleEditTask,
  handleUpdate,
}) {
  const [updatedInput, setUpdatedInput] = useState("");
  const updatedTask = updatedInput ? updatedInput : todoItem.task;

  return (
    <>
      {todoItem.isEditable && (
        <div className="edit-section">
          <div className="todotask">
            <input
              type="text"
              className="edit-input"
              value={updatedTask}
              onChange={(e) => setUpdatedInput(e.target.value)}
            />
          </div>
          <button
            className="update-btn"
            onClick={() => handleUpdate(todoItem, updatedTask)}
          >
            Update
          </button>
        </div>
      )}
      {!todoItem.isEditable && (
        <div className="todoitem">
          <div className="todotask">
            <input
              type="checkbox"
              className="input-check"
              checked={todoItem.isCompleted}
              onClick={(event) => handleCompleted(todoItem, event)}
            />
            {todoItem.isCompleted ? (
              <span style={{ textDecoration: "line-through" }}>
                {todoItem.task}
              </span>
            ) : (
              <>{todoItem.task}</>
            )}
          </div>
          <div className="editdelete-icon">
            <FaEdit
              className={`edit-icon ${todoItem.isCompleted ? "disabled" : ""}`}
              onClick={() => handleEditTask(todoItem)}
            />
            <MdDeleteForever
              className="delete-icon"
              onClick={() => handleDeleteTask(todoItem)}
            />
          </div>
        </div>
      )}
    </>
  );
}
export default ToDoItem;
