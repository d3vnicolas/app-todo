import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

import { ThemeProvider } from 'styled-components';
import { light, dark } from './themes/theme';
import GlobalStyle from './global';


function App() {
  const [toggleTheme, setToggleTheme] = useState(() => {
    if(window.matchMedia('(prefers-color-scheme: light)').matches){
      return light
    }else{
      return dark
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
