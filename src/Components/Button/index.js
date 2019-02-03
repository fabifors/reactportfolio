import React from 'react';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Import styled components
import { Link, WithIcon, StyledButton } from './styles';

const Button = ({ icon, href, text, medium, large, shadow, ...rest }) => {
  return (
    <Link href={href}>
      {icon
        ? <WithIcon large={large} medium={medium} shadow={shadow} {...rest}>
          <FontAwesomeIcon icon={['fas', icon]} />{text}
        </WithIcon>
        : <StyledButton large={large} medium={medium} shadow={shadow} {...rest}>{text}</StyledButton>
      }
    </Link>
  );
}

export default Button;
