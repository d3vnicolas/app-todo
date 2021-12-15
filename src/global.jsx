import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Josefin Sans', sans-serif;
    color: ${props => props.theme.colors.textTasks};
    user-select: none;
}

body, html{
    width: 100%;
    height: 100%;
}

body{
    background-color: ${props => props.theme.colors.backgroundBody};
    transition: background-color 400ms ease;
}

#root{
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 300px 1fr 80px;
    grid-template-areas:
        "header"
        "main"
        "footer"
    ;

}

.container{
    margin: 0 auto;
    max-width: 565px;
    width: 100%;
    padding: 0 2%;
}

.preload{
    -webkit-transition: none !important;
    -moz-transition: none !important;
    -ms-transition: none !important;
    -o-transition: none !important;
    transition: none !important;
}

`;
