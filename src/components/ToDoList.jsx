import ToDoItem from "./ToDoItem";

function ToDoList({ todoInputs, handleDeleteTask, handleCompleted }) {
  return (
    <>
      {todoInputs.map((task) => (
        <ToDoItem
          todoItem={task}
          handleDeleteTask={handleDeleteTask}
          handleCompleted={handleCompleted}
        />
      ))}
    </>
  );
}
export default ToDoList;
