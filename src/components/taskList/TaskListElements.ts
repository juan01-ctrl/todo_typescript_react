import styled from 'styled-components'


export const Article = styled.article`
padding: 2rem 1.8rem;
background-color: #fff;
min-height: 250px;
width: 250px;
`

export const CardContainer = styled.div`
display: flex;
flex-direction: column;
height: 100%;
justify-content: space-between;
align-items: flex-start;


`

export const CardTitle = styled.h2`
font-size:2.5rem;
color:#010101;
text-transform: uppercase;
max-width: 200px;
overflow-x: auto;

`

export const CardContent = styled.p`
font-size:1.2rem;
color:#000;
`

export const CardButton = styled.button`
font-size:1.5rem;
outline: none;
border:none;
padding:.5rem .8rem;
background-color: ${props=>props.color};
color:#fff;
margin: 0 .5rem;
`

export const InputTitle = styled.input`
font-size:2.5rem;
color:#010101;
text-transform: uppercase;
max-width: 200px;
`

export const InputDescription = styled.input`
font-size:1.2rem;
color:#000;
max-width: 200px;

`



