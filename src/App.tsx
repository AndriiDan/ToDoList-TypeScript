import React from 'react';
import './App.css';
import { TaskType, Todolist } from './Todolist';

let tasks1 = [
  { id: 1, title: "CSS&HTML", isDone: true },
  { id: 2, title: "JavaScript", isDone: true },
  { id: 3, title: "React", isDone: false }
]

// можна експортувати TaskType з Todolst.tsx, щоб tasks2 відповідав масиву об'єктів TaskType - мінімізує імовірність помилки при формуванні об'єктів
// let tasks2: TaskType[] = [
let tasks2: Array<TaskType> = [
  { id: 1, title: "Terminator", isDone: true },
  { id: 2, title: "XXX", isDone: false },
  { id: 3, title: "Jentelmens", isDone: true }
]

function App() {
  return (
    <div className="App">
      <Todolist title="What to learn" tasks={tasks1} />
      <Todolist title="Movies" tasks={tasks2} />
    </div>
  );
}

export default App;
