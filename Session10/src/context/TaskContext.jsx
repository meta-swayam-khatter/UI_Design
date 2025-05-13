import React, { createContext, useState } from 'react';
const TaskContext = createContext();


const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([])
    const [count, setCount] = useState(0);

    return (
        <TaskContext.Provider value={{ tasks, setTasks, count, setCount }}>
            {children}
        </TaskContext.Provider>
    );
}

export { TaskContext, TaskProvider };