import React from 'react';
import styled from 'styled-components';


const StyledButton = styled.button`
  border: none;
  border-radius: 5px;

  ${p => p.medium
    ? `
      padding: 0.75rem 1rem;
      font-size: 1em;
    `: null
  };
  ${p => p.large
    ? `
      padding: 1rem 1.5rem;
      font-size: 1.25em;
    `: null
  };

  font-weight: 600;

  transition: background 300ms;

  background: ${props => props.theme.accent.hsl};
  color: ${props => props.theme.text_light.hsl};
  cursor: pointer;
  ${ props => props.shadow
    ? `box-shadow: 0px 10px 20px ${props => props.theme.boxshadow.hsl}`
    : null}

  &:hover {
    background: ${props => props.theme.accent.darken(40)}
  }
`;

const Button = ({ href, text, medium, large, shadow }) => {
  return (
    <a href={href} >
      <StyledButton large={large} medium={medium} shadow={shadow}>{text}</StyledButton>
    </a>
  );
}

export default Button;
