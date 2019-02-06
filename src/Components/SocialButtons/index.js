import React from 'react';

import { SocialWrapper } from './styles';
import SocialButton from './SocialBtn';
import { buttons } from './data';

const SocialButtons = () => {
  return (
    <SocialWrapper>
      {buttons.map((btn, i) => (
        <SocialButton key={i} icon={btn.icon} title={btn.title} url={btn.url} />
      ))}
    </SocialWrapper>
  );
}

export default SocialButtons;