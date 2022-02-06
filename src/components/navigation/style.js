import styled, { css } from "styled-components";


export const NavigationNav = styled.nav`
    width: 100%;
    display: flex;
    justify-content: center;
    border-top: 1px solid rgba(255, 255, 255, .4);
   
    @media only screen and (max-width: 768px) {
        
        ${props => props.ativar ? 
        css`
            display: none;
        `
        :
        css`
            display: block;
            width: 100%;
            
        `
        }
        padding: 30px 0;
        width: 100%;
        justify-content: normal;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10000;

        >  div.box-links-navigation {
            width: 80%;
            height: 100%;
            flex-direction: column;
            background-color: #f8beb2;
            height: 100vh;
            padding: 60px 30px !important;
            
        }
        
    }
    
    > div.box-links-navigation {
        display: flex;
        gap: 45px;
        padding: 20px;
        transition: 1s;

        & .links-navigation {
            color: #fff;
            letter-spacing: 1px;
            transition: 500ms;
            border: none;
            text-transform: capitalize;
           
            &:hover {
                border-bottom: 1px solid rgba(255, 255, 255, .4);
            }
        }
        
    }
`;