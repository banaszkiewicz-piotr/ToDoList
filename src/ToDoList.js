import TodoItem from './ToDoItem';
import React from 'react';
import { useState } from 'react';

//source --> https://medium.com/@worachote/building-a-todo-list-app-with-reactjs-a-step-by-step-guide-2c58b9b6c0f5

function ToDoList() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Wizyta lekarska',
            completed: true
        },
        {
            id: 2,
            text: 'Spotkanie',
            completed: false
        }
    ]);

    const [text, setText] = useState('');

    function addTask(text) {
        const newTask = {
            id: Date.now(),
            text,
            completed: false
        };
        setTasks([tasks, newTask]);
        setText('');
    }

    function deleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }

    function toggleCompleted(id) {
        setTasks(tasks.map(task => {
            if(task.id === id)
            {
                return {task, completed: !task.completed};
            }
            else
            {
                return task;
            }
        }));
    }
    return(
        <div className="todo-list">
            {tasks.map(task => (
                <TodoItem key={task.id} task={task} deleteTask={deleteTask} toggleCompleted={toggleCompleted} />
            ))}
            <input value={text} onChange={e => setText(e.target.value)} />
            <button onClick={() => addTask(text)}>Add</button>
        </div>
    );
}
export default ToDoList;