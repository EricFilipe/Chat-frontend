import styled from "styled-components";

export const FormContainer = styled.div`
 height: 100vh;
 width: 100vw;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 background-color: #131324;

 .brand{
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        height: 5rem;
    }

    h1{
        color: #fff;
    }
 }

 form{
        display: flex;
        background-color: #00000076;
        border-radius: 8px;
        padding: 20px 30px;

        input{
            background-color: transparent;
            padding: 7px 7px;
            border-radius: 5px;
            outline: none;
            border: 1px solid #4e03ff;
            margin-right: 17px;
            color: #fff;
            &:focus{
                border: 1px solid #997af0;
            }
        }

        button{
            background-color: #997af0;
            padding: 8px 12px;
            border-radius: 5px;
            border: none;
            outline: none;
            font-weight: bold;
            color: #fff;
            font-size: 12px;
            cursor: pointer;
        }
    }
`;