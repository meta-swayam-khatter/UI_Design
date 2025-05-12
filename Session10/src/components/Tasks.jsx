import React, { useState } from 'react'
import data from '../data'
import { Eye } from 'lucide-react';

const Tasks = () => {
    const [newTasks] = useState(data.filter(e => e.status == 'new').sort((a,b) => a.priority - b.priority));
    const [inProgressTasks] = useState(data.filter(e => e.status == 'in-progress').sort((a,b) => a.priority - b.priority));
    const [completedTasks] = useState(data.filter(e => e.status == 'completed').sort((a,b) => a.priority - b.priority));

    return (
        <div className='flex justify-around p-6'>
            <div className='w-1/4 h-[80vh] bg-gray-300 rounded-md'>
                <div className='flex justify-center text-md font-bold text-gray-700 p-2'>New</div>
                {newTasks.map(task => (
                    <div className={`${task.priority == "1" ? "bg-red-300" : task.priority == "2" ? "bg-blue-300" : "bg-green-300"} p-2 m-2 rounded-md border-1 h-[6.5em] transition duration-300 ease-in-out hover:scale-101 relative`}>
                        <div className='text-lg font-bold'>{task.title}</div>
                        <div>Priority: {task.priority == "1" ? "high" : task.priority == "2" ? "medium" : "low"}</div>
                        <div>{task.creationDate}</div>
                        <button className='absolute top-1 right-1 px-2 py-1 rounded-lg bg-blue-500 hover:bg-blue-600'><Eye /></button>
                    </div>
                ))}
            </div>
            <div className='w-1/4 h-[80vh] bg-gray-300 rounded-md'>
                <div className='flex justify-center text-md font-bold text-gray-700 p-2'>In Progress</div>
                {inProgressTasks.map(task => (
                    <div className={`${task.priority == "1" ? "bg-red-300" : task.priority == "2" ? "bg-blue-300" : "bg-green-300"} p-2 m-2 rounded-md border-1 h-[6.5em] transition duration-300 ease-in-out hover:scale-101 relative`}>
                        <div className='text-lg font-bold'>{task.title}</div>
                        <div>Priority: {task.priority == "1" ? "high" : task.priority == "2" ? "medium" : "low"}</div>
                        <div>{task.creationDate}</div>
                        <button className='absolute top-1 right-1 px-2 py-1 rounded-lg bg-blue-500 hover:bg-blue-600'><Eye /></button>
                    </div>
                ))}
            </div>
            <div className='w-1/4 h-[80vh] bg-gray-300 rounded-md'>
                <div className='flex justify-center text-md font-bold text-gray-700 p-2'>Completed</div>
                {completedTasks.map(task => (
                    <div className={`${task.priority == "1" ? "bg-red-300" : task.priority == "2" ? "bg-blue-300" : "bg-green-300"} p-2 m-2 rounded-md border-1 h-[6.5em] transition duration-300 ease-in-out hover:scale-101 relative`}>
                        <div className='text-lg font-bold'>{task.title}</div>
                        <div>Priority: {task.priority == "1" ? "high" : task.priority == "2" ? "medium" : "low"}</div>
                        <div>{task.creationDate} - {task.completionDate}</div>
                        <button className='absolute top-1 right-1 px-2 py-1 rounded-lg bg-blue-500 hover:bg-blue-600'><Eye /></button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Tasks