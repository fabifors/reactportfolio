import React from 'react';
import Navigation from '../Components/Navigation/Navigation';
import Logo from '../Components/Logo/Logo';
import styled from 'styled-components';

const navLinks = [
  {
    id: 0,
    href: '#projects',
    text: 'Projects',
    button: false
  },
  {
    id: 1,
    href: '#aboutme',
    text: 'About me',
    button: false
  },
  {
    id: 2,
    href: '#contact',
    text: 'Contact',
    button: true,
    size: 'md'
  },
];

const Wrapper = styled.header`
  width: 100%;
  height: 90px;
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;


const Header = ({ handleThemeChange, isMobile }) => {

  const navigation = !isMobile
    ? <Navigation links={navLinks} horizontal />
    : null;

  return (
    <Wrapper>
      <Logo click={handleThemeChange} />
      {navigation}
    </Wrapper>
  );
}


export default React.memo(Header);