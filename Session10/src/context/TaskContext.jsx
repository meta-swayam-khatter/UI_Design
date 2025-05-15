import React, { createContext, useState } from 'react';
const TaskContext = createContext();


const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([
        {
            "id": 1,
            "title": "Task1",
            "description": "Task description1",
            "priority": "3",
            "status": "new",
            "creationDate": "01/02/2025"
        },
        {
            "id": 2,
            "title": "Task2",
            "description": "Task description2",
            "priority": "2",
            "status": "new",
            "creationDate": "01/02/2025"
        },
        {
            "id": 3,
            "title": "Task3",
            "description": "Task description3",
            "priority": "3",
            "status": "in-progress",
            "creationDate": "01/02/2025"
        },

        {
            "id": 4,
            "title": "Task4",
            "description": "Task description4",
            "priority": "1",
            "status": "completed",
            "creationDate": "01/02/2025",
            "completionDate": "10/02/2025"
        },

        {
            "id": 5,
            "title": "Task5",
            "description": "Task description5",
            "priority": "1",
            "status": "new",
            "creationDate": "01/02/2025"
        },
        {
            "id": 6,
            "title": "Task6",
            "description": "Task description6",
            "priority": "1",
            "status": "completed",
            "creationDate": "01/02/2025",
            "completionDate": "10/02/2025"
        }
    ])
    const [count, setCount] = useState(tasks.length);
    const [task, setTask] = useState();

    return (
        <TaskContext.Provider value={{ tasks, setTasks, count, setCount, task, setTask }}>
            {children}
        </TaskContext.Provider>
    );
}

export { TaskContext, TaskProvider };