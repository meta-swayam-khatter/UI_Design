import React, { useContext, useEffect, useState } from 'react'
// import data from '../data'
import { Eye } from 'lucide-react';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter } from './ui/dialog';
import { DialogDescription, DialogTitle } from '@radix-ui/react-dialog';
import { Label } from '@radix-ui/react-label';
import { Input } from './ui/input';
import { Button } from 'react-day-picker';
import ViewTask from './ViewTask';
import { TaskContext } from '../context/TaskContext';

const Tasks = () => {
    const {tasks, count} = useContext(TaskContext);
    // const [newTasks, setNewTasks] = useState(tasks.length > 0 ? tasks.filter(e => e.status == 'new').sort((a, b) => a.priority - b.priority): []);
    // const [inProgressTasks, setInProgressTasks] = useState(tasks.length > 0 ? tasks.filter(e => e.status == 'in-progress').sort((a, b) => a.priority - b.priority) : []);
    // const [completedTasks, setCompletedTasks] = useState(tasks.length > 0 ? tasks.filter(e => e.status == 'completed').sort((a, b) => a.priority - b.priority) : []);
    
    // useEffect(()=>{
        // setNewTasks(tasks.length > 0 ? tasks.filter(e => e.status == 'new').sort((a, b) => a.priority - b.priority): []);
        // setInProgressTasks(tasks.length > 0 ? tasks.filter(e => e.status == 'in-progress').sort((a, b) => a.priority - b.priority) : []);
        // setCompletedTasks(tasks.length > 0 ? tasks.filter(e => e.status == 'completed').sort((a, b) => a.priority - b.priority) : []);
    // }, [count])

    return (
        <>
            <div className='flex justify-around p-6'>
                <div className='w-1/4 h-[80vh] bg-gray-300 rounded-md overflow-auto hover:cursor-pointer'>
                    <div className='flex justify-center text-md font-bold text-gray-700 p-2'>New</div>
                    {tasks.filter(task=>task.status==="new").map(task => (
                        <ViewTask key={task.id} task={task} />
                    ))}
                </div>
                <div className='w-1/4 h-[80vh] bg-gray-300 rounded-md overflow-auto hover:cursor-pointer'>
                    <div className='flex justify-center text-md font-bold text-gray-700 p-2'>In Progress</div>
                    {tasks.filter(task=>task.status==="in-progress").map(task => (
                        <ViewTask key={task.id} task={task} />
                    ))}
                </div>
                <div className='w-1/4 h-[80vh] bg-gray-300 rounded-md overflow-auto hover:cursor-pointer'>
                    <div className='flex justify-center text-md font-bold text-gray-700 p-2'>Completed</div>
                    {tasks.filter(task=>task.status==="completed").map(task => (
                        <ViewTask key={task.id} task={task} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Tasks