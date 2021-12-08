import React from 'react';
import {Master, Head, Title, InTesk} from './main';

import IconTheme from '../../images/icon-moon.svg';

const Main = () => {
    return (
        <Master>
            <Head>
                <Title> 
                    <h1>TODO</h1>
                    <img src={IconTheme} alt="Alternar tema" />
                </Title>
                <InTesk/>
            </Head>
        </Master>
    );
}
 
export default Main;