import {createGlobalStyle} from "styled-components";
import { colors } from "./colors";

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Josefin Sans', sans-serif;
    color: ${colors.lightTheme.VeryDarkGrayishBlue}
}

body, html{
    width: 100%;
    height: 100%;
    background-color: ${colors.lightTheme.VeryLightGrayishBlue};
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

`;
