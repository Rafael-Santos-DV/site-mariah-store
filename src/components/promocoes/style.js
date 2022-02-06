import styled from "styled-components";

export const SectionPromocoesContainer = styled.section`
    width: 100%;
    max-width: 1200px;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    align-items: center;

    > h2 {
        color: #f8beb2;
        font-size: 45px;
        letter-spacing: 1px;
    }

    > div.box-all-produtos .link-container-promocoes{
        display: flex;
        flex-direction: column;
        border-radius: 30px;
        box-shadow: 1px 1px 20px rgba(0, 0, 0, .2),
        -1px -1px 20px rgba(0, 0, 0, .2);
        text-align: center;
        color: #000000;
        padding-bottom: 5px;
        position: relative;
        z-index: 0;

        > div.desconto-promocao {
            display: flex;
            position: absolute;
            text-transform: uppercase;
            color: #ffffff;
            width: 50px;
            height: 50px;
            background-color: #f8beb2;
            border-radius: 50%;
            left: 10px;
            top: 10px;
            justify-content: center;
            align-items: center;
            
            
        }

        > div.button-comprar {
            width: 80%;
            border: 1px solid rgba(0, 0, 0, .1);
            border-radius: 30px;
            padding: 10px;
            transition: 1s;
            margin: 0 auto;

            &:hover {
                background-color: #f8beb2;
                color: #ffffff;
                
            }
        }


        > img {
            width: 100%;
            max-width: 280px;
            border-radius: 30px 30px 0 0;
        }

        > strong {
            padding: 15px 0;
            letter-spacing: 1px;
        }

        > div.box-info-produto {
            display: flex;
            gap: 10px;
            justify-content: center;
            align-items: center;
            padding: 5px 0;

            > s {
                text-decoration: line-through;
            }
            > span.preco-novo {
                color: #f8beb2;
                font-weight: 900;
                font-size: 20px;
            }
        }
    }

`;