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
        <Wrapper className="container">
            <Router>
                <Routes>
                    <Route 
                        path="/" 
                        element={
                            <TaskList 
                                handleTaskComplete={props.handleTaskComplete} 
                                handleRemoveTask={props.handleRemoveTask} 
                                tasks={handleTasksRoute()} 
                            />
                        }
                    />
                    <Route 
                        path="/active" 
                        element={
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
                        <li><NavLink to="/">All</NavLink></li>
                        <li><NavLink to="/active">Active</NavLink></li>
                        <li><NavLink to="/completes">Completed</NavLink></li>
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