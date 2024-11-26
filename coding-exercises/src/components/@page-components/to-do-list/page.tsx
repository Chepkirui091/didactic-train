"use client"

import React, {useState} from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";


type Task = {
    id: number;
    text: string;
}

const TodoList:React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [input, setInput] = useState<string>('');

    const addTask = () => {
        if (input.trim()) {
            setTasks((prev) => [...prev, { id: Date.now(), text: input }]);
            setInput('');
        }
    };

    const removeTask = (id: number) => {
        setTasks((prev) => prev.filter((task) => task.id !== id));
    };

    return (
        <div>
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Add a task" />
            <button onClick={addTask}>Add</button>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        {task.text} <button onClick={() => removeTask(task.id)}><RiDeleteBin6Line/></button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;