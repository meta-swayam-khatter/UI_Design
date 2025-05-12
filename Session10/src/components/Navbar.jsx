import React from 'react'
import { Button } from "./ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog"
import { Addnote } from './Addnote'

const Navbar = () => {
    return (
        <>
            <nav className='flex w-full h-[70px] justify-between items-center px-24 border-b-3 border-gray-300'>
                <div className='font-semibold text-3xl text-blue-400'>My Task Tracker</div>
                <div>
                    {/* <Dialog>
                        <Button variant={"outline"} className="px-6 border-blue-400"><DialogTrigger>New Task</DialogTrigger></Button>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Add Note Details</DialogTitle>
                                <DialogDescription> */}
                                    <Addnote />
                                {/* </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog> */}
                </div>
            </nav>
        </>
    )
}

export default Navbar