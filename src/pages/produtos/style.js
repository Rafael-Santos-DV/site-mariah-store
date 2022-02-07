import styled from "styled-components";

export const ContainerProdutos = styled.section`
    margin: 0 auto;
    max-width: 1200px;
    display: grid;
    grid-template-columns: 1fr 3fr;
    padding: 20px;

    @media only screen and (max-width: 768px)  {
        grid-template-columns: 1fr;
        padding: 20px 60px;
    }
    @media only screen and (max-width: 568px) {
        padding: 20px;
    }

    > div.grid-produtos {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;

        @media only screen and (max-width: 990px) {
            grid-template-columns: repeat(3, 1fr);
        }

        @media only screen and (max-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
        }

        > div.box-produto {
            > a.link-container {
                display: flex;
                flex-direction: column;
                text-align: center;
                border-radius: 30px;
                gap: 10px;
                color: #000000;
                justify-content: center;
                align-items: center;
                box-shadow: 1px 1px 1px rgba(0, 0, 0, .1),
                -1px -1px 1px rgba(0, 0, 0, .1);
                background-color: #ffffff;

                > img {
                    border-radius: 30px 30px 0 0;
                    width: 100%;
                }

                > span.preco-produto {
                    color: #f8beb2;
                    font-size: 22px;
                    font-weight: 700;
                }

                > span.button-comprar {
                    width: 80%;
                    border: 1px solid rgba(0, 0, 0, .1);
                    padding: 10px;
                    border-radius: 40px;
                    transition: background 1s;

                    &:hover {
                        background-color: #f8beb2;
                        color: #ffffff;
                    }
                }

                > strong {
                    text-transform: capitalize;
                }
            }
        }
    }

`;