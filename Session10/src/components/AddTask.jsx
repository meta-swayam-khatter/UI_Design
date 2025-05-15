"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { format, formatDate } from "date-fns"
import { z } from "zod"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogClose
} from "./ui/dialog"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useContext, useState } from "react"
import { TaskContext } from "@/context/TaskContext"


const FormSchema = z.object({
    title: z.string().min(2, {
        message: "title must be at least 2 characters.",
    }),
    description: z.string().min(2, {
        message: "title must be at least 2 characters.",
    }),
    creationDate: z.date({
        required_error: "A date of birth is required.",
    }),
    status: z.enum(["new", "in-progress", "completed"], {
        required_error: "You need to select a status.",
    }),
    priority: z.enum(["1", "2", "3"], {
        required_error: "You need to select a priority.",
    }),
})

export function AddTask() {
    const { tasks, setTasks, count, setCount } = useContext(TaskContext);
    const [modalOpen, setModalOpen] = useState(false);

    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            title: "",
            description: "",
            creationDate: new Date(),
            completionDate: "",
            status: "new",
            priority: "3"
        },
    })

    function onSubmit(data) {
        const task = {
            "id": count+1,
            "title": data.title?data.title:"",
            "description": data.description?data.description:"",
            "priority" : data.priority?data.priority:"",
            "status": data.status?data.status:"",
            "creationDate": data.creationDate?new Date().toLocaleDateString():"",
            "completionDate": data.completionDate?data.completionDate:""
        };
        console.log("on submit: ", task)
        setTasks([...tasks, task]);
        setCount(count+1);
        setModalOpen(false);
        form.reset();
    }

    return (
        <Dialog open={modalOpen} onOpenChange={setModalOpen}>
            <DialogTrigger>
                <Button className="px-6 py-2 rounded-lg border-2 border-blue-400">New Task</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add Task Details</DialogTitle>
                    <DialogDescription>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <FormField
                                    control={form.control}
                                    name="title"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Title</FormLabel>
                                            <FormControl>
                                                <Input value="title" placeholder="Task Title" {...field} />
                                            </FormControl>
                                        </FormItem>

                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="description"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Description</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="Task Description"
                                                    className="resize-none"
                                                    {...field}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="creationDate"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Creation Date</FormLabel>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <FormControl>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                "pl-3 text-left font-normal",
                                                                !field.value && "text-muted-foreground"
                                                            )}
                                                        >
                                                            {field.value ? (
                                                                format(field.value, "PPP")
                                                            ) : (
                                                                <span>Add Creation Date</span>
                                                            )}
                                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                        </Button>
                                                    </FormControl>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0" align="start">
                                                    <Calendar
                                                        mode="single"
                                                        selected={field.value}
                                                        onSelect={field.onChange}
                                                        disabled={(date) =>
                                                            date > new Date() || date < new Date("1900-01-01")
                                                        }
                                                        initialFocus
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="completionDate"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Completion Date</FormLabel>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <FormControl>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                "pl-3 text-left font-normal",
                                                                !field.value && "text-muted-foreground"
                                                            )}
                                                        >
                                                            {field.value ? (
                                                                format(field.value, "PPP")
                                                            ) : (
                                                                <span>Add Completion Date (if task is done)</span>
                                                            )}
                                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                        </Button>
                                                    </FormControl>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0" align="start">
                                                    <Calendar
                                                        mode="single"
                                                        selected={field.value}
                                                        onSelect={field.onChange}
                                                        disabled={(date) =>
                                                            date > new Date() || date < new Date("1900-01-01")
                                                        }
                                                        initialFocus
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                        </FormItem>
                                    )}
                                />
                                <div className="flex">
                                    <div className="w-1/2 px-6">
                                        <FormField
                                            control={form.control}
                                            name="status"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Status</FormLabel>
                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                        <FormControl>
                                                            <SelectTrigger>
                                                                <SelectValue placeholder="Select a status" />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent>
                                                            <SelectItem value="new">New</SelectItem>
                                                            <SelectItem value="in-progress">In Progress</SelectItem>
                                                            <SelectItem value="completed">Completed</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className="w-1/2 px-6">
                                        <FormField
                                            control={form.control}
                                            name="priority"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Priority</FormLabel>
                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                        <FormControl>
                                                            <SelectTrigger>
                                                                <SelectValue placeholder="Select a priority" />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent>
                                                            <SelectItem value="1">High</SelectItem>
                                                            <SelectItem value="2">Medium</SelectItem>
                                                            <SelectItem value="3">Low</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-around">
                                    <Button type="submit">Submit</Button>
                                    <DialogClose asChild>
                                        <Button type="button" variant="secondary">
                                            Close
                                        </Button>
                                    </DialogClose>
                                </div>
                            </form>
                        </Form>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog >
    )
}
