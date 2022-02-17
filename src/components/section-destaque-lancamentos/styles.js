import styled from "styled-components";

export const SectionsSlides = styled.section`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
    padding: 100px 0;

    > h1 {
        font-size: 45px;
        color: #f8beb2;
    }

    > main.pai-slide-container {
        display: flex;
        padding-top: 40px;
        justify-content: center;
        gap: 20px;
        align-items: center;
        

        & .icons-next-anter {
            font-size: 35px;
            color: #000000;
            cursor: pointer;

            @media only screen and (max-width: 768px) {
                display: none;
            }

        }

        > div.container-slide-roupas {
            display: flex;
            gap: 40px;
            padding: 20px;
            overflow: scroll;
            scroll-behavior: smooth;
            scrollbar-width: none;

            &::-webkit-scrollbar{
                display: none;
                
            }
            &::-moz-scrollbars-none{
                display: none;
            }


            > div > a.link-container {
                display: flex;
                flex-direction: column;
                text-align: center;
                gap: 10px;
                box-shadow: 1px 1px 20px rgba(0, 0, 0, .2);
                border-radius: 30px 30px 0 0;
                padding-bottom: 10px;
                color: #000000;
                text-transform: capitalize;
                font-weight: 900;
                letter-spacing: 1px;
               

                > strong:not([class="preco-produto"]){
                    font-style: italic;
                }
                
                > strong.preco-produto{
                    font-weight: 400;
                    font-size: 22px;
                    color: #f8beb2;
                }

                > img {
                    border-radius: 30px 30px 0 0;
                    width: 100%;
                    min-width: 240px;
                    border-bottom: 4px solid #000000;

                    @media only screen and (max-width: 990px) {
                        min-width: 160px;
                        max-width: 300px;
                    }
                    @media only screen and (max-width: 768px){
                        min-width: 250px;
                        max-width: 300px;
                    }
                    @media only screen and (max-width: 340px){
                        min-width: 150px;
                        max-width: 100%;
                    }
                }

                > span {
                    padding: 10px;
                    border: 1px solid rgba(200, 140,250, .2);/* #b53471 */;
                    border-radius: 20px;
                    transition: 1s;
                   

                    &:hover {
                        background-color: #f8beb2;;
                        
                        color: #ffffff;
                    }
                }
            }
        }
    }
`