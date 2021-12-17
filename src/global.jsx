import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Josefin Sans', sans-serif;
    color: ${props => props.theme.colors.textTasks};
    user-select: none;
    -webkit-tap-highlight-color: transparent;
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
    max-width: 630px;
    width: 100%;
    padding: 0 4%;
}

.preload{
    -webkit-transition: none !important;
    -moz-transition: none !important;
    -ms-transition: none !important;
    -o-transition: none !important;
    transition: none !important;
}

::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: ${props => props.theme.colors.backgroundBody};
}

::-webkit-scrollbar
{
	width: 12px;
	background-color: ${props => props.theme.colors.backgroundInput};
}

::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	box-shadow: inset 0 0 6px rgba(0,0,0,.4);
	background-color: ${props => props.theme.colors.borderTasksCircle};
}

`;
