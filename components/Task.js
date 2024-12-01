// components/Task.js
import React from 'react';

const Task = ({ task, toggleTask, deleteTask }) => {
    return (
        <div className="task">
            <input 
                type="checkbox" 
                checked={task.isCompleted} 
                onChange={() => toggleTask(task.id)} 
                disabled={task.isCompleted}
            />
            <span className={task.isCompleted ? 'completed' : ''}>{task.text}</span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
    );
};

export default Task;
