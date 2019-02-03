import styled from 'styled-components';

export const Heading = styled.h2`
  font-size: 2.5em;
  margin-bottom: 2rem;

  color: ${p => p.light ? p.theme.text_light.hsl : p.theme.accent.hsl};
  text-align: ${p => p.center ? 'center' : 'left'};
`;

export const Highlight = styled.span`
  color: ${p => p.light ? p.theme.text_light.hsl : p.theme.accent.hsl};
  font-weight: ${p => p.semibold ? 600 : null || p.bold ? 800 : null || 400};
  ${ p => p.underline
    ? `border-bottom: 2px solid ${p.theme.text_light.hsl};`
    : null
  }
`;

export const Text = styled.p`
  margin-bottom: 4rem;
  line-height: 1.5em;
  font-size: 1.25em;
  color: ${p => p.light ? p.theme.text_light.hsl : p.theme.text.hsl};
  text-align: ${p => p.center ? 'center' : 'left'};
  font-weight: ${p => p.bold ? '600' : '400'};
`;

export const Background = styled.div`
  background-color: ${p => p.theme.background_light.hsl};
  width: 100%;
  height: auto;
  padding-top: 4rem;
  padding-bottom: 5rem;
`;

export const Section = styled.section`
  text-align: ${p => p.align === 'center' ? 'center' : 'left'};
  ${p => p.fullScreen
    ? `padding: 4rem 0 5rem; min-height: 100vh;`
    : null};

  ${p => p.padding ? `padding: 4rem 0 5rem;` : null};
`;

export const HeadsUp = styled.div`
  max-width: 800px;
  display: block;
  padding: 1rem 1.25rem 1rem 3rem;
  border-radius: 8px;
  background: ${p => p.theme.background_light.hsl};
  font-size: 0.8em;

  position: relative;

  margin-left: auto;
  margin-right: auto;
  p {
    margin: 0;
  }

  svg {
    font-size: 2em;
    color: ${p => p.theme.accent.getNewHue(p.theme.accent.hue + 120)};
    position: absolute;
    left: 1rem;
    top: 1rem;
  }
`;