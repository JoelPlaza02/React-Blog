import styled from "styled-components";

export const Aside = styled.aside`
    grid-area: aside;
    //bg green
`;

export const AsideItemBox = styled.div`
    //bg red
    padding: 0 0 .7rem .7rem;
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

export const AsideHeader = styled.header`
    font-size: 15px;
`;

export const AsideBlogHeader = styled.header`
    font-size: 15px;
`;

export const DetailBlogDesc = styled.p`
    font-size: 12px;
`;

export const Button = styled.a`
    color: blueviolet;
    font-size: 10px;
    cursor: pointer;

    &:hover {
        color: rgb(83, 9, 153);
    }
`;