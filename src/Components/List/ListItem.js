import React from 'react';
import styled from 'styled-components';

const Item = styled.li`
  margin-left: 1.5rem;
  list-style: none;
`;

const ListItem = ({ children }) => <Item>{children}</Item>;

export default ListItem;
