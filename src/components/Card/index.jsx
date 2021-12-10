import React, { useState } from 'react';
import TaskList from '../TaskList';
import {Wrapper, Footer, ItemsLeft, Filters, Clear} from './card';

const Card = () => {
    
    const [tasks ,setTasks] = useState([
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

    const taskTotal = () => {
        let count = 0;
        tasks.map(task => {
            if(!task.completed){count++};
        })
        return count;
    }
    return (
        <Wrapper className="container">
            <TaskList tasks={tasks} />
            <Footer>
                <ItemsLeft>
                    {taskTotal()} Tarefas restantes
                </ItemsLeft>
                <Filters>
                    <li><a href="">All</a></li>
                    <li><a href="">Active</a></li>
                    <li><a href="">Completed</a></li>
                </Filters>
                <Clear href="">
                    Clear completed
                </Clear>
            </Footer>
        </Wrapper>
    );
}
 
export default Card;