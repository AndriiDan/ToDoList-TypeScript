import React, { useState } from 'react';
import './App.css';
import { TaskType, Todolist } from './Todolist';

// Типізація для фільтра
export type FilterValueType = "all" | "active" | "completed";

function App() {

  // Локальний state для tasks
  let [tasks, setTasks] = useState<Array<TaskType>>([
    { id: 1, title: "CSS&HTML", isDone: true },
    { id: 2, title: "JavaScript", isDone: true },
    { id: 3, title: "React", isDone: false },
    { id: 4, title: "Redux", isDone: false }
  ]);

  // state для tasks for ToodList
  let [filter, setFilter] = useState<FilterValueType>("all");

  // ф-ція для видалення task
  function removeTask(id: number) {
    let filteredTasks = tasks.filter(t => t.id !== id); // При "t.id !== id" (=true) проходить фільтрацію
    setTasks(filteredTasks);
  }

  // ф-ція для зміни значення фільтра
  function changeFilter(value: FilterValueType) {
    setFilter(value);
  };

  // tasks які потраплять в TodoList
  let tasksForTotolist = tasks;
  if (filter === "completed") {
    tasksForTotolist = tasks.filter(t => t.isDone === true);
  };
  if (filter === "active") {
    tasksForTotolist = tasks.filter(t => t.isDone === false);
  };

  return (
    <div className="App">
      <Todolist title="What to learn" tasks={tasksForTotolist} removeTask={removeTask} changeFilter={changeFilter} />
    </div>
  );
}

export default App;
