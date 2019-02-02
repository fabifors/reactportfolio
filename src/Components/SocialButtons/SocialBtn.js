import React from 'react';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SocialLink } from './styles';

const SocialButton = ({ icon, title, url }) => {
  return (
    <SocialLink href={url} title={title}>
      <FontAwesomeIcon icon={['fab', icon]} />
    </SocialLink>
  );
}

export default SocialButton;