import React from 'react';

// Styled Components
import { Feature, FeatureHeading, FeatureText } from './styles';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const feature = ({ icon, title, content }) => {
  return (
    <Feature >
      <FontAwesomeIcon
        icon={['fas', icon]}
        className="icon" />
      <FeatureHeading>{title}</FeatureHeading>
      <FeatureText>{content}</FeatureText>
    </Feature>
  )
};

export default feature;