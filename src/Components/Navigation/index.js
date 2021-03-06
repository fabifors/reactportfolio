import React from 'react';

// Components
import Link from './Link';
import List from '../List/List';
import ListItem from '../List/ListItem';
import Button from '../Button';
import { Wrapper } from './styles';

const Navigation = (props) => {
  const { links, horizontal } = props;

  return (
    <Wrapper>
      <List horizontal={horizontal}>
        {links.map((link, index) =>
          !link.button ? (
            <ListItem key={index}>
              <Link href={link.href} text={link.text} />
            </ListItem>
          ) : (
            <ListItem key={index}>
              <Button
                nested
                secondary
                href={link.href}
                small
                text={link.text}
              />
            </ListItem>
          )
        )}
      </List>
    </Wrapper>
  );
};

export default Navigation;
