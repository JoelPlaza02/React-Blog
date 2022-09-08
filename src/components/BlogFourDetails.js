import React from 'react';

import { DetailWrapper } from "./styles/BlogFourDetails.Styled";


import BlogFourHeader from "./BlogFourHeader";
import BlogFourLeft from "./BlogFourLeft";
import BlogFourAside from './BlogFourAside';

const BlogFourDetails = () => {
  return (
    <DetailWrapper>

       <BlogFourHeader /> 

       <BlogFourLeft />

       <BlogFourAside />

    </DetailWrapper>
  );
};

export default BlogFourDetails;