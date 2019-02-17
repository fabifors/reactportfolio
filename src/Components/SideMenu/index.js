import React from 'react';
import { MenuContainer, Heading, Nav, List, Item, Link } from './styles';

const SideMenu = (props) => {
  const { style, handleOpenMenu } = props;

  return (

    <MenuContainer style={style}>
      <Heading>Menu</Heading>
      <Nav>
        <List>
          <Item><Link onClick={() => handleOpenMenu()} href="#about-me">About Me</Link></Item>
          <Item><Link onClick={() => handleOpenMenu()} href="#projects">Portfolio</Link></Item>
          <Item><Link onClick={() => handleOpenMenu()} href="#skills">Skills</Link></Item>
          <Item><Link onClick={() => handleOpenMenu()} href="#contact">Contact</Link></Item>
        </List>
      </Nav>
    </MenuContainer>
  )
}

export default SideMenu;