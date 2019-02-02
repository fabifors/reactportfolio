import React, { Fragment } from 'react';

// Libraries
import { Motion, spring } from 'react-motion';

// Components
import { Bar, MenuButton } from './styles';

const MenuBtn = ({ isMenuOpen, click }) => {

  return (
    <Motion
      defaultStyle={{ x: 100, opacity: 0 }}
      style={{ x: spring(0), opacity: spring(1) }}>
      {style => (
        <MenuButton style={{ opacity: style.opacity, transform: `translateX(${style.x}px)` }} onClick={() => click()} className={isMenuOpen ? 'open' : null}>
          <Bar />
          <Bar middle />
          <Bar />
        </MenuButton>
      )}
    </Motion>
  );

}

export default MenuBtn;