import styled, { css } from "styled-components";

export const AsideCarrinho = styled.aside`
    right: 0;
    transition: all 200ms cubic-bezier(0.19, 1, 0.22, 1);
    z-index: -1;
    width: 100%;
    height: 100%;
    position: fixed;
    right: -2000px;
    top: 0;
    display: flex;
    justify-content: end;
    opacity: 0;

    ${props => 
        
        props.stateDisplay ? 
        css`
            opacity: 1;
            top: 0;
            right: 0;
            z-index: 999999;
            cursor: pointer;
            
        `
        :
        css`
            opacity: 0;
        `

    }
    
    > div:first-of-type{
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .1);

        @media only screen and (max-width: 768px) {
            display: none;
        }
    }

    > div.box-pedidos-carrinho {
        display: flex;
        flex-direction: column;
        width: 40%;
        max-width: 400px;
        height: 100%;
        overflow: auto;
        background-color: #ffffff;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, .1),
        -1px -1px 5px rgba(0, 0, 0, .1);
        border-radius: 10px;
        color: #000000;
        cursor: default;

        > div.box-total {
            display: flex;
            justify-content: space-between;
            padding: 10px 40px;
            font-size: 20px;
            border-top: 2px solid #f8beb2;
        }

        > div.button-comprar {

            margin: 10px auto;
            width: 50%;
            padding: 10px;
            border: 1px solid #00ff30;
            border-radius: 15px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            transition: background-color 500ms, color 500ms;

            > a {
                color: #00ff30;
                display: flex;
                gap: 10px;
                font-size: 20px;

            }

            &:hover {
                background-color: #00ff30;
                border: none;

                > a {
                    color: #ffffff;
                }
            }
        }

        @media only screen and (max-width: 768px) {
            max-width: 100%;
            width: 100%;
        }

        > div.container-disabled-sidebar {
            width: 100%;
            padding: 10px;
            background-color: #f8beb2;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            transition: 200ms;
            border-bottom: 1px solid #ffffff;
            cursor: pointer;

            @media only screen and (max-width: 768px) {
                justify-content: start;
                gap: 20px;

                > h1 {
                    order: 2;
                }
            }
            

            > span {
                font-size: 28px;
               
            }

            &:hover {
                background-color: #ffffff;
                border-bottom: 1px solid #f8beb2;
                color: #f8beb2;
            }
            
        }

        > div.box-produto-confirm {
            display: flex;
            padding: 20px;
            align-items: center;
            gap: 10px;
            z-index: 10;

            > img {
                width: 20%;
                border-radius: 15px;
            }

            > div.box-infos {
                width: 75%;
                display: flex;
                flex-direction: column;
                gap: 30px;

                > div {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    
                    > span.button-ex {
                        color: red;
                        cursor: pointer;
                    }
                   
                    > div.container-edit {
                        border-radius: 8px;
                        padding: 5px 10px;
                        display: flex;
                        gap: 20px;
                        border: 1px solid rgba(0, 0, 0, .1);
                        font-size: 18px;
                        transition: background-color 100ms;
                        align-items: center;

                        > span {
                            &:nth-of-type(1), &:nth-of-type(3) {
                                color: #f8beb2;
                                position: relative;
                                top: 3px;
                                cursor: pointer;
                            }
                           
                        }

                        &:hover {
                            border: 1px solid rgba(248, 190, 178, .8);
                        }
                    }
                }
            }

        }

    }
`;