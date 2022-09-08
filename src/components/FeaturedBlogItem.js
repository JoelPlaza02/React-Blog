import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ImageWrapper, Image, MainBoxContent, 
         FeaturedDay, Placeholder, BlogOne } from './styles/FeaturedBlogItem.Styled';

  import Button from './styles/Button.styled';

const FeaturedBlogItem = () => {
  const navigate = useNavigate();

  return (
        <BlogOne>
            <ImageWrapper>
                <Image src="https://raw.githubusercontent.com/JoelPlaza02/Learning-React-Blog/main/public/img/blog6-img.webp" alt='computer monitor setup' />
            </ImageWrapper>
            <MainBoxContent>
                <FeaturedDay>Day 1</FeaturedDay>
                <Placeholder>This is Day 1 placeholder</Placeholder>
                <Button onClick={() => navigate("/BlogOneDetails")} style={{color: '#fff'}}>Continue reading...</Button>
            </MainBoxContent>
        </BlogOne>
  )
}

export default FeaturedBlogItem;