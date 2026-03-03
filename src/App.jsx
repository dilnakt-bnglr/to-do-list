import { useState } from "react";
import Header from "./components/Header";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";
import "./App.css";

function App() {
  const [toDoTask, setToDoTask] = useState([]);

  const handleDeleteTask = (itemToDelete) => {
    const listAfterDeletion = toDoTask.filter(
      (task) => task.id != itemToDelete.id,
    );
    setToDoTask(listAfterDeletion);
  };

  const handleCompleted = (taskCompleted, event) => {
    console.log(event.target.checked);
    const completedTask = toDoTask.map((task) => {
      if (task.id === taskCompleted.id) {
        task.isCompleted = event.target.checked;
      }
      return task;
    });

    setToDoTask(completedTask);
  };
  return (
    <div className="main-container">
      <div className="content">
        <Header />
        <ToDoInput tasks={toDoTask} setToDoTask={setToDoTask} />
        <ToDoList
          todoInputs={toDoTask}
          handleDeleteTask={handleDeleteTask}
          handleCompleted={handleCompleted}
        />
      </div>
    </div>
  );
}
export default App;
