import React, { useState } from 'react';
import {Wrapper, Text, NewTask} from './newTask';
import {GoDiffAdded} from 'react-icons/go';


const Task = (props) => {
    const [displayBtn, setDisplayBtn] = useState(false);
    const handleInputTask = (e) => {
        e.target.value !== '' ? setDisplayBtn(true) : setDisplayBtn(false);
    }
    return (
        <Wrapper>
            <Text onChange={handleInputTask}/>
            <NewTask visibility={displayBtn}><GoDiffAdded/></NewTask>
        </Wrapper>
    );
}
 
export default Task;