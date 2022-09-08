import React from 'react';


import { Left, LeftHeader, HR, BlogText } from "./styles/BlogFourLeft.Styled";
import Date from './Date';
import Comments from './Comments';

const BlogFourLeft = () => {
  return (
    <Left>
       <LeftHeader>
              <h4>My fourth day learning React</h4>
           </LeftHeader>
              <HR />
             <Date text={'August 2, 2022'} />
       <BlogText>
               <p>
                  This was my fourth day learning React...<br /> 
                  With  the importing, styling components, and routing made I needed to start styling
                  my project. My project is a Blog with a home page<br />and redirected blog pages. In the
                  home page I want a featured blog and blogs beneath the featured blog in columns of 
                  two. With the<br />my experience of html and css I was familiar with grid-areas. Now I 
                  wasn't an expert persay, but with research I found the article that<br />helped me acheive 
                  my desired structure for my home and details page using grid-area.
                  The article I found most helpful was:<br /><a target={'_blank'} rel={'noreferrer'} href="https://www.smashingmagazine.com/understanding-css-grid-template-areas/">Understanding CSS Grid: Grid Template Areas</a><br />
                  I've learned about:
               </p>
               <ul>
                  <li>Grid-areas</li>
                  <li>Structuring Page Properly</li>
                  <li>Make Page Responsive Without Media Queries using auto-fill minmax</li>
               </ul>
               <p>
                  I learned alot of valuable information today pertaining styling and grid-areas,
                  which makes structuring a page alot easier and proper.
               </p>
               <HR />
        </BlogText>
        <Comments currentUserId="1" />
    </Left>
  );
};

export default BlogFourLeft;