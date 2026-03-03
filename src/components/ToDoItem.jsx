import "./ToDoItem.css";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

function ToDoItem({ todoItem, handleDeleteTask, handleCompleted }) {
  return (
    <div className="todoitem">
      <span>
        <input
          type="checkbox"
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
      </span>
      <div className="editdelete-icon">
        <FaEdit />
        <MdDeleteForever onClick={() => handleDeleteTask(todoItem)} />
      </div>
    </div>
  );
}
export default ToDoItem;
