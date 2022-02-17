import styled, { createGlobalStyle } from "styled-components";


export const StyleGlobal = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        font-family: 'Ubuntu Mono', monospace;
       
    }
    html, body, #root{
        position: relative;
        overflow: hidden auto;
        height: 100%;
    }

`;

export const ContainerRoot = styled.div`
    width: 100%;

`; 