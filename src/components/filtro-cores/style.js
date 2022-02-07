import styled from "styled-components";

export const AsideFiltro = styled.aside`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 35px;

    > label.box-filtro {
        display: flex;
        align-items: center;
        gap: 10px;
        justify-content: space-between;
        transition: all 1s;
        
        &:hover {
            color: #f8beb2;
        }

        > span.cor-filtro {
            width: 20px;
            height: 20px;
            border-radius: 50%;

        }

        > input.select-cor {
            display: inline-block;
            padding: 8px;
            appearance: none;
            border: 1px solid rgba(0, 0, 0, .1);
            border-radius: 5px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;

            &:hover{
                border:1px solid #f8beb2;
            }

            &:checked::before {
                content: "";
                border-radius: 5px;
                position: absolute;
                padding: 5px;
                background-color: #f8beb2;

                
            }
        }
    }
`;