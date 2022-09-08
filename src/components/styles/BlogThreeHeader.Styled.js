import styled from "styled-components";

export const DetailHeader = styled.div`
    grid-area: header;
    max-width: 100%;
`;

export const ImageWrapper = styled.div`
    max-width: 100%;
    height: 100%;
    cursor: pointer;
    position: relative;
`;

export const Image = styled.img`
    height: 210px;
    width: 80vw;
    object-fit: cover;
`;

export const DetailHeaderText = styled.h1`
    color: #fff;
    cursor: pointer;
    position: absolute;
    top: 12%;
    left: 15%;

    @media (max-width: 700px) {
        font-size: 25px;
        top: 14%;
    }

    @media (max-width: 530px) {
        font-size: 20px;
    }

    @media screen and (max-width: 380px) {
        font-size: 18px;
    }
`;