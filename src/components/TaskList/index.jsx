import React from 'react';
import Task from '../Task';
import styled from 'styled-components';

const List = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const TaskList = (props) => {
    return (
        <List>
           {props.tasks.map(task => (
           <Task 
                key={task.id} 
                id={task.id} 
                title={task.title} 
                handleRemoveTask={props.handleRemoveTask}
                completed={task.completed} 
           />
           ))}
        </List>
    );
}
 
export default TaskList;