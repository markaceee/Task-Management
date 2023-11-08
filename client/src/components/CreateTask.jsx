import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';

const CreateTask = ({tasks, setTasks}) => {

    const [task, setTask] = useState({
        id: "",
        name: "",
        assignedTo: "",
        due: "",
        status: "todo" // can also be inprogress or closed
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if(task.name.length < 3)
            return toast.error("A task must have more than 3 characters");
        else if(task.name.length > 100)
            return toast.error("A task must not have more than 100 characters");
        setTasks((prev) => {
            const list = [...prev, task];
            localStorage.setItem("tasks", JSON.stringify(list));
            setTask({ id: "", name: "", assignedTo: "", status: "todo" });
            return list;
        })

        toast.success("Task Created");

    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                className='border-2 border-slate-400 bg-slate-100 rounded-md mr-4 h-12 w-64 px-2'
                type="text"
                onChange={(e) => setTask({...task, id: uuidv4(), name: e.target.value}) }
                value={task.name}
                required
            />

            <button className='bg-cyan-500 rounded-md px-4 h-12 text-white'>Create</button>
        </form>
    )
}

export default CreateTask