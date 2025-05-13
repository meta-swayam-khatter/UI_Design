import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Button } from './ui/button'
import { Check, CheckCheck, SquarePen, Trash } from 'lucide-react'

const ViewTask = ({ task }) => {
    return (
        <Dialog>
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
                        {task.description}<br/>
                        status: {task.status}<br/>
                        priority: {task.priority}<br/>
                        creation date: {task.creationDate}<br/>
                        {`${task.completionDate ? `completion date: ${task.completionDate}` : ""}`}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    {task.status == "new" && <Button ><Check /></Button>}
                    {task.status == "in-progress" && <Button ><CheckCheck /></Button>}
                    {task.status != "completed" && <Button ><SquarePen /></Button>}
                    <Button ><Trash /></Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default ViewTask