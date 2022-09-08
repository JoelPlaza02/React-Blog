import React from 'react';
import { DetailWrapper } from "./styles/BlogOneDetails.Styled";


import BlogOneHeader from "./BlogOneHeader";
import BlogOneLeft from "./BlogOneLeft";
import BlogOneAside from './BlogOneAside';


const BlogOneDetails = () => {

  return (
    <DetailWrapper>
      
       <BlogOneHeader /> 

       <BlogOneLeft />

       <BlogOneAside />

    </DetailWrapper>
  )
}

export default BlogOneDetails;