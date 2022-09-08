import React from 'react';


import { Left, LeftHeader, HR, BlogText } from "./styles/BlogFiveLeft.Styled";
import Date from './Date';
import Comments from './Comments';

const BlogFiveLeft = () => {
  return (
    <Left>
       <LeftHeader>
              <h4>My fifth day learning React</h4>
           </LeftHeader>
              <HR />
             <Date text={'August 3, 2022'} />
       <BlogText>
               <p>
                  This was my fifth day learning React...<br /> 
                  With the styling a structuring to the pages being done, I want to add a comment 
                  section for my blog readers to interact and share<br />their thoughts of the post.
                  So I did what every good programmer does, which is google. I looked at different
                  ways to implement a<br />comment section and came across various articles. I decided
                  to not use a backend framework so I can keep this project just React.<br />
                  The article I found most helpful was: <a target={'_blank'} rel={'noreferrer'} href="https://letsbuildui.dev/articles/how-to-build-an-expandable-comment-box">How to Build an Expandable Comment Box</a><br />
                  I've learned about:
               </p>
               <ul>
                  <li>useState</li>
                  <li>Props</li>
                  <li>Hooks</li>
                  <li>Create, Reply, Update, Delete</li>
               </ul>
               <p>
                  I learned alot of valuable information today such as CRUD that is essential
                  in web development and has only benefited my react capabilities.
               </p>
               <HR />
        </BlogText>
        <Comments currentUserId="1" />
    </Left>
  );
};

export default BlogFiveLeft;