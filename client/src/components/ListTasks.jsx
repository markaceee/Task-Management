import React, { useEffect, useState } from 'react';
import { Section } from './Section';

const ListTasks = ({ tasks, setTasks }) => {

    const [todos, setTodos] = useState([]);
    const [inProgress, setInProgress] = useState([]);
    const [toCheck, setToCheck] = useState([]);
    const [closed, setClosed] = useState([]);

    useEffect(() => {
        const fTodos = tasks.filter(task => task.status === "todo");
        const fInProgress = tasks.filter(task => task.status === "inprogress");
        const fToCheck = tasks.filter(task => task.status === "to-check");
        const fClosed = tasks.filter(task => task.status === "closed");

        setTodos(fTodos);
        setToCheck(fToCheck);
        setInProgress(fInProgress);
        setClosed(fClosed);
    }, [tasks])



    const fourStatus = ["todo", "inprogress", "to-check", "closed"];

    return (
        <div className='flex gap-16'>
            {fourStatus.map((status, index) =>
                <Section
                    key={index}
                    status={status}
                    tasks={tasks}
                    setTasks={setTasks}
                    toCheck={toCheck}
                    todos={todos}
                    inProgress={inProgress}
                    closed={closed}
                />)}
        </div>
    )
}

export default ListTasks







