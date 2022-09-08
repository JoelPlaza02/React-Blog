import styled from 'styled-components';

export const BlogOne = styled.div`
    grid-area: one;
`;

export const ImageWrapper = styled.div`
    max-width: 100%;
    height: 100%;
    cursor: pointer;
    position: relative;
    text-align: center;
`;

export const Image = styled.img`
    width: 100%;
    height: 325px;
    object-fit: cover;
    border-radius: 6px;
`;

export const MainBoxContent = styled.div`
    color: var(--WhiteColor);
    cursor: pointer;
    position: absolute;
    top: 30%;
    left: 17%;

    @media screen and (max-width: 880px) {
        left: 22%;
    }
`;

export const FeaturedDay = styled.h3`
    font-size: 45px;
    margin-bottom: 1rem;
`;

export const Placeholder = styled.p`
    font-size: 18px;
    margin-bottom: 1rem;

    @media screen and (max-width: 738px) {
        font-weight: bold;
    }
`;