import React from 'react';
import { Icon } from './styles';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FilterIcon = ({ icon, title, click, isActive, withTitle }) => {
  return withTitle ? (
    <Icon iconTitle={title} isActive={isActive} onClick={() => click(title)}>
      <FontAwesomeIcon icon={['fas', icon]} />
    </Icon>
  ) : (
    <Icon isActive={isActive} onClick={() => click(title)}>
      <FontAwesomeIcon icon={['fas', icon]} />
    </Icon>
  );
};

export default FilterIcon;
