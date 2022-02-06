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
    html, body {
        position: relative;
    }

`;

export const ContainerRoot = styled.div`
    width: 100%;

`; 