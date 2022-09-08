import React from 'react';

import { BlogTwo, BlogWrapper, Img, BlogContent, Day, Date,
         Description } from './styles/BlogItemTwo.Styled';

         import { Wrapper, Img, BlogWrapper, BlogContent, /*BlogTwo,*/ 
         BlogThree, BlogFour, BlogFive, Container } from './styles/Blog.Styled';


const BlogItemTwo = () => {
  return (
    <BlogTwo>
            <BlogWrapper>
                <Img src='img/blog2-img.jpg' alt='computer monitor setup' />
                <BlogContent>
                     <Day />
                     <Date />
                     <Description>This is day 2. Pretty neat. Hello! I need to make this long enough so it gets cut off. We're almost there!...</Description>
                     <Button onClick={() => navigate("/landing")}>Continue reading...</Button>
                </BlogContent>
            </BlogWrapper>
        </BlogTwo>
  )
}

export default BlogItemTwo;