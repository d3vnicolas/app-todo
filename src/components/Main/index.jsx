import React, {useEffect, useState} from 'react';
import {Master, Head, Title} from './main';
import NewTask from '../NewTask';
import Card from '../Card';

import IconTheme from '../../images/icon-moon.svg';

const Main = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const tasksLocal = JSON.parse(localStorage.getItem("tasks"));
        setTasks(tasksLocal);
    }, []);

    const saveTasks = (data) => {
        localStorage.setItem("tasks", JSON.stringify(data));
        setTasks(data);
    }

    const handleTaskTotal = () => {
        let count = 0;
        tasks.map(task => {
            if(!task.completed){count++}
        });
        return count;
    }

    const handleRemoveTask = (taskId) => {
        const tasksAfter = tasks.filter(task => task.id !== taskId);
        saveTasks(tasksAfter);
    }

    const handleAddTask = (taskTitle) => {
        const taskAdd = [...tasks, {
            id: Math.random(),
            title: taskTitle,
            completed: false
        }];

        saveTasks(taskAdd);
    }

    const handleTaskComplete = (taskId) => {
        let tasksAfter = [];
        for (let i = 0; i < tasks.length; i++) {
            if(tasks[i].id === taskId){
                tasks[i].completed = !tasks[i].completed;
            }
            tasksAfter.push(tasks[i]);
        }
        saveTasks(tasksAfter);
    }

    const handleClickRemoveCompletes = () => {
        const tasksAfter = tasks.filter(task => task.completed === false);
        saveTasks(tasksAfter);
    }


    return (
        <Master className='container' >
            <Head>
                <Title> 
                    <h1>TODO</h1>
                    <img src={IconTheme} alt='Alternar tema' />
                </Title>
                <NewTask handleAddTask={handleAddTask}/>
            </Head>
            <Card 
                tasks={tasks} 
                handleRemoveTask={handleRemoveTask} 
                handleTaskTotal={handleTaskTotal} 
                handleTaskComplete={handleTaskComplete} 
                handleClickRemoveCompletes={handleClickRemoveCompletes}
            />
        </Master>
    );
}
 
export default Main;