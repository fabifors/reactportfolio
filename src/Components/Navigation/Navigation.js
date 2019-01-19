import React from 'react';
import styled from 'styled-components';
import Link from './Link';
import List from '../List/List';
import ListItem from '../List/ListItem';
import Button from '../Button/Button';

const Wrapper = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
`;

const Navigation = (props) => {
  const { links, horizontal } = props;

  return (
    <Wrapper>
      <List horizontal={horizontal}>
        {links.map(link => !link.button ?
          <ListItem key={link.id}>
            <Link href={link.href} text={link.text} />
          </ListItem> :

          <ListItem key={link.id}>
            <Button href={link.href} medium text={link.text} />
          </ListItem>
        )}
      </List>
    </Wrapper>
  );
}

export default Navigation;