import React, { useState } from 'react';
import Task from '../components/Task';
import TaskForm from '../components/TaskForm';

const Home = () => {
    const [tasks, setTasks] = useState([]);

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

    return (
        <div className="container">
            <h1>Day Planner App</h1>
            <TaskForm addTask={addTask} />
            <h2>{remainingTasks} tasks remaining</h2>
            {tasks.map(task => (
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
