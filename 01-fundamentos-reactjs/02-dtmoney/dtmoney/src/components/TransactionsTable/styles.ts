import { styled } from "styled-components";

export const Container = styled.div`
    table {
        margin-top:4rem;
        width:100%;
        border-spacing:0 0.5rem;
    }
    th {
        color:var(--text-body);
        text-align:left;
        font-weight:400;
        line-height:1.5rem;
        padding:1rem 2rem;
    }
    td {
        padding:1rem 2rem;
        border:0;
        background-color:var(--shape);
        color:var(--text-body);
        border-radius:.25rem;
        &:first-child{
            color:var(--text-title);
        }

        &.deposit{
            color:var(--green);
        }
        &.withdraw{
            color:var(--red);
        }
    }

    
`;