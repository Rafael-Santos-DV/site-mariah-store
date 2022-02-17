import styled from "styled-components";

export const SectionPesquisa = styled.section`
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
    padding-top: 20px;

    > h1 {
        font-size: 40px;
        color: #f8beb2;
    }

    > p {
        font-size: 20px;
        padding: 20px;
        color: #000000;
    }

    > div.gallery-pesquisa {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        padding: 40px;
        grid-gap: 40px 20px;
        

        @media only screen and (max-width: 990px) {
            grid-template-columns: repeat(3, 1fr);
        }

        @media only screen and (max-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
        }

        > div.box-produto {
            > a.link-container {
                color: #000000;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 20px;
                padding-bottom: 30px;
                border-radius: 30px;
                box-shadow: 1px 1px 5px rgba(0, 0, 0, .1),
                -1px -1px 5px rgba(0, 0, 0, .1);

                > img {
                    width: 100%;
                    border-radius: 30px 30px 0 0;
                    border-bottom: 4px solid #000000;
                }

                > strong {
                    font-size: 20px;
                    text-transform: capitalize;
                }

                > strong.preco-produto {
                    font-size: 22px;
                    color: #f8beb2;
                    font-weight: bold;
                }

                > span.button-comprar {
                    border: 1px solid rgba(0, 0, 0, .1);
                    padding: 10px 40px;
                    border-radius: 30px;
                    text-transform: capitalize;
                    transition: background 1s;

                    &:hover {
                        color: #ffffff;
                        background-color: #f8beb2;
                    }
                }

            }
        }
    }

`;