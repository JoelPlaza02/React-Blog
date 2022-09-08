import React from 'react';

import { DetailWrapper } from "./styles/BlogFourDetails.Styled";


import BlogFiveHeader from "./BlogFiveHeader";
import BlogFiveLeft from "./BlogFiveLeft";
import BlogFiveAside from './BlogFiveAside';

const BlogFiveDetails = () => {
  return (
    <DetailWrapper>

       <BlogFiveHeader /> 

       <BlogFiveLeft />

       <BlogFiveAside />

    </DetailWrapper>
  );
};

export default BlogFiveDetails;