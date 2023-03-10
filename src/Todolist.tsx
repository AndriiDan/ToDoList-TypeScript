import React from 'react';
import { FilterValueType } from './App';

// типізація props
export type TaskType = {
  id: number,
  title: string,
  isDone: boolean
}

// типізація props
type PropsType = {
  title: string
  tasks: Array<TaskType>    // або task: TaskType[]
  removeTask: (id: number) => void    // на вході приймає (id: number), а на виході нічого не повертає (void)
  changeFilter: (value: FilterValueType) => void    // на вході приймає (value: FilterValueType), а на виході нічого не повертає (void)
}

// компонент для створення Todolist
export function Todolist(props: PropsType) {
  return (
    <div>
      <h3>{props.title}</h3>

      <div>
        <input />
        <button>+</button>
      </div>

      <ul>
        {
          props.tasks.map(t => <li><input type="checkbox" checked={t.isDone} /><span>{t.title}</span><button onClick={() => { props.removeTask(t.id) }}>x</button></li>)
        }
      </ul>

      <div>
        <button onClick={() => { props.changeFilter("all") }}>All</button>
        <button onClick={() => { props.changeFilter("active") }}>Active</button>
        <button onClick={() => { props.changeFilter("completed") }}>Completed</button>
      </div>
    </div>
  );
}
