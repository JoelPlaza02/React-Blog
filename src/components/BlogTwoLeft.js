import React from 'react';


import { Left, LeftHeader, HR, BlogText } from "./styles/BlogTwoLeft.Styled";
import Date from './Date';
import Comments from './Comments';

const BlogTwoLeft = () => {
  return (
    <Left>
       <LeftHeader>
              <h4>My second day learning React</h4>
           </LeftHeader>
              <HR />
             <Date text={'July 31, 2022'} />
       <BlogText>
               <p>
                  This was my second day learning React...<br /> 
                  I started the day researching about the different ways to style a page in react. After reading articles and watching Youtube videos,<br />I decided to go with component styling.
                  The Youtube video I found most helpful was: <a target={'_blank'} rel={'noreferrer'} href="https://www.youtube.com/watch?v=02zO0hZmwnw&t=1164s">Styled Components Crash Course & Project</a><br />
                  I've learned about:
               </p>
               <ul>
                  <li>Theming & Global Styling</li>
                  <li>Passing Props</li>
                  <li>Style Inheritance</li>
                  <li>Switching Component Types</li>
                  <li>Specifying Attributes</li>
               </ul>
               <p>
                  I learned alot of valuable information today pertaining styled components which is 
                  paramount for me moving forward in this project.<br />Next is React routing.
               </p>
               <HR />
        </BlogText>
        <Comments currentUserId="1" />
    </Left>
  );
};

export default BlogTwoLeft;