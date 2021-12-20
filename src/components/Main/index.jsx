import React from 'react';
import { Master, Head, Title } from './main';
import NewTask from '../NewTask';
import Card from '../Card';
import { useGlobal } from '../../context/global';

const Main = () => {

    const { themeMod, setThemeMod } = useGlobal();

    const handleToggleTheme = () => {
        if(themeMod==='dark'){
            localStorage.setItem("theme", "light");
            setThemeMod("light");
        }else{
            localStorage.setItem("theme", "dark");
            setThemeMod("dark");
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