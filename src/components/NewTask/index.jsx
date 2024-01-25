import React, { useState, useRef } from 'react';
import { Wrapper, Text, NewTask } from './newTask';
import { GoDiffAdded } from 'react-icons/go';

import { useGlobal } from '../../context/global';


const Task = () => {

    const [inputTitle, setInputTitle] = useState('');
    const { tasks, saveTasks } = useGlobal();

    const newTaskRef = useRef(null);

    const handleAddTask = (taskTitle) => {
        if (tasks === null) {
            saveTasks([
                {
                    id: Math.random(),
                    title: taskTitle,
                    completed: false
                }
            ]);
        } else {
            const taskAdd = [...tasks, {
                id: Math.random(),
                title: taskTitle,
                completed: false
            }];
            saveTasks(taskAdd);
        }
    }

    const pressEnter = code => {
        if (code === "Enter" && inputTitle != '') {
            newTaskRef.current.click();
        }
    }

    return (
        <Wrapper>
            <Text placeholder="Criar nova tarefa..." value={inputTitle} onChange={({ target }) => { setInputTitle(target.value) }} onKeyPress={({ code }) => pressEnter(code)} />
            <NewTask
                ref={newTaskRef}
                onClick={() => { handleAddTask(inputTitle); setInputTitle('') }}
                inputTitle={inputTitle}
            >
                <GoDiffAdded />
            </NewTask>
        </Wrapper>
    );
}

export default Task;