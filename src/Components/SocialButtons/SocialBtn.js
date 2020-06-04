import React from 'react';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Styled Components
import { SocialLink } from './styles';

const SocialButton = ({ icon, title, url }) => {
  return (
    <SocialLink
      target="_blank"
      rel="noopener noreferrer"
      href={url}
      title={title}
    >
      <FontAwesomeIcon icon={['fab', icon]} />
    </SocialLink>
  );
};

export default SocialButton;
