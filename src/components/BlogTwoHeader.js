import React from 'react';
import { DetailHeader, DetailHeaderText, ImageWrapper, Image } from "./styles/BlogOneHeader.Styled";
import LeaveButton from './LeaveButton';

const BlogTwoHeader = () => {
  return (
    <DetailHeader>

         <ImageWrapper>
           <Image src='https://github.com/JoelPlaza02/Learning-React-Blog/blob/main/public/img/blog7-img.jpg?raw=true' alt='computer monitor setup' />
         </ImageWrapper>
         <DetailHeaderText>My Second day learning React</DetailHeaderText>
         <LeaveButton />
    
    </DetailHeader>
  );
};

export default BlogTwoHeader;