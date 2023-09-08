import { styled } from "styled-components";

export const Container = styled.form`
    h2{color:var(--text-title);
    font-size:1.5rem;
    margin-bottom:2rem;
    }
    input{
        width:100%;
        padding:0 1.5rem;
        height:4rem;
        background-color:#e7e9ee;
        border:1px solid #d7d7d7;

        font-weight:400;
        font-size:1rem;

        &::placeholder{
            color:var(--text-body);
        }
    }
`;