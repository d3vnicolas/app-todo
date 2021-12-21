import React from 'react';
import TaskList from '../TaskList';
import { Wrapper, Main, Footer, ItemsLeft, Filters, Clear, FiltersMobile } from './card';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { useGlobal } from '../../context/global';
import { DragDropContext } from 'react-beautiful-dnd';

const Card = () => {

    const { tasks, saveTasks } = useGlobal();

    const handleTaskTotal = () => {
        let count = 0;
        tasks &&
            tasks.map(task => {
                if (!task.completed) { count++ }
            });
        return count;
    }

    const handleClickRemoveCompletes = () => {
        const tasksAfter = tasks.filter(task => task.completed === false);
        saveTasks(tasksAfter);
    }

    const handleTasksRoute = (filter) => {
        switch (filter) {
            default:
                return tasks;
                break;

            case 'completes':
                return tasks.filter(task => task.completed === true);
                break;

            case 'actives':
                return tasks.filter(task => task.completed === false);
                break;
        }
    }

    const handleOnDragEnd = (result) => {//salva a posição da lista
        if (!result.destination) return;
    
        const items = Array.from(tasks);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
    
        saveTasks(items);
      }

    return (
        <Wrapper>
            <Router>
                <Main>
                    <DragDropContext onDragEnd={handleOnDragEnd}>
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    tasks &&
                                    <TaskList
                                        tasks={handleTasksRoute()}
                                    />
                                }

                            />
                            <Route
                                path="/actives"
                                element={
                                    tasks &&
                                    <TaskList
                                        tasks={handleTasksRoute('actives')}
                                    />
                                }
                            />
                            <Route
                                path="/completes"
                                element={
                                    tasks &&
                                    <TaskList
                                        tasks={handleTasksRoute('completes')}
                                    />
                                }
                            />
                        </Routes>
                    </DragDropContext>
                    <Footer>
                        <ItemsLeft>
                            {handleTaskTotal()} Tarefas restantes
                        </ItemsLeft>
                        <Filters>
                            <li><NavLink to="/">Todas</NavLink></li>
                            <li><NavLink to="/actives">Ativas</NavLink></li>
                            <li><NavLink to="/completes">Finalizadas</NavLink></li>
                        </Filters>
                        <Clear onClick={handleClickRemoveCompletes}>
                            Remover concluídas
                        </Clear>
                    </Footer>
                </Main>
                <FiltersMobile>
                    <li><NavLink to="/">Todas</NavLink></li>
                    <li><NavLink to="/actives">Ativas</NavLink></li>
                    <li><NavLink to="/completes">Finalizadas</NavLink></li>
                </FiltersMobile>
            </Router>
        </Wrapper>
    );
}

export default Card;