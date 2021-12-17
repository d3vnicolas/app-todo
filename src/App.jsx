import React, { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

import { ThemeProvider } from 'styled-components';
import { light, dark } from './themes/theme';
import GlobalStyle from './global';



function App() {

  const [themeMod, setThemeMod] = useState(localStorage.getItem("theme"));

  useEffect(() => {
    document.body.classList.remove('preload'); //Evita o efeito de transition no body ao carregar a página.
  }, []);

  const [toggleTheme, setToggleTheme] = useState(() => {

    if(themeMod !== null){
      return themeMod === 'dark' ? dark : light;
    }else{
      if(window.matchMedia('(prefers-color-scheme: light)').matches){
        return light
      }else{
        return dark
      }
    }
  });

  return (
    <>
      <ThemeProvider theme={toggleTheme}>
        <GlobalStyle />
        <Header/>
        <Main setToggleTheme={setToggleTheme} toggleTheme={toggleTheme}/>
        <Footer/>
      </ThemeProvider>
    </>
  );
}

export default App;
