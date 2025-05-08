import './App.css'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function App() {
  return (
    <>
      <div className="main">
        <div className='header flex justify-between px-8 py-2 border-b-2 border-gray-300'>
          <div className="heading text-xl text-blue-400 font-medium">My Task Tracker</div>
          <div className="addButton">
            <button className='border-2 border-solid border-blue-400 px-4 py-1 rounded-md '>New Task</button>
          </div>
        </div>
        <div className="tasks flex justify-evenly gap-3 p-2">
          <div className="newTasks w-1/5 bg-gray-200 rounded-md">
            <div className="title flex justify-center text-lg font-medium text-gray-600">New</div>
          </div>
          <div className="inProgressTasks w-1/5 bg-gray-200 rounded-md">
            <div className="title flex justify-center text-lg font-medium text-gray-600">In Progress</div>
          </div>
          <div className="completedTasks w-1/5 bg-gray-200 rounded-md">
            <div className="title flex justify-center text-lg font-medium text-gray-600">Completed</div>
          </div>
        </div>
      </div>
      <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </>
  )
}

export default App
