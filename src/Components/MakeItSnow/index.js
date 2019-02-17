import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SnowBtn = styled.button`
  /* opacity: 0.9; */
  cursor: pointer;
  position:fixed;
  bottom: 0;
  left: 4rem;
  border: none;
  outline: 0;
  background: ${p => p.theme.accent.lighten(5)};
  color: ${p => p.theme.text_light.hsl};
  transition: background 300ms, transform 300ms, padding 300ms;
  padding-bottom: 1rem;

  border-radius: 10px 10px 0 0; 
  box-shadow: 0 3px 10px hsla(0, 0%, 0%, 0.25);

  font-size: 1.5em;

  transform: translateY(0);
  
  svg{
    opacity: 1;
    transition: transform 300ms, color 200ms;
  }

  :hover {
    transform: translateY(5);
    padding-bottom: 2rem;
    svg{
      transform: rotate(180deg);
      color: ${p => p.theme.text_light.darken(10)};
    }
  }
`;

const MakeItSnow = ({ click }) => {
  return (
    <SnowBtn onClick={() => click()} >
      <FontAwesomeIcon icon={['fas', 'snowflake']} />
    </SnowBtn>
  );
}

export default MakeItSnow;