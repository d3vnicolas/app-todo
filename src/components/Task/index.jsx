import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useGlobal } from '../../context/global';
import BtnTask from '../BtnTask';
import { Wrapper, Title, Sense, Close } from './task';

const Task = ({ title, id, completed, index, drag }) => {

    const { tasks, saveTasks } = useGlobal();

    const handleRemoveTask = (taskId) => {
        const tasksAfter = tasks.filter(task => task.id !== taskId);
        saveTasks(tasksAfter);
    }

    const handleTaskComplete = (taskId) => {
        let tasksAfter = [];
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].id === taskId) {
                tasks[i].completed = !tasks[i].completed;
            }
            tasksAfter.push(tasks[i]);
        }
        saveTasks(tasksAfter);
    }

    if (drag) {
        return (
            <Draggable draggableId={id.toString()} index={index} >
                {(provided) => (
                    <Wrapper
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >
                        <Sense onClick={() => handleTaskComplete(id)}>
                            <BtnTask completed={completed} />
                            <Title completed={completed}>{title}</Title>
                        </Sense>
                        <Close onClick={() => handleRemoveTask(id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fillRule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z" /></svg>
                        </Close>
                    </Wrapper>
                )}
            </Draggable>
        );
    } else {
        return (
            <Wrapper>
                <Sense onClick={() => handleTaskComplete(id)}>
                    <BtnTask completed={completed} />
                    <Title completed={completed}>{title}</Title>
                </Sense>
                <Close onClick={() => handleRemoveTask(id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fillRule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z" /></svg>
                </Close>
            </Wrapper>
        );
    }
}

export default Task;