import { Combobox, Dialog, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import React, { Fragment, useRef, useState } from 'react';
import { useDrag } from 'react-dnd';
import toast from 'react-hot-toast';

export const Task = ({ task, tasks, setTasks }) => {
    const [open, setOpen] = useState(false)
    const cancelButtonRef = useRef(null)


    const [{ isDragging }, drag] = useDrag(() => ({
        type: "task",
        item: { id: task.id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    const handleRemove = (id) => {
        const fTasks = tasks.filter(t => t.id !== id);
        localStorage.setItem("tasks", JSON.stringify(fTasks));
        setTasks(fTasks);
        toast("Task removed", { icon: "😝" });
    }

    const showModal = () => {
        setOpen(true)
    }

    const people = [
        { id: 1, name: 'Wade Cooper' },
        { id: 2, name: 'Arlene Mccoy' },
        { id: 3, name: 'Devon Webb' },
        { id: 4, name: 'Tom Cook' },
        { id: 5, name: 'Tanya Fox' },
        { id: 6, name: 'Hellen Schmidt' },
    ]

    const [selected, setSelected] = useState(people[0])
    const [query, setQuery] = useState('')

    const filteredPeople =
        query === ''
            ? people
            : people.filter((person) =>
                person.name
                    .toLowerCase()
                    .replace(/\s+/g, '')
                    .includes(query.toLowerCase().replace(/\s+/g, ''))
            )

    const assignTaskTo = (taskId, selectedPerson) => {

        const updatedTasks = tasks.map(task => {
            if (task.id === taskId) {
                return {
                    ...task,
                    assignedTo: selectedPerson
                };
            }
            return task;
        });

        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        setTasks(updatedTasks);
        setOpen(false);
        toast("Task assigned", { icon: "😨" });
    }

    return <>
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">

                                {/* <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <div className="flex justify-between items-center sm:flex sm:items-start">
                                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                                            <ExclamationTriangleIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                                        </div>
                                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                                <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                                            </div>
                                        </div>
                                    </div>
                                </div> */}

                                <div className="bg-white w-full p-6 sm:px-6 sm:pb-4">
                                    <Dialog.Title as="h3" className="text-base leading-6 text-gray-900">
                                        <span className='font-semibold'>Task name:</span>  {task.name}
                                    </Dialog.Title>
                                    <div className="mt-2 w-full">
                                        <span className='font-semibold mr-2 '>Assigned to:</span>
                                        <Combobox value={selected} onChange={setSelected}>
                                            <div className="relative mt-1">
                                                <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                                                    <Combobox.Input
                                                        className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                                                        displayValue={(person) => person.name}
                                                        onChange={(event) => setQuery(event.target.value)}
                                                    />
                                                    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                                                        <ChevronUpDownIcon
                                                            className="h-5 w-5 text-gray-400"
                                                            aria-hidden="true"
                                                        />
                                                    </Combobox.Button>
                                                </div>
                                                <Transition
                                                    as={Fragment}
                                                    leave="transition ease-in duration-100"
                                                    leaveFrom="opacity-100"
                                                    leaveTo="opacity-0"
                                                    afterLeave={() => setQuery('')}
                                                >
                                                    <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                                        {filteredPeople.length === 0 && query !== '' ? (
                                                            <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                                                Nothing found.
                                                            </div>
                                                        ) : (
                                                            filteredPeople.map((person) => (
                                                                <Combobox.Option
                                                                    key={person.id}
                                                                    className={({ active }) =>
                                                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-teal-600 text-white' : 'text-gray-900'
                                                                        }`
                                                                    }
                                                                    value={person}
                                                                >
                                                                    {({ selected, active }) => (
                                                                        <div className='flex items-center gap-2'>
                                                                            <img
                                                                                className="h-8 w-8 rounded-full object-cover"
                                                                                src={`https://ui-avatars.com/api/?name=${person.name}&background=random`}
                                                                                alt=""
                                                                            />
                                                                            <span
                                                                                className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                                    }`}
                                                                            >
                                                                                {person.name}
                                                                            </span>
                                                                            {selected ? (
                                                                                <span
                                                                                    className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'
                                                                                        }`}
                                                                                >
                                                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                                </span>
                                                                            ) : null}
                                                                        </div>
                                                                    )}
                                                                </Combobox.Option>
                                                            ))
                                                        )}
                                                    </Combobox.Options>
                                                </Transition>
                                            </div>
                                        </Combobox>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-md bg-slate-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-700 sm:ml-3 sm:w-auto"
                                        onClick={() => assignTaskTo(task.id, selected.name)}
                                    >
                                        Assign
                                    </button>
                                    <button
                                        type="button"
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                        onClick={() => setOpen(false)}
                                        ref={cancelButtonRef}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>

        <div onClick={showModal} ref={drag} className={`relative bg-white p-4 mt-8 shadow-md rounded-md ${isDragging ? "opacity-25" : "opacity-100"} cursor-grab`}>
            <p className='font-semibold'>{task.name}</p>
            <p className='text-xs mt-1 text-slate-600'>Due: November 35, 2052</p>
            <img className="absolute top-2 right-2 h-7 w-7 rounded-full object-cover" src={`https://ui-avatars.com/api/?name=${task.assignedTo}&background=random`} alt="" />
            <button className='absolute bottom-1 right-1 text-slate-400' onClick={() => handleRemove(task.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
        </div></>
}