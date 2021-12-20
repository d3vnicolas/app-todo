import React, {useEffect, useState, useContext} from 'react';
import { Master, Head, Title } from './main';
import NewTask from '../NewTask';
import Card from '../Card';
import { light, dark } from '../../themes/theme';

const Main = (props) => {

    const handleToggleTheme = () => {
        if(props.toggleTheme === light){
            props.setToggleTheme(dark);
            localStorage.setItem("theme", "dark");
        }else{
            props.setToggleTheme(light);
            localStorage.setItem("theme", "light");
        }
    }

    return (
        <Master className='container'>
            <Head>
                <Title> 
                    <h1>TODO</h1>
                    <div onClick={handleToggleTheme} className="icon"></div>
                </Title>
                <NewTask/>
            </Head>
            <Card />
        </Master>
    );
}
 
export default Main;