import React, { useContext, useState } from 'react'
import data from '../data'
import { Eye } from 'lucide-react';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter } from './ui/dialog';
import { DialogDescription, DialogTitle } from '@radix-ui/react-dialog';
import { Label } from '@radix-ui/react-label';
import { Input } from './ui/input';
import { Button } from 'react-day-picker';
import ViewTask from './ViewTask';
import { TaskContext } from '../context/TaskContext';

const Tasks = () => {
    // const data = useContext(TaskContext);
    const [newTasks] = useState(data.length > 0 ? data.filter(e => e.status == 'new').sort((a, b) => a.priority - b.priority): []);
    const [inProgressTasks] = useState(data.length > 0 ? data.filter(e => e.status == 'in-progress').sort((a, b) => a.priority - b.priority) : []);
    const [completedTasks] = useState(data.length > 0 ? data.filter(e => e.status == 'completed').sort((a, b) => a.priority - b.priority) : []);

    return (
        <>
            <div className='flex justify-around p-6'>
                <div className='w-1/4 h-[80vh] bg-gray-300 rounded-md overflow-auto hover:cursor-pointer'>
                    <div className='flex justify-center text-md font-bold text-gray-700 p-2'>New</div>
                    {newTasks.map(task => (
                        <ViewTask key={task.id} task={task} />
                    ))}
                </div>
                <div className='w-1/4 h-[80vh] bg-gray-300 rounded-md overflow-auto hover:cursor-pointer'>
                    <div className='flex justify-center text-md font-bold text-gray-700 p-2'>In Progress</div>
                    {inProgressTasks.map(task => (
                        // <div className={`m-2 rounded-md border-2 h-[7em] transition duration-300 ease-in-out hover:scale-101 relative`}>
                        //     <div className={`p-2 text-lg font-bold rounded-md ${task.priority == "1" ? "bg-red-300" : task.priority == "2" ? "bg-blue-300" : "bg-green-300"}`}>{task.title}</div>
                        //     <div className='bg-white h-[4em] px-2 rounded-md'>
                        //         <div>Priority: {task.priority == "1" ? "high" : task.priority == "2" ? "medium" : "low"}</div>
                        //         <div>{task.creationDate} - {task.completionDate}</div>
                        //     </div>
                        // </div>
                        <ViewTask key={task.id} task={task} />
                    ))}
                </div>
                <div className='w-1/4 h-[80vh] bg-gray-300 rounded-md overflow-auto hover:cursor-pointer'>
                    <div className='flex justify-center text-md font-bold text-gray-700 p-2'>Completed</div>
                    {completedTasks.map(task => (
                        <ViewTask key={task.id} task={task} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Tasks