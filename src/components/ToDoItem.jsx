import "./ToDoItem.css";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

function ToDoItem({ todoItem, handleDeleteTask, handleCompleted }) {
  return (
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
        />
        <MdDeleteForever
          className="delete-icon"
          onClick={() => handleDeleteTask(todoItem)}
        />
      </div>
    </div>
  );
}
export default ToDoItem;
