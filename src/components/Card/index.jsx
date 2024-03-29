import React from 'react';
import TaskList from '../TaskList';
import Dragndrop from '../Dragndrop';
import { Wrapper, Main, Footer, ItemsLeft, Filters, Clear, FiltersMobile } from './card';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { useGlobal } from '../../context/global';

const Card = () => {

    const { tasks, saveTasks } = useGlobal();

    const handleTaskTotal = () => {
        let count = 0;
        tasks &&
            tasks.forEach(task => {
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

            case 'completes':
                return tasks.filter(task => task.completed === true);

            case 'actives':
                return tasks.filter(task => task.completed === false);
        }
    }
    
    return (
        <Wrapper>
            <Router>
                <Main>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                tasks &&
                                <Dragndrop 
                                    tasks={tasks}
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