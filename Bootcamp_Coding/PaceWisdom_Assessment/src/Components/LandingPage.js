import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../assets/logopace.png';
import image from '../assets/image02.png';

const Conatainer = styled.div`
display:flex;
font-family:poppins;
padding:60px;
text-align:left;
`
const Nav = styled.nav`
display:flex;
align-items:center;
margin:auto;
padding:30px 60px 0px;
`
const StyledDiv = styled.div`
font-family:poppins;
`
const H1 = styled.h1`
color:#000;
margin:2px;
`

const H2 = styled.h2`
color:#706C6B;
margin:2px;
`
const StyledButton = styled.button`
    font-family: 'Poppins', sans-serif;
    font-weight:regular;
    background:${props => props.bgcolor ? "transparent" : "#3EABC1"};
    color:${props => props.bgcolor ? "#55cd70" : "#fff"};;
    padding: 0.65rem 2rem;
    cursor: pointer;
    border:${props => props.bgcolor ? "2px solid #55cd70" : "2px solid #3EABC1"};
    border-radius:15px;
    margin-left:${props => props.margin ? "10px" : "0px"};;

`
const LandingPage = (prop) => {

    const [clickEventStatus, setClickEventStatus] = useState(false);

    const handleButtonEvent = (event) => {
        event.preventDefault();
        setClickEventStatus(true);
        prop.listner(clickEventStatus);
    }
    return (
        <>
            <Nav>
                <StyledDiv style={{ margin: "10px 0px" }}>
                    <img src={logo} width="60%" height="40%" />
                </StyledDiv>
                <StyledDiv style={{ marginLeft: "auto" }}>
                    <StyledButton bgcolor="true" margin="true">Take Assessment</StyledButton>
                </StyledDiv>
                <StyledButton margin="true" style={{ color: "#000" }}>Login</StyledButton>
            </Nav>
            <Conatainer>
                <StyledDiv style={{ width: "40%", paddingTop: "40px" }}>
                    <H2>Welcome to PaceWisdom Assessment Portal</H2>
                    <H1>Do You Want To Join Us</H1>
                    <p style={{ margin: "0px", color: "#706C6B" }}>Take Assessment and Get Eligible.</p>
                    <p style={{ marginTop: "4px", textAlign: 'justify' }}>The test evaluates candidates in the most important concepts, as well as their skill and familiarity with the most-used advanced concepts.</p>
                    <StyledButton onClick={(event) => handleButtonEvent(event)} bgcolor="true" style={{ marginTop: "40px", width: "40%" }}>Get Started</StyledButton>
                </StyledDiv>
                <StyledDiv style={{ marginLeft: "auto" }}>
                    <img src={image} height="100%" width="100%" />
                </StyledDiv>

            </Conatainer>
        </>
    )
}

export default LandingPage
