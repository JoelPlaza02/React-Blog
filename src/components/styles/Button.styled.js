import styled from 'styled-components';

export const Button = styled.a`
    color: var(--ReadMoreColor);
    font-size: 13px;
    cursor: pointer;
    border: none;
    outline: none;
    transition: all 0.3s ease;

    &:hover {
      color: var(--ReadMoreColorHover);
    }
`
;

export default Button;