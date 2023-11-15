import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body{
        background-color : ${props => props.theme.body};
        color:${props => props.theme.text};
    }
`

export const lightTheme = {
    body: "#fff",
    text: "#000"
}

export const darktheme = {
    body: "#000",
    text: "#fff"
}