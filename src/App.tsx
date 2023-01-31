import React, { useState } from 'react';
import './App.css';
import { TaskType, Todolist } from './Todolist';

function App() {
  // можна експортувати TaskType з Todolst.tsx, щоб tasks відповідав масиву об'єктів TaskType - мінімізує імовірність помилки при формуванні об'єктів
  // let tasks: TaskType[] = [
  let initTasks: Array<TaskType> = [
    { id: 1, title: "CSS&HTML", isDone: true },
    { id: 2, title: "JavaScript", isDone: true },
    { id: 3, title: "React", isDone: false },
    { id: 4, title: "Redux", isDone: false }
  ]

  // Локальний state для tasks
  let [tasks, setTasks] = useState(initTasks);

  // ф-ція для видалення task
  function removeTask(id: number) {
    let filteredTasks = tasks.filter(t => t.id !== id); // При "t.id !== id" (=true) проходить фільтрацію
    setTasks(filteredTasks);
  }

  return (
    <div className="App">
      <Todolist title="What to learn" tasks={tasks} removeTask={removeTask} />
    </div>
  );
}

export default App;
