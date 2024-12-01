// pages/index.js
import React, { useState } from 'react';
import Task from '../components/Task';
import TaskForm from '../components/TaskForm';

const Home = () => {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('all'); // New filter state

    const addTask = (text) => {
        const newTask = { id: Date.now(), text, isCompleted: false };
        setTasks([...tasks, newTask]);
    };

    const toggleTask = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
        ));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const remainingTasks = tasks.filter(task => !task.isCompleted).length;

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const filteredTasks = tasks.filter(task => {
        if (filter === 'completed') {
            return task.isCompleted;
        } else if (filter === 'pending') {
            return !task.isCompleted;
        } else {
            return true;
        }
    });

    return (
        <div className="app">
            <h1>Day Planner App</h1>
            <TaskForm addTask={addTask} />
            <h2>{remainingTasks} tasks remaining</h2>
            <div>
                <label>
                    Show:
                    <select value={filter} onChange={handleFilterChange}>
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="pending">Pending</option>
                    </select>
                </label>
            </div>
            {filteredTasks.map(task => (
                <Task 
                    key={task.id} 
                    task={task} 
                    toggleTask={toggleTask} 
                    deleteTask={deleteTask} 
                />
            ))}
        </div>
    );
};

export default Home;
