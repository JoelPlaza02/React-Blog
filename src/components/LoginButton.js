import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}
          style={{ width: '100%', height: '50px', color: '#fff', background: '#2691d9', cursor: 'pointer', fontWeight: 'bold' }}>Log In</button>
};

export default LoginButton;