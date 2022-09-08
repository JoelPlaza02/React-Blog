import styled from "styled-components";

export const LeaveBtnWrapper = styled.div`
    position: relative;
`;

export const LeaveBtn = styled.button`
    font-size: 15px;
    padding: 8px 16px;
    background: rgb(59, 130, 246);
    border-radius: 8px;
    color: white;
    position: absolute;
    top: -11.5rem;
    right: 4rem;

    &:hover {
      cursor: pointer;
      background: rgb(37, 99, 235);
    }

    @media (max-width: 900px) {
      padding: 4px 8px;
      right: 2rem;
    }

    @media (max-width: 525px) {
      padding: 2px 4px;
    }
`;