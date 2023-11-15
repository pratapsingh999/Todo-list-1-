import React from "react";
import { incrementCounter, decrementCounter } from "../../redux/action";
import styled from 'styled-components'

const Button = styled.button`
background:${props => props.increment ? "green" : "red"};
color:white;
font-size: 0.8em;
margin: 1em;
padding: 0.5em 1em;
border: 2px solid ${props => props.increment ? "green" : "red"};
border-radius: 3px;
`

const ReduxCounter = ({ count, dispatch }) => {
    return (
        <>
            <h1>ReduxCounter</h1>
            <p>Count : {count}</p>
            <Button increment="true" onClick={() => dispatch(incrementCounter())}>StyledIncrement</Button>
            <Button onClick={() => dispatch(decrementCounter())}>StyledDecrement</Button>
            <button type="button" onClick={() => dispatch(incrementCounter())}>Increment</button>
            <button type="button" onClick={() => dispatch(decrementCounter())}>Decrement</button>
        </>
    )
}

export default ReduxCounter;