import React from 'react';


import { Left, LeftHeader, HR, BlogText } from "./styles/BlogThreeLeft.Styled";
import Date from './Date';
import Comments from './Comments';

const BlogThreeLeft = () => {
  return (
    <Left>
       <LeftHeader>
              <h4>My third day learning React</h4>
           </LeftHeader>
              <HR />
             <Date text={'August 1, 2022'} />
       <BlogText>
               <p>
                  This was my third day learning React...<br /> 
                  I started the day researching on how to navigate to different pages on a click using React. I ended up coming across routing<br />and navigation. With the combination of most
                  articles and posts having old syntax of the implementation of React routing it<br />took
                  me some time to figure it out. Due to the structure of my project, adding an additional
                  file besides App.js to hold all of<br />my home components and import the home component
                  containing the other components into the App.js file where I implemented<br />routing.
                  The article I found most helpful was: <a target={'_blank'} rel={'noreferrer'} href="https://reactrouter.com/docs/en/v6/getting-started/tutorial">Tutorial - React Router</a><br />
                  I've learned about:
               </p>
               <ul>
                  <li>New React Router Update 6 Syntax</li>
                  <li>Navigate & useNavigate</li>
                  <li>Links</li>
                  <li>Search Params</li>
               </ul>
               <p>
                  I learned alot of valuable information today pertaining routing which is 
                  essential not only for the completion of this project,<br />but for many to come.
                  I enjoyed the process of failing until I figured out my solution. Thats what I 
                  believe takes me to the next level.
               </p>
               <HR />
        </BlogText>
        <Comments currentUserId="1" />
    </Left>
  );
};

export default BlogThreeLeft;