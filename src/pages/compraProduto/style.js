import styled from "styled-components";

export const SectionCarrinho = styled.section`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 2fr 1fr;
    padding: 50px;

    @media only screen and (max-width: 768px) {
        grid-template-columns: 1fr;
      
    }

    > div.container-fotos-produto {
        display: flex;
        flex-direction: column;
        gap: 40px;
        
        
        > div.box-fotos {
            display: flex;
            flex-direction: row;
            gap: 20px;
           
            
            > div.box-mini-fotos {
                display: flex;
                flex-direction: column;
                flex: -1;
                gap: 20px;
                border-radius: 15px;
                

                > img {
                    width: auto;
                    max-width: 110px;
                    height: 140px;
                    border-radius: 15px;
                    cursor: pointer;
                }


                @media only screen and (max-width: 768px) {
                    flex: 1;
                    width: 100%;
                    flex-direction: row;
                    overflow: scroll;
                    scroll-behavior: smooth;

                    &::-webkit-scrollbar{
                        display: none;
                    }

                    > img {
                        min-width: 100%;
                        max-width: 100%;
                        height: auto;
                        border-radius: 20px;
                    }
                }

            }

            > div.foto-big {
                flex: 2;
                
                @media only screen and (max-width: 768px) {
                    display: none;
                    flex: none;
                }

                > img {
                    width: 100%;
                    border-radius: 15px;
                }
            }
        }

        > div.infos-produto {
            
            display: flex;
            flex-direction: column;
            gap: 10px;
            font-style: italic;
            padding: 50px 0 0 0;

            @media only screen and (max-width: 768px) {
                padding: 50px 0 0 0;
                border-top: 1px solid #000000;
            }

            ul > li {
                padding: 10px 0;
            }

        }

        > div.box-redes-sociais {
            display: flex;
            gap: 10px; 
            
            > a {
                border: 1px solid #f8beb2;
                color: #f8beb2;
                display: flex;
                align-items: center;
                padding: 5px;
                justify-content: center;
                font-size: 24px;
                border-radius: 50%;
            }
        }
    }

    > div.container-formulario {
        padding: 10px 30px;

        @media only screen and (max-width: 768px) {
            padding: 40px 0;
        }

        > form {
            display: flex;
            flex-direction: column;
            gap: 20px;

            > h1 {
                font-size: 35px;
            }

            > strong {
                font-size: 24px;
                color: #f8beb2;
                
            }

            > div.box-action {
                display: flex;
                gap: 10px;

                > div {
                    flex: 1;
                    padding: 20px;
                    border: 1px solid #000000;
                    border-radius: 10px;

                    &.box-add-rm {
                        padding: 10px 0px;
                        display: flex;
                        justify-content: space-around;
                        align-items: center;
                    

                        > span:nth-of-type(1) {
                            cursor: pointer;
                            font-size: 20px;
                        }
                        > span:nth-of-type(2) {
                            color: rgba(0, 0, 0, .3);
                            font-size: 19px;
                            font-weight: 300;
                        }
                        > span:nth-of-type(3) {
                            cursor: pointer;
                            font-size: 15px;
                        }
                    }
                }

                > input {
                    border-radius: 15px;
                    flex: 2;
                    background-color: #f8beb2;
                    border: none;
                    color: #ffffff;
                    text-transform: uppercase;
                    letter-spacing: 4px;
                    font-weight: bold;
                    font-size: 16px;
                    cursor: pointer;
                    transition: 200ms;
                    
                    
                    &:hover {
                        box-shadow: inset 1px 1px 20px rgba(0, 0, 0, .1),
                        inset -1px -1px 20px rgba(0, 0, 0, .1);
                    }
                }
            }

            > div.box-select-op {
                display: flex;
                gap: 30px;

                > label {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    text-transform: capitalize;

                    > select {
                        border: 1px solid #000000;
                        display: inline-block;
                        width: 120px;
                        padding: 10px 10px;
                        background-color: #ffffff;
                        outline: none;
                        transition: border 200ms;
                        border-radius: 10px;
                        color: #000000;
                        text-transform: uppercase;
                        cursor: pointer;
                        

                        &:hover {
                            border: 1px solid #f8beb2;
                            color: #f8beb2;
                        }

                        
                    }
                }

                @media only screen and (max-width: 768px){
                    flex-direction: column;

                    > label {
                        > select {
                            width: 100%;
                        }
                    }
                }

            }

            > div.box-alert {

                > p:nth-of-type(1) {
                    color: red;
                }
                > p:nth-of-type(2) {
                    color: green;
                }
            }

            > div.box-infos-wh {
                display: flex;
                gap: 10px;
                flex-direction: column;
                
                > ul {
                    text-transform: capitalize;
                    display: flex;
                    flex-direction: column;
                    gap: 5px;

                }
            }
        }

        

    }
    
`;