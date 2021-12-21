import React from 'react';
import Task from '../Task';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';

const List = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const TaskList = ({ tasks }) => {
    return (
        <Droppable droppableId='list'>
            {(provided) => (
                <List
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                >
                    {tasks.map((task, index) => (
                        <Task
                            index={index}
                            key={task.id}
                            id={task.id}
                            title={task.title}
                            completed={task.completed}
                        />
                    ))}
                    {provided.placeholder}
                </List>
            )}
        </Droppable>
    );
}

export default TaskList;