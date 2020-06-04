import React from 'react';
import { Wrapper } from './styles';

const Container = ({
  fluid,
  children,
  background,
  flex,
  hasNestedContainer,
  ...rest
}) => {
  return (
    <Wrapper
      {...rest}
      background={background}
      hasNestedContainer={hasNestedContainer}
      fluid={fluid}
      flex={flex}
    >
      {children}
    </Wrapper>
  );
};

export default Container;
