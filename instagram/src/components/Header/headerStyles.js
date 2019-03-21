import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    align-items: center;
    background-color: rgba(256,256,256,.90);
    display: flex;
    height: 100px;
    justify-content: space-between;
    max-width: 1080px;
    min-width: 666px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10000;

    .actions {
        .action {
            height: 35px;
            width: 35px;
            fill: none;
            stroke: black;
            stroke-width: 4;
            margin: 0 2rem;
        }
    }
`
export const HeaderLogo = styled.div`
    display: flex;
    h1 {
        border-left: 2px solid #666;
        font-size: 4rem;
        font-family: 'Grand Hotel', cursive;
        padding: 0 2rem;
    }
    svg {
        fill: none;
        stroke: black;
        stroke-width: 7;
        height: 40px;
        margin: 0 2rem;
        width: 40px;
    }
`
export const Search = styled.div`
    border: 2px solid rgba(0,0,0,.42);
    border-radius: 0.5rem;
    display: flex;
    font-size: 2rem;
    height: 4rem;
    min-width: 200px;
    position: relative;
    width: 33%;
    &.active {
        .placeholder {
            position: relative;
            width: fit-content;
            height: 100%;
        }
        input {
            border: none;
            font-size: 2rem;
            text-align: left;
            outline: none;
        }
    }

    .placeholder {
        align-items: center;
        color: #666;
        display: flex;
        height: 100%;
        justify-content: center;
        margin: 0;
        min-width: 3rem;
        position: absolute;
        width: 100%;

        input {
            border: none;
            font-size: 2rem;
            height: 100%;
            outline: none;
            text-align: center;
            width: 100%;
        }
        svg {
            height: 15px;
            width: 15px;
            fill: none;
            stroke: black;
            stroke-width: 6;
            margin: 0 0.5rem;
        }
        .text {
            position: relative;
            margin: 0 3px;
        }
    }
`