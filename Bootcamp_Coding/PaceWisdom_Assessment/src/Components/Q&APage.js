import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../assets/logopace.png';

const StyledDiv = styled.div`
font-family:poppins;
`
const Header = styled.div`
padding:10px 40px;
display:flex;
align-items:center;
margin:auto;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
const Container = styled.div`
display:flex;
font-family:poppins;
`

const SideBar = styled.div`
width:30%;
height:80vh;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
text-align:left;
padding:20px;

`
const Card = styled.div`
padding:10px;
border-radius:20px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
const StyledSpan = styled.div`
display:inblock;
padding:8px;
border-radius:60%;
margin:4px;
background-color:#343434;
color:#fff;
text-align:left;
cursor:pointer;

&:hover{
    background-Color:grey
}
`
const Wrapper = styled.div`
display:flex;
flex-wrap:wrap;
margin:10px;
`
const Main = styled.div`
font-family:poppins;
padding:40px;

`

const Button = styled.div`
border-radius:15px;
border:1px solid #000;
padding:15px;
width:40%;
margin:10px;
background-color:#fff;
font-weight:bold;
font-family:poppins;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
const QN = ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7", "Q8", "Q9", "Q10", "Q11", "Q12", "Q13", "Q14", "Q15", "Q16", "Q17", "Q18", "Q19", "Q20"];
const Question = [
    {
        id: 0,
        question: "What is React?",
        opt1: "answer1",
        opt2: "answer2",
        opt3: "answer3",
        opt4: "answer4",
    },
    {
        id: 1,
        question: "What is javascript?",
        opt1: "answerjs1",
        opt2: "answerjs2",
        opt3: "answerjs3",
        opt4: "answerjs4",
    }
]
const QAPage = () => {
    const [questionStatus, setQuestionStatus] = useState(-1);
    const handleQuestions = (index) => {
        setQuestionStatus(index);
    }
    return (<>
        <Header>
            <StyledDiv>
                <img src={logo} width="50%" height="100%" />
            </StyledDiv>
        </Header>
        <Container>
            <SideBar>
                <p>Questions</p>
                <Card>
                    <Wrapper>
                        {QN.map((number, index) => (
                            <StyledSpan key={index} onClick={() => { handleQuestions(index) }}>{number}</StyledSpan>
                        ))}
                    </Wrapper>
                </Card>
            </SideBar>
            <Main>
                <div>{questionStatus == -1 && "Rules"}</div>
                {Question.map((ques) => (
                    <>
                        <div>{questionStatus == ques.id && <>
                            <p>{ques.question}</p>
                            <Wrapper>
                                <Button>{ques.opt1}</Button>
                                <Button>{ques.opt2}</Button>
                                <Button>{ques.opt3}</Button>
                                <Button>{ques.opt4}</Button>
                            </Wrapper>
                        </>
                        }
                        </div>
                    </>
                ))}
            </Main>

        </Container>
    </>
    )
}

export default QAPage;