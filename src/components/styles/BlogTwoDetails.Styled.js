import styled from "styled-components";

export const DetailWrapper = styled.div`
    padding: 1.5rem 7rem 2rem 7rem;
    justify-content: center;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(value, 1fr));
    grid-template-areas: 
    "header header header"
    "left left aside";
`;