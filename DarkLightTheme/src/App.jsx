import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { darktheme, lightTheme, GlobalStyles } from './theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`
text-align:center;
padding:20px;
`
const Button = styled.button`
border: 1px solid #fff;
padding: 10px 13px;
border-radius: 30%;
cursor: pointer;

&:active , &:focus{
border:3px solid grey;
}
`

const Styleddiv = styled.div`
margin-top:40px;
font-family:poppins;
font-weight:bold;
font-size:20px;
`
const App = () => {

    const [theme, setTheme] = useState('light');

    const darkModeHandler = () => {
        setTheme('dark');
    }

    const lightModeHandler = () => {
        setTheme('light');
    }

    return (
        <>
            <ThemeProvider theme={theme == 'light' ? lightTheme : darktheme}>
                <GlobalStyles />
                <Container>
                    <Button onClick={darkModeHandler}><FontAwesomeIcon icon={faMoon} size="lg" color="grey" /></Button>
                    <Button onClick={lightModeHandler}><FontAwesomeIcon icon={faSun} size="lg" color="orange" /></Button>
                    <Styleddiv>{theme == "light" ? "Light Theme Displaying " : "Dark Theme Displaying"}</Styleddiv>
                </Container>
            </ThemeProvider>
        </>
    )
}

export default App;