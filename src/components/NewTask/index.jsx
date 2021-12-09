import React from 'react';
import {Wrapper, Text, NewTask} from './task';
import {GoDiffAdded} from 'react-icons/go';
import BtnTask from '../BtnTask';

const Task = (props) => {
    
    return (
        <Wrapper>
            <BtnTask/>
            <Text/>
            <NewTask><GoDiffAdded/></NewTask>
        </Wrapper>
    );
}
 
export default Task;