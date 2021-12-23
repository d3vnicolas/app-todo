import React from 'react';
import Task from '../Task';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import { DragDropContext } from 'react-beautiful-dnd';
import { useGlobal } from '../../context/global';

const List = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;



const TaskList = ({ tasks }) => {
    const { setMsg } = useGlobal();
    setMsg(true);

    const { saveTasks } = useGlobal();
    const handleOnDragEnd = (e) => {//salva a posição da lista
        if (!e.destination) return;

        const items = Array.from(tasks);
        const [reorderedItem] = items.splice(e.source.index, 1);
        items.splice(e.destination.index, 0, reorderedItem);

        saveTasks(items);
    }

    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId='list'>
                {(provided) => (
                    <List
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        {tasks.map((task, index) => (
                            <Task
                                drag={true}
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
        </DragDropContext>
    );
}

export default TaskList;