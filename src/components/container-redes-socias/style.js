import styled from "styled-components";

export const DivRedes = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 60px;
    

    > a.box-redes-sociais {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #000000;
        gap: 15px;
        text-align: center;
        
        > div {
            display: flex;
            align-items: center;
            gap: 5px;
            padding: 10px;
            font-size: 30px;
            color: #f8beb2;
            font-weight: bold;
            font-style: italic;
        }

        > span {
            border: 1px solid #f8beb2;
            padding: 10px 15px;
            border-radius: 30px;
            color: #f8beb2;
            text-transform: uppercase;
            font-size: 12px;
            font-weight: bold;
            transition: background 1s;
            
            &:hover {
                background-color: #f8beb2;
                color: #ffffff;
            }
        }
    }
`;