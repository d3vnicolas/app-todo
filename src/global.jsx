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
    background-color: ${props => props.theme.colors.backgroundBody};
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
    max-width: 550px;
    width: 100%;
}

`;
