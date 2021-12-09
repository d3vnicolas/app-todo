import React from 'react';
import {Master, Head, Title, InTesk} from './main';
import NewTask from '../NewTask';
import Card from '../Card';

import IconTheme from '../../images/icon-moon.svg';

const Main = () => {
    return (
        <Master className='container'>
            <Head>
                <Title> 
                    <h1>TODO</h1>
                    <img src={IconTheme} alt='Alternar tema' />
                </Title>
                <NewTask/>
            </Head>
            <Card />
        </Master>
    );
}
 
export default Main;