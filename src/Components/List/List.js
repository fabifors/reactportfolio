import React from 'react';
import styled from 'styled-components';

const UL = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: ${(p) => (p.horizontal ? 'row' : 'column')};
  padding: 0;
`;

const List = ({ children, horizontal }) => {
  return <UL horizontal={horizontal}>{children}</UL>;
};
export default List;
