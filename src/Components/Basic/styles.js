import styled from 'styled-components';

export const Heading = styled.h2`
  font-size: 2.5em;
  margin-bottom: 2rem;

  color: ${props => props.light ? props.theme.text_light.hsl : props.theme.accent.hsl};
  text-align: ${props => props.center ? 'center' : 'left'};
`;

export const Highlight = styled.span`
  color: ${props => props.light ? props.theme.text_light : props.theme.accent.hsl};
  font-weight: ${props => props.semibold ? 600 : null || props.bold ? 800 : null || 400};
  ${ props => props.underline
    ? `border-bottom: 2px solid ${props.theme.text_light.hsl};`
    : null
  }
`;

export const Text = styled.p`
  margin-bottom: 4rem;
  line-height: 1.5em;
  font-size: 1.25em;
  color: ${props => props.light ? props.theme.text_light.hsl : props.theme.text.hsl};
  text-align: ${props => props.center ? 'center' : 'left'};
  font-weight: ${p => p.bold ? '600' : '400'};
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
  ${props => props.fullScreen
    ? `padding: 4rem 0 5rem; min-height: 100vh;`
    : null};

  ${p => p.padding ? `padding: 4rem 0 5rem;` : null};
`;
