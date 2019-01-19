import styled from 'styled-components';

export const Heading = styled.h2`
  font-size: 2.5em;
  margin-bottom: 2rem;
  color: ${props => props.theme.accent.hsl};
`;

export const Text = styled.p`
  margin-bottom: 4rem;
  line-height: 1.5em;
  font-size: 1.25em;
  color: ${props => props.theme.text.hsl};
`;

export const Background = styled.div`
  background-color: ${props => props.theme.background_light.hsl};
  width: 100%;
  height: auto;
  padding-top: 4rem;
  padding-bottom: 5rem;
`;

export const Section = styled.section`
  text-align: ${props => props.align === 'center' ? 'center' : 'left'};
`;
