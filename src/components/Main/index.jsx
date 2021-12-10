import React, {useState} from 'react';
import {Master, Head, Title} from './main';
import NewTask from '../NewTask';
import Card from '../Card';

import IconTheme from '../../images/icon-moon.svg';

const Main = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: "Ler por 1 hora",
            completed: false
        },
        {
            id: 2,
            title: "Estudar Hooks",
            completed: false
        },
        {
            id: 3,
            title: "Estudar Local Storage",
            completed: false
        },
        {
            id: 4,
            title: "Estudar Cookies",
            completed: false
        },
        {
            id: 5,
            title: "Finalizar To Do App",
            completed: false
        }
    ]);
    
    const handleTaskTotal = () => {
        let count = 0;
        tasks.map(task => {
            if(!task.completed){count++}
        });
        return count;
    }

    const handleRemoveTask = (taskId) => {
          const tasksAfter = tasks.filter(task => task.id !== taskId);
          setTasks(tasksAfter);
    }

    const handleAddTask = (taskTitle) => {
        const taskAdd = [...tasks, {
            id: Math.random(),
            title: taskTitle,
            completed: false
        }];

        setTasks(taskAdd);
    }
    return (
        <Master className='container'>
            <Head>
                <Title> 
                    <h1>TODO</h1>
                    <img src={IconTheme} alt='Alternar tema' />
                </Title>
                <NewTask handleAddTask={handleAddTask}/>
            </Head>
            <Card tasks={tasks} handleRemoveTask={handleRemoveTask} handleTaskTotal={handleTaskTotal} />
        </Master>
    );
}
 
export default Main;