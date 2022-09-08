import React from 'react';
import { DetailHeader, DetailHeaderText, ImageWrapper, Image } from "./styles/BlogFourHeader.Styled";
import LeaveButton from './LeaveButton';

const BlogFourHeader = () => {
  return (
    <DetailHeader>

         <ImageWrapper>
             <Image src='https://github.com/JoelPlaza02/Learning-React-Blog/blob/main/public/img/blog8-img.jpg?raw=true' alt='computer monitor setup' />
         </ImageWrapper>
         <DetailHeaderText>My Fourth day learning React</DetailHeaderText>
         <LeaveButton />
    
    </DetailHeader>
  );
};

export default BlogFourHeader;