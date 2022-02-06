import styled, { css } from "styled-components"; 

export const DivisionContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    position: relative;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
        
        > div.button-mobile {
            ${props => props.ativar ? 
            css`
                display: block !important;
                &:nth-of-type(2){
                    display: none !important;
                }
            `
            :
            css`
                display: none !important;
                &:nth-of-type(2){
                    display: block !important;
                    z-index: 20000;
                    position: absolute;
                    top: 0;
                    padding: 40px 0;
                    
                }
            `
            }
            
            position: absolute;
            top: 28%;
            left: 5%;
            font-size: 35px;
            
        }
    }

    > img.image-logo {
        width: 160px;
    }

    > div.button-mobile {
        display: none;
    }

    > div.box-input-menu {
        display: flex;
        width: 70%;
        gap: 35px;
       

        @media only screen and (max-width: 768px) {
            width: 100%;
            flex-direction: column;
            gap: 0;
            padding: 20px 0;
            
            > div.container--input {
                order: 2;
            }
        }

        > div.container--input {
            width: 100%;
            max-width: 660px;
            display: flex;
            border-radius: 10px;
            background-color: #ffffff;

            > input {
                display: block;
                width: 90%;
                outline: none;
                border: none;
                padding: 10px;
                background-color: transparent;

                @media only screen and (max-width: 768px) {
                    width: 100%;
                }
                
             
            }

            > span {
                display: flex;
                width: 10%;
                align-items: center;
                justify-content: center;
                
                > .search-icon {
                    font-size: 25px;
                    color: #FEC04D; 
                    cursor: pointer;
                }
            }
        }

        > div.container-menu {
            display: flex;
            gap: 35px;

            @media only screen and (max-width: 768px) {
                
                & .atendimento {
                    display: none !important;

                }
            }

            > div.box-menu {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                color: #ffffff;
                text-transform: capitalize;
                font-style: italic;
            
                @media only screen and (max-width: 768px)  {
                    &.carrinho {
                        position: absolute;
                        top: 28%;
                        right: 5%;
                    
                    }
                }

                > span.search-absulute {
                    position: relative;

                    > .itens-carrinho {
                        position: absolute;
                        width: 15px;
                        height: 15px;
                        border-radius: 50%;
                        text-align: center;
                        left: 14px;
                        color: #b53471;
                        background-color: #000000;
                        font-size: 100%;
                        
                    }
                }

                > span {
                    > .icon-menu {
                        font-size: 26px;
                    }
                }
            }
        }
    }
`;