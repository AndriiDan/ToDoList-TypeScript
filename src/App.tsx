import React from 'react';
import './App.css';
import { TaskType, Todolist } from './Todolist';

// можна експортувати TaskType з Todolst.tsx, щоб tasks відповідав масиву об'єктів TaskType - мінімізує імовірність помилки при формуванні об'єктів
// let tasks: TaskType[] = [
let tasks: Array<TaskType> = [
  { id: 1, title: "CSS&HTML", isDone: true },
  { id: 2, title: "JavaScript", isDone: true },
  { id: 3, title: "React", isDone: false },
  { id: 4, title: "Redux", isDone: false }
]

// ф-ція для видалення task
function removeTask(id: number) {
  tasks = tasks.filter(t => t.id !== id); // При "t.id !== id" (=true) проходить фільтрацію
  console.log(tasks);
}

function App() {
  return (
    <div className="App">
      <Todolist title="What to learn" tasks={tasks} removeTask={removeTask} />
    </div>
  );
}

export default App;
