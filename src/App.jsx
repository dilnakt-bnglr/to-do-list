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

  const handleEditTask = (taskToEdit) => {
    if (taskToEdit.isCompleted) {
      return;
    }
    const editTask = toDoTask.map((task) => {
      if (task.id === taskToEdit.id) {
        task.isEditable = true;
      }
      return task;
    });
    setToDoTask(editTask);
  };

  const handleUpdate = (taskToUpdate, updatedTask) => {
    if (!updatedTask) {
      return;
    }
    const updated = toDoTask.map((task) => {
      if (task.id === taskToUpdate.id) {
        task.task = updatedTask;
        task.isEditable = false;
      }
      return task;
    });
    setToDoTask(updated);
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
          handleEditTask={handleEditTask}
          handleUpdate={handleUpdate}
        />
      </div>
    </div>
  );
}
export default App;
