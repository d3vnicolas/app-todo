import React from 'react';
import Task from '../Task';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import { useGlobal } from '../../context/global';

const List = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const TaskList = ({ tasks }) => {
    const { setMsg } = useGlobal();
    setMsg(false);
    return (
        <List>
            {tasks.map((task, index) => (
                <Task
                    drag={false}
                    index={index}
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    completed={task.completed}
                />
            ))}

        </List>
    )
}

export default TaskList;