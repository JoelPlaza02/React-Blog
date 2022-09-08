import React from 'react';

import { DetailWrapper } from "./styles/BlogThreeDetails.Styled";


import BlogThreeHeader from "./BlogThreeHeader";
import BlogThreeLeft from "./BlogThreeLeft";
import BlogThreeAside from './BlogThreeAside';

const BlogThreeDetails = () => {
  return (
    <DetailWrapper>

       <BlogThreeHeader /> 

       <BlogThreeLeft />

       <BlogThreeAside />

    </DetailWrapper>
  );
};

export default BlogThreeDetails;