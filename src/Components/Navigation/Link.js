import React from 'react';
import styled from 'styled-components';

const LinkElement = styled.a`
  text-decoration: none;
  font-weight: 600;
  transition: color 300ms, border 300ms;
  border-bottom: 2px solid;
  border-color: transparent;
  color: ${p => p.theme.accent.hsl};

  &:hover {
    color: ${p => p.theme.accent.lighten(20)};
    border-bottom: 2px solid ${p => p.theme.accent.lighten(20)};
  }
`;

const Link = ({ href, text }) => <LinkElement href={href}>{text}</LinkElement>;

export default Link;