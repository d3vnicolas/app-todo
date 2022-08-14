import React, { useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

import { ThemeProvider } from 'styled-components';
import { light, dark } from './themes/theme';
import GlobalStyle from './global';
import { useGlobal } from './context/global';



function App() {

  useEffect(() => {
    document.body.classList.remove('preload'); //Evita o efeito de transition no body ao carregar a página.
  }, []);

  const { themeMod } = useGlobal();

  return (
    <>
      <ThemeProvider theme={themeMod==='light'?light:dark}>
        <GlobalStyle />
        <Header />
          <Main />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
