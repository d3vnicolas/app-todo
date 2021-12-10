import React, { useState } from 'react';
import {Wrapper, Text, NewTask} from './newTask';
import {GoDiffAdded} from 'react-icons/go';


const Task = () => {
    const [displayBtn, setDisplayBtn] = useState(false);
    const handleInputTask = (props) => {
        props.target.value !== '' ? setDisplayBtn(true) : setDisplayBtn(false);
    }
    return (
        <Wrapper>
            <Text onChange={handleInputTask}/>
            <NewTask visible={displayBtn}><GoDiffAdded/></NewTask>
        </Wrapper>
    );
}
 
export default Task;