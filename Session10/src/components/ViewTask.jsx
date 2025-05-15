import React, { useContext, useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Button } from './ui/button'
import { Check, CheckCheck, SquarePen, Trash } from 'lucide-react'
import { TaskContext } from '@/context/TaskContext'
import { EditTask } from './Edittask'

const ViewTask = ({ task }) => {

    const [modalOpen, setModalOpen] = useState(false);
    let { count, setCount, tasks, setTasks } = useContext(TaskContext);

    function startTask() {
        setCount(count++);
        task.status = "in-progress";
        setCount(count--);
    }

    function completeTask() {
        setCount(count++);
        task.status = "completed";
        setCount(count--);
    }

    function deleteTask() {
        setTasks(tasks.filter(t => t.id != task.id));
        setCount(count - 1);
    }

    return (
        <Dialog open={modalOpen} onOpenChange={setModalOpen}>
            <DialogTrigger asChild>
                <div className={`bg-white m-2 rounded-md border-2 h-[7em] transition duration-300 ease-in-out hover:scale-101 relative`}>
                    <div className={`p-2 text-lg font-bold rounded-md ${task.priority == "1" ? "bg-orange-300" : task.priority == "2" ? "bg-blue-300" : "bg-green-300"}`}>{task.title}</div>
                    <div className=' h-[4em] px-2 rounded-md'>
                        <div>Priority: {task.priority == "1" ? "high" : task.priority == "2" ? "medium" : "low"}</div>
                        <div>{`${task.creationDate} ${task.completionDate ? `- ${task.completionDate}` : ""}`}</div>
                    </div>
                </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{task.title}</DialogTitle>
                    <DialogDescription>
                        {task.description}<br />
                        status: {task.status}<br />
                        priority: {task.priority == 1 ? "High" : task.priority == 2 ? "Medium" : "Low"}<br />
                        creation date: {task.creationDate}<br />
                        {`${task.completionDate ? `completion date: ${task.completionDate}` : ""}`}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    {task.status == "new" && <Button onClick={() => { startTask() }}><Check /></Button>}
                    {task.status == "in-progress" && <Button onClick={() => { completeTask() }}><CheckCheck /></Button>}
                    {task.status != "completed" && <EditTask task={task} />}
                    <Button onClick={() => { deleteTask() }}><Trash /></Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default ViewTask