import React from 'react';
import Navigation from '../Components/Navigation/Navigation';
import Logo from '../Components/Logo/Logo';
import styled from 'styled-components';
import MenuBtn from '../Components/MenuBtn/MenuBtn';

const Wrapper = styled.header`
  width: 100%;
  height: 90px;
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;


const Header = ({ handleThemeChange, handleOpenMenu, isMobile, isMenuOpen, navLinks }) => {

  const navigation = !isMobile
    ? <Navigation links={navLinks} horizontal />
    : <MenuBtn click={handleOpenMenu} isMenuOpen={isMenuOpen} />;

  return (
    <Wrapper>
      <Logo height="100%" click={handleThemeChange} />
      {navigation}
    </Wrapper>
  );
}


export default React.memo(Header);