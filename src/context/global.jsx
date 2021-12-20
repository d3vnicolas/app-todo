import React, { createContext, useState, useContext, useEffect } from 'react';

export const GlobalContext = createContext({});
 
export const GlobalProvider = props => {
    
    const [tasks, setTasks] = useState([]);

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
                setTasks,
                saveTasks
            }}        
        >
            {props.children}
        </GlobalContext.Provider>
    );
}

export const useGlobal = () => useContext(GlobalContext);