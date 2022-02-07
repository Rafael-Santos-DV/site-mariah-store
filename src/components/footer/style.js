import styled from "styled-components";

export const FooterStyle = styled.footer`
    width: 100%;
    background-color: #f8beb2;

    > div.box-elementos-footer {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        gap: 20px;
        justify-content: space-evenly;
        line-height: 2;
        color: #ffffff;


        @media only screen and (max-width: 768px) {
            flex-direction: column;
            padding: 30px;
        }

        & a {
            color: #ffffff;
        }

        > div {
            text-align: start;

            &.container-contato > div{
                display: flex;
                align-items: center;
                gap: 10px;
            }

            &.container-conectado {
                > a {
                    background-color: #ffffff;
                    padding: 10px;
                    display: inline-flex;
                    align-items: center;
                    border-radius: 30px;
                    font-size: 20px;
                    color: #f8beb2;
                }
            }
        }

    }

    div.box-footer {
        width:100%;
        padding: 20px;
        background-color: #ffffff;
        text-align: center;
    }

`;