import React from 'react'

// importing theme styled components
import { ThemeProvider } from 'styled-components';

import BlogItem from './BlogItem';
import GlobalStyles from './styles/Global';
import { HR } from './styles/BlogOneLeft.Styled';

import LoginButton from './LoginButton';
import User from './User';
import { useAuth0 } from '@auth0/auth0-react';

const theme = {
  colors: {
     header: 'red',
     body: '#fff',
  },
};


HR.defaultProps = {
  theme: {
    main: '#000',
  },
};


const Home = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <ThemeProvider theme={theme}>
      <>
      {!isAuthenticated ? (
        <div style={{ width: '100vw', height: '100vh', background: 'linear-gradient(120deg, #2980b9, #8e44ad)' }}>
       <div style={{ width: '40%', position: 'fixed', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
        <p style={{ fontSize: "2rem", color: '#fff', textAlign: 'center', marginBottom: '5rem', fontWeight: 'bold' }}>Please Login</p>
        <LoginButton />
       </div>
       </div>
      ) :
      <div>
        <User />
        <div className='Home'>
            <GlobalStyles />
            <BlogItem />
        </div>
      </div>}
  
      </>
    </ThemeProvider>
  )
}

export default Home;