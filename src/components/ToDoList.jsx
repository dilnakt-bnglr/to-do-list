import ToDoItem from "./ToDoItem";

function ToDoList({ todoInputs }) {
  return (
    <>
      <h3>To Do List</h3>
      {todoInputs.map((data) => (
        <ToDoItem todoItem={data} />
      ))}
    </>
  );
}
export default ToDoList;
