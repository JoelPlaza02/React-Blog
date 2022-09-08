import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <div style={{ alignItems: 'center' }}>
    <button onClick={() => logout({ returnTo: window.location.origin })}
            style={{fontSize: '12px', padding: '4px 8px', background: 'rgb(59, 130, 246)', color: '#fff', borderRadius: '8px', cursor: 'pointer'}}>Log Out</button>
    </div>
  );
};

export default LogoutButton;