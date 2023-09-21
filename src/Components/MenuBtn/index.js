import React from 'react';

// Libraries
import { useSpring, animated } from '@react-spring/web';

// Components
import { Bar, MenuButton as StyledMenuButton } from './styles';

const AnimatedMenuButton = animated(StyledMenuButton);

const MenuBtn = ({ isMenuOpen, click }) => {
  const style = useSpring({
    x: 0,
    opacity: 1,
    from: { x: 100, opacity: 0 },
  });

  return (
    <AnimatedMenuButton
      style={{
        opacity: style.opacity,
        transform: style.x.to((x) => `translateX(${x}px)`),
      }}
      onClick={() => click()}
      className={isMenuOpen ? 'open' : null}
    >
      <Bar />
      <Bar middle />
      <Bar />
    </AnimatedMenuButton>
  );
};

export default MenuBtn;
