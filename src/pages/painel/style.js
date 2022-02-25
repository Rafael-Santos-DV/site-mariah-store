import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    max-height: 50vh;
    text-align: center;
    display: flex;
    align-items: center;
   
`;

export const Box = styled.div`
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, .1);
    padding: 30px 10px;
    gap: 20px;


    h1 {
        font-size: 26px;
        padding: 5px;
        color: #f8beb2;
    }
`;


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    > input {
        width: 100%;
        max-width: 200px;
        padding: 8px 0;
        border: none;
        cursor: pointer;
        background-color: #f8beb2;
        border-radius: 4px;
        color: #ffffff;

        &:hover {
            box-shadow: inset 0px 0px 5px rgba(0, 0, 0, .1);
        }
    }
`;

export const BoxMin = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 15px;
    justify-content: center;


    input {
        width: 100%;
        max-width: 250px;
        padding: 5px 20px;
        outline: none;
        border: none;
        border-bottom: 2px solid #f8beb2;
    }

    .icon {
        position: relative;
        top: 5px;
        color:  #f8beb2;
    }

`;

