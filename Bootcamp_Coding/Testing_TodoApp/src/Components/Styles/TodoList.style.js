import styled from 'styled-components';

export const Container = styled.div`
margin:0px;
text-align:center;
padding:20px;
`
export const StyledCard = styled.div`
background: white;
box-shadow: 0 1px 4px rgba(0, 0, 0, 0.26);
border-radius: 10px;
width:50%;
height:100%;
margin:auto;
padding:40px 20px;
`
export const List = styled.div`
font-family:poppins;
background: #FFE0AE;
font-weight:bold;
font-size:12px;
color:#E55B13;
box-shadow: 0 1px 2px rgba(0, 0, 0, 0.26);
border-radius:5px;
height:100%;
margin:auto;
text-align:left;
margin-top:10px;
padding:10px 10px;

`
export const Input = styled.input`
font-family:poppins;
width: 50%;
padding: 12px 20px;
margin: 8px 0;
box-sizing: border-box;
border: none;
border-bottom: 2px solid grey;
`
export const StyledButton = styled.button`
    font-family: 'Poppins', sans-serif;
    font-weight:bold;
    background: #FFA303;
    color: white;
    padding: 0.65rem 2rem;
    cursor: pointer;
    border:none;
    border-radius:20px;
    margin:15px;


    &:hover,
    &:active {
    background: #E55B13;
    border-color: #FFA303;
    }

    &:focus {
    outline: none;
    }
`
export const Header = styled.header`
font-family:poppins;
font-weight:normal;
color:#E55B13;
font-size:35px;
`