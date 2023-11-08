import React from 'react';
import { useDrop } from 'react-dnd';
import toast from 'react-hot-toast';
import { Header } from './Header';
import { Task } from './Task';

export const Section = ({ status, tasks, setTasks, toCheck, todos, inProgress, closed }) => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "task",
        drop: (item) => addItemToSection(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))

    let tasksToMap = todos;
    let bg = "bg-slate-500";
    let text = "Todo";

    if (status === "inprogress") {
        text = "In progress"
        bg = "bg-purple-500"
        tasksToMap = inProgress
    }

    if (status === "closed") {
        text = "Closed"
        bg = "bg-blue-500"
        tasksToMap = closed
    }

    if (status === "to-check") {
        text = "Ready for checking"
        bg = "bg-green-500"
        tasksToMap = toCheck
    }

    const addItemToSection = (id) => {
        setTasks(prev => {
            const mTasks = prev.map(t => {
                if (t.id === id) {
                    return {
                        ...t,
                        status: status
                    }
                }
                return t;
            })
            localStorage.setItem("tasks", JSON.stringify(mTasks))
            toast("Task status changed", { icon: "😎" })
            return mTasks;
        })
    }


    return <div ref={drop} className={`rounded-md p-2 w-64 ${isOver ? "bg-slate-200" : ""}`} >
        <Header text={text} bg={bg} count={tasksToMap.length} />
        {tasksToMap.length > 0 && tasksToMap.map(task => <Task key={task.id} tasks={tasks} setTasks={setTasks} task={task}/>)}
    </div>
}
