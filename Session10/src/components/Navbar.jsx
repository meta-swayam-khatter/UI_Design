import React from 'react'
import { AddTask } from './AddTask'

const Navbar = () => {
    return (
        <>
            <nav className='flex w-full h-[70px] justify-between items-center px-24 border-b-3 border-gray-300'>
                <div className='font-semibold text-3xl text-blue-400'>My Task Tracker</div>
                <AddTask />
            </nav>
        </>
    )
}

export default Navbar