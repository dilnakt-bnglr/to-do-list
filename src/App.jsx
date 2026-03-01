import { useState } from "react";
import Header from "./components/Header";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";

function App() {
  const [toDoTask, setToDoTask] = useState([]);
  return (
    <>
      <h1>App component</h1>
      <Header />
      <ToDoInput tasks={toDoTask} setToDoTask={setToDoTask} />
      <ToDoList todoInputs={toDoTask} />
    </>
  );
}
export default App;
