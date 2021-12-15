import React from 'react';
import TaskList from '../TaskList';
import {Wrapper, Footer, ItemsLeft, Filters, Clear} from './card';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

const Card = (props) => {

    const handleTasksRoute = (filter) => {
        switch (filter) {
            default:
                return props.tasks;
                break;
        
            case 'completes':
                return props.tasks.filter(task => task.completed === true);
                break;

            case 'actives':
                return props.tasks.filter(task => task.completed === false);
                break;
        }
        
    }

    return (
        <Wrapper>
            <Router>
                <Routes>
                    <Route 
                        path="/" 
                        element={
                            props.tasks &&
                            <TaskList 
                                handleTaskComplete={props.handleTaskComplete} 
                                handleRemoveTask={props.handleRemoveTask} 
                                tasks={handleTasksRoute()} 
                            />
                        }
                    />
                    <Route 
                        path="/actives" 
                        element={
                            props.tasks &&
                            <TaskList 
                                handleTaskComplete={props.handleTaskComplete} 
                                handleRemoveTask={props.handleRemoveTask} 
                                tasks={handleTasksRoute('actives')} 
                            />
                        }
                    />
                    <Route 
                        path="/completes" 
                        element={
                            props.tasks &&
                            <TaskList 
                                handleTaskComplete={props.handleTaskComplete} 
                                handleRemoveTask={props.handleRemoveTask} 
                                tasks={handleTasksRoute('completes')} 
                            />
                        }
                    />
                </Routes>
                <Footer>
                    <ItemsLeft>
                        {props.handleTaskTotal()} Tarefas restantes
                    </ItemsLeft>
                    <Filters>
                        <li><NavLink to="/">Todas</NavLink></li>
                        <li><NavLink to="/actives">Ativas</NavLink></li>
                        <li><NavLink to="/completes">Finalizadas</NavLink></li>
                    </Filters>
                    <Clear onClick={props.handleClickRemoveCompletes}>
                        Remover concluídas
                    </Clear>
                </Footer>
            </Router>
        </Wrapper>
    );
}
 
export default Card;