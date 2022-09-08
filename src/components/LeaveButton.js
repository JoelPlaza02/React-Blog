import React from 'react';

import { useNavigate } from 'react-router-dom';
import { LeaveBtn, LeaveBtnWrapper } from './styles/LeaveButton.Styled';

const LeaveButton = () => {
  const navigate = useNavigate();

  return (
    <LeaveBtnWrapper>
      <LeaveBtn onClick={() => navigate('/')}>Back Home</LeaveBtn>
    </LeaveBtnWrapper>
  );
};

export default LeaveButton;