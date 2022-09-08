import React from 'react';


import { Left, LeftHeader, HR, BlogText } from "./styles/BlogOneLeft.Styled";
import Date from './Date';
import Comments from './Comments';

const BlogOneLeft = () => {
  return (
    <Left>
       <LeftHeader>
              <h4>My first day learning React</h4>
           </LeftHeader>
              <HR />
             <Date />
       <BlogText>
               <p>
                  This was my first day learning React...<br /> 
                  I started learning by following a React build a Todo List
                  project on Youtube, this one here: <a target={'_blank'} rel={'noreferrer'} href="https://www.youtube.com/watch?v=pCA4qpQDZD8&t=494s">Build A Todo App With React</a><br />
                  I've learned about:
               </p>
               <ul>
                  <li>Components</li>
                  <li>Styled Components</li>
                  <li>Importing & Exporting</li>
                  <li>React hooks</li>
                  <li>State</li>
               </ul>
               <p>
                  This was a great course, but to be honest I am getting a bit border of tutorials.
                  Tomorrow I think I will start my first from-scratch React project.
               </p>
               <HR />
        </BlogText>
        <Comments currentUserId="1" />
    </Left>
  );
};

export default BlogOneLeft;