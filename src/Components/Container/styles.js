// Libraries
import styled from 'styled-components';

const padding = '1rem';

export const Wrapper = styled.div`
  padding-right: ${padding};
  padding-left: ${padding};
  margin-right: auto;
  margin-left: auto;

  ${(props) =>
    props.background ? `background: ${props.theme.accent.darken(3)};` : null}

  ${(p) =>
    p.fluid
      ? null
      : `@media screen and (min-width: 768px) {
      width: 750px;
    }

    @media screen and (min-width: 992px) {
      width: calc(992px - ${padding});
    }

    @media screen and (min-width: 1200px) {
      width: calc(1200px - ${padding});
    }

    @media screen and (min-width: 1400px) {
      calc(1400px - ${padding});
    }
    `} 
  ${(p) => (p.hasNestedContainer ? `padding: 0;` : null)};

  ${(p) => (p.height ? `min-height: ${p.height}` : null)}

`;
