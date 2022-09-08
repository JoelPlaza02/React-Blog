import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Wrapper, Img, BlogWrapper, BlogContent, BlogTwo,
         BlogThree, BlogFour, BlogFive, Container } from './styles/Blog.Styled';

import Button from './styles/Button.styled';
import Description from './styles/Description.styled';
import Day from './Day';
import Date from './Date';
import FeaturedBlogItem from './FeaturedBlogItem';
 
const BlogItem = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Wrapper>

        <FeaturedBlogItem />
        <BlogTwo>
            <BlogWrapper>
                <Img src='https://github.com/JoelPlaza02/Learning-React-Blog/blob/main/public/img/blog2-img.jpg?raw=true' alt='computer monitor setup' />
                <BlogContent>
                     <Day />
                     <Date text='July 31, 2022' />
                     <Description>I started the day researching how to style a page in React...</Description>
                     <Button onClick={() => navigate("/BlogTwoDetails")}>Continue reading...</Button>
                </BlogContent>
            </BlogWrapper>
        </BlogTwo>

        <BlogThree>
        <BlogWrapper>
                <Img src='https://github.com/JoelPlaza02/Learning-React-Blog/blob/main/public/img/blog3-img.jpg?raw=true' alt='computer monitor setup' />
                <BlogContent>
                     <Day text='Day 3' />
                     <Date text='August 1, 2022' />
                     <Description>
                      Still trying to figure out how to add routes to my...
                     </Description>
                     <Button onClick={() => navigate("/BlogThreeDetails")}>Continue reading...</Button>
                </BlogContent>
            </BlogWrapper>
        </BlogThree>

        <BlogFour>
        <BlogWrapper>
                <Img src='https://github.com/JoelPlaza02/Learning-React-Blog/blob/main/public/img/blog4-img.jpg?raw=true' alt='computer monitor setup' />
                <BlogContent>
                     <Day text='Day 4' />
                     <Date text='August 2, 2022' />
                     <Description>
                      With the importing, styling components, and routing made I...
                      </Description>
                     <Button onClick={() => navigate("/BlogFourDetails")}>Continue reading...</Button>
                </BlogContent>
            </BlogWrapper>
        </BlogFour>

        <BlogFive>
        <BlogWrapper>
                <Img src='https://github.com/JoelPlaza02/Learning-React-Blog/blob/main/public/img/blog5-img.jpg?raw=true' alt='computer monitor setup' />
                <BlogContent>
                     <Day text='Day 5' />
                     <Date text='August 3, 2022' />
                     <Description>This is day 2. Pretty neat. Hello! I need to make this long...</Description>
                     <Button onClick={() => navigate("/BlogFiveDetails")}>Continue reading...</Button>
                </BlogContent>
            </BlogWrapper>
        </BlogFive>

      </Wrapper>
    </Container>
  )
};

export default BlogItem; 