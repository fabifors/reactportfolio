import React from 'react';
import Navigation from '../Navigation';
import Logo from '../Logo/Logo';
import MenuBtn from '../MenuBtn';
import { Wrapper } from './styles';



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