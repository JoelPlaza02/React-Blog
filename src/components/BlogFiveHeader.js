import React from 'react';
import { DetailHeader, DetailHeaderText, ImageWrapper, Image } from "./styles/BlogFiveHeader.Styled";
import LeaveButton from './LeaveButton';

const BlogFiveHeader = () => {
  return (
    <DetailHeader>

         <ImageWrapper>
           <Image src='https://raw.githubusercontent.com/JoelPlaza02/Learning-React-Blog/main/public/img/blog9-img.avif' alt='computer monitor setup' />
         </ImageWrapper>
         <DetailHeaderText>My Fifth day learning React</DetailHeaderText>
         <LeaveButton />
    
    </DetailHeader>
  );
};

export default BlogFiveHeader;