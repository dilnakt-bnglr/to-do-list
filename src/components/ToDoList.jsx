import ToDoItem from "./ToDoItem";

function ToDoList({
  todoInputs,
  handleDeleteTask,
  handleCompleted,
  handleEditTask,
  handleUpdate,
}) {
  return (
    <>
      {todoInputs.map((task) => (
        <ToDoItem
          key={task.id}
          todoItem={task}
          handleDeleteTask={handleDeleteTask}
          handleCompleted={handleCompleted}
          handleEditTask={handleEditTask}
          handleUpdate={handleUpdate}
        />
      ))}
    </>
  );
}
export default ToDoList;
