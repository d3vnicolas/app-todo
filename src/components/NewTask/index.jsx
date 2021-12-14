import React, { useState } from 'react';
import {Wrapper, Text, NewTask} from './newTask';
import {GoDiffAdded} from 'react-icons/go';


const Task = (props) => {
    const [displayBtn, setDisplayBtn] = useState(false);
    const [inputAdd, setInputAdd] = useState('');

    const handleChangeInput = ({target}) => {
        setInputAdd(target.value);
        target.value !== '' ? setDisplayBtn(true) : setDisplayBtn(false);
    }

    const handleClickAdd = () => {
        props.handleAddTask(inputAdd);
        setInputAdd('');
        setDisplayBtn(false);
    }

    return (
        <Wrapper>
            <Text placeholder="Criar nova tarefa..." value={inputAdd} onChange={handleChangeInput}/>
            <NewTask onClick={handleClickAdd} visible={displayBtn}><GoDiffAdded/></NewTask>
        </Wrapper>
    );
}
 
export default Task;