import React from 'react';
import TaskList from '../TaskList';
import {Wrapper, Footer, ItemsLeft, Filters, Clear} from './card';

const Card = (props) => {
    return (
        <Wrapper className="container">
            <TaskList handleTaskComplete={props.handleTaskComplete} handleRemoveTask={props.handleRemoveTask} tasks={props.tasks} />
            <Footer>
                <ItemsLeft>
                  {props.handleTaskTotal()} Tarefas restantes
                </ItemsLeft>
                <Filters>
                    <li><a href="">All</a></li>
                    <li><a href="">Active</a></li>
                    <li><a href="">Completed</a></li>
                </Filters>
                <Clear onClick={props.handleClickRemoveCompletes}>
                    Remover concluídas
                </Clear>
            </Footer>
        </Wrapper>
    );
}
 
export default Card;