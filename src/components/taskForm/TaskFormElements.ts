import styled from 'styled-components'




export const FormContainer = styled.div`
background-color: #f1f1f1;
padding: 1rem;
display: flex;
flex-direction: column;
align-items: flex-start;
height: 330px;
`

export const FormTitle = styled.h1`
font-size:3rem;
color: #000;

`

export const Form = styled.form`
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-around;
`

export const InputContainer = styled.div`
`
export const InputTitle = styled.input`
font-size:1rem;
color: #000;
margin: .5rem 0;
padding: .2rem;
`

export const InputDesc = styled.textarea`
font-size:1rem;
color: #000;
margin: .5rem 0;
padding: .2rem;
resize: none;
`
export const FormButton = styled.button`
outline: none;
border: none;
font-size:1.2rem;
color: #fff;
padding: .7rem;
background-color: blue;
`