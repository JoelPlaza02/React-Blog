import styled from 'styled-components';


export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 1.5rem 0;
`;

/*   grid-template-columns: repeat(auto-fill, minmax(value, 1fr)); */

export const Wrapper = styled.div`
    padding: 0 7rem 2rem 7rem;
    justify-content: center;
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(auto-fill, minmax(value, 1fr));
    grid-template-areas: 
    "one one one one"
    "two two three three"
    "four four five five";

 @media (max-width: 815px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 2fr));
    grid-template-areas: 
    "one one one one"
    "two two two two"
    "three three three three"
    "four four four four"
    "five five five five";
}

 @media (max-width: 466px) {
    grid-template-columns: repeat(auto-fit, minmax(220px, 2fr));
}

 @media (max-width: 388px) {
    grid-template-columns: repeat(auto-fit, minmax(190px, 2fr));
}

 @media (max-width: 350px) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 2fr));
}
`;

export const BlogTwo = styled.div` 
    grid-area: two;
    height: 200px;
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

export const BlogWrapper = styled.div`
    display: flex;
    height: 200px;
`;

export const Img = styled.img`
    width: 25%;
    height: 200px;
    object-fit: cover;
`;

export const BlogContent = styled.div`
    display: block;
    margin: 1rem 1rem 0 1.5rem;
`;

export const BlogThree = styled.div`
    grid-area: three;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

export const BlogFour = styled.div`
    grid-area: four;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

export const BlogFive = styled.div`
    grid-area: five;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;


//https://gridbyexample.com/examples/example16/