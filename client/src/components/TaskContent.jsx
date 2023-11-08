import React, { useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Toaster } from 'react-hot-toast';
import CreateTask from './CreateTask';
import ListTasks from './ListTasks';
import NavBar from './NavBar';

const TaskContent = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem("tasks"));
        setTasks(storedTasks || []);
    }, []);
    return (
        <DndProvider backend={HTML5Backend}>
            <Toaster />
            <NavBar />
            <h1 className="bg-slate-100 w-full h-screen flex flex-col items-center p-3 pt-32 gap-16 ">
                <CreateTask tasks={tasks} setTasks={setTasks} />
                <ListTasks tasks={tasks} setTasks={setTasks} />
            </h1>
        </DndProvider>
    )
}

export default TaskContent
