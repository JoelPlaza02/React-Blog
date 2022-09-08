import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Aside, AsideItemBox, AsideHeader, AsideBlogHeader, DetailBlogDesc, Button } from "./styles/BlogTwoAside.Styled";

import { HR } from "./styles/BlogOneLeft.Styled";
import Date from "./Date";

const BlogTwoAside = () => {
  const navigate = useNavigate();
  return (
    <Aside>
        <AsideHeader>
           <h4>Other Posts</h4>
        </AsideHeader>
        <AsideItemBox>
          <HR />
        <AsideBlogHeader>
            <h4>Day 1 - Todo Tutorial<br /><Date /></h4>
        </AsideBlogHeader>
            <DetailBlogDesc>
                            In my first day of learning React I started following
                            a React build<br />a Todo List project on Youtube...
            </DetailBlogDesc>
            <Button onClick={() => navigate("/BlogOneDetails")}>Continue reading...</Button>
        </AsideItemBox>

        <AsideItemBox>
          <HR />
        <AsideBlogHeader>
            <h4>Day 2 - First Project<br /><Date text={'July 31, 2022'} /></h4>
        </AsideBlogHeader>
            <DetailBlogDesc>
                            I started the day researching how to style a page in React...
            </DetailBlogDesc>
            <Button onClick={() => navigate("/BlogTwoDetails")}>Continue reading...</Button>
        </AsideItemBox>

        <AsideItemBox>
          <HR />
        <AsideBlogHeader>
            <h4>Day 4 - Structuring With Grid-Areas<br /><Date text={'August 1, 2022'} /></h4>
        </AsideBlogHeader>
            <DetailBlogDesc>
                            With the importing, styling components, and routing made I needed<br />to start styling my project. My project is a Blog with a home page<br />
                            and redirected blog pages...
            </DetailBlogDesc>
            <Button onClick={() => navigate("/BlogFourDetails")}>Continue reading...</Button>
        </AsideItemBox>

        <AsideItemBox>
          <HR />
        <AsideBlogHeader>
            <h4>Day 5 - Comment Section<br /><Date text={'August 2, 2022'} /></h4>
        </AsideBlogHeader>
            <DetailBlogDesc>
                            With the styling a structuring to the pages being done, I want to add a<br /> comment section for my blog readers to interact...
            </DetailBlogDesc>
            <Button onClick={() => navigate("/BlogFiveDetails")}>Continue reading...</Button>
        </AsideItemBox>
    </Aside>
  );
};

export default BlogTwoAside;