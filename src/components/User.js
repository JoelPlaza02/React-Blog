import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import LogoutButton from './LogoutButton';

const User = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
       <div style={{display: 'flex', background: '#4267B2', color: '#fff', width: '100vw', height: '80px', padding: '45px', alignItems: 'center', justifyContent: 'space-between'}}>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <img style={{height: '40px', borderRadius: '50%', marginRight: '10px'}} src={user.picture} alt={user.name} />
            <div style={{display: 'block'}}>
              <h2 style={{fontSize: '12px'}}>{user.name}</h2>
              <p style={{fontSize: '12px'}}>{user.email}</p>
          </div>
            </div>
            <LogoutButton />
       </div>
    )
  );
};

export default User;