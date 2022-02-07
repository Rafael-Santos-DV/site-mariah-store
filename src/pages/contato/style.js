import styled from "styled-components";


export const SectionContato = styled.section`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    justify-content: center;
    display: flex;
    flex-direction: row;
    padding: 30px 70px;
    gap: 20px;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
        gap: 40px;
    }

    > div.container-contato {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 20px;

        > h1 {
            font-size: 40px;
            color: #f8beb2;
        }

        & a {
            color: #000000;
        }

        > div {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 18px;
        }
    }

    > div.container-formulario {
        flex: 2;
        display: flex;
        flex-direction: column;
        gap: 10px;

        > textarea {
            padding: 10px;
            border: 1px solid rgba(0, 0, 0, .1);
            border-radius: 10px;
           

            &:focus {
                border: none;
                outline: 1px solid #f8beb2;
            }
        }

        > input {
            padding: 15px;
            border-radius: 10px;
            border: 1px solid rgba(0, 0, 0, .1);
            
            &:focus {
                outline: 1px solid #f8beb2;
                border: none;
            }

            &[type="submit"] {
                border: none;
                color: #ffffff;
                background-color: #f8beb2;
                cursor: pointer;
                transition: 1s;
                font-size: 20px;
                text-transform: uppercase;

                &:hover {
                    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, .2), 
                    inset -1px -1px 5px rgba(0, 0, 0, .2);
                    
                }
            }

        }
    }
`;