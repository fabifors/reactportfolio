import React from 'react';
import styled from 'styled-components';

const padding = '1rem';

const Wrapper = styled.div`
  padding-right: ${padding};
  padding-left: ${padding};
  margin-right: auto;
  margin-left: auto;

  ${ p => p.fluid ? null : `@media screen and (min-width: 768px) {
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
`;

const Container = ({ fluid, children }) => {

  return (
    <Wrapper fluid={fluid}>
      {children}
    </Wrapper>
  );
}

export default Container;