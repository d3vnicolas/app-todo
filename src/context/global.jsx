import React, { createContext, useState, useContext, useEffect } from 'react';

export const GlobalContext = createContext({});
 
export const GlobalProvider = props => {
    

    const [tasks, setTasks] = useState([]);
    const [themeMod, setThemeMod] = useState(() => {
        if(!localStorage.getItem("theme")){
           return window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';
        }else{
            return localStorage.getItem("theme");
        }
    });
    const [msg, setMsg] = useState(true);

    const saveTasks = (data) => {
        localStorage.setItem("tasks", JSON.stringify(data));
        setTasks(data);
    }

    useEffect(() => {
        const tasksLocal = JSON.parse(localStorage.getItem("tasks"));
        setTasks(tasksLocal);
    }, []);
    
    
    return(
        <GlobalContext.Provider 
            value={{
                tasks,
                saveTasks,
                themeMod, 
                setThemeMod,
                msg,
                setMsg
            }}        
        >
            {props.children}
        </GlobalContext.Provider>
    );
}

export const useGlobal = () => useContext(GlobalContext);