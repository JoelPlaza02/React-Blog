import React from 'react';

import { DetailWrapper } from "./styles/BlogTwoDetails.Styled"; //one


import BlogTwoHeader from "./BlogTwoHeader";
import BlogTwoLeft from "./BlogTwoLeft";
import BlogTwoAside from './BlogTwoAside';

const BlogTwoDetails = () => {
  return (
    <DetailWrapper>
       <BlogTwoHeader /> 

       <BlogTwoLeft />

       <BlogTwoAside />

    </DetailWrapper>
  );
};

export default BlogTwoDetails;