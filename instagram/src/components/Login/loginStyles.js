import styled from 'styled-components'

export const LoginWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #efefef;
`
export const LoginElement = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 1.5rem 3rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    min-width: 350px;
    margin-bottom: 20%;
`
export const LoginHeader = styled.h1`
    @import url('https://fonts.googleapis.com/css?family=Grand+Hotel');
    font-family: 'Grand Hotel', cursive;
    font-size: 6rem;
    line-height: 8rem;
    color: #333;
    text-align: center;
`
export const LoginInput = styled.input`
    margin: 0.75rem 0;
    border: 1px solid #e0e0e0;
    padding: 1rem;
    border-radius: 5px;
    background-color: #efefef;
    outline: none;
    &:hover,&:focus {
        border-color: #bbb;
    }
`
export const LoginButton = styled.button`
    margin: 0.75rem 0;
    padding: 1rem;
    background-color: #bbb;
    border: none;
    border-radius: 5px;
    font-weight: 700;
    cursor: pointer;
    &:hover {
        background-color: #999;
    }
`
export const LoginForgot = styled.pre`
    font-size: 1.5rem;
    text-align: center;
    line-height: 2rem;
    color: #385185;
    cursor: pointer;
`
