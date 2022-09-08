import styled from "styled-components";

export const Left = styled.div`
    grid-area: left;
    //bg yellow
`;

export const LeftHeader = styled.header`
    font-size: 15px;
`;

export const HR = styled.hr`
    border: 0;
    border-top: 2px solid ${props => props.theme.main};
    opacity: .2;
`;

export const BlogText = styled.div`
    font-size: 12px;
`;