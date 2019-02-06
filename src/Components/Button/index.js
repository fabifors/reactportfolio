import React from 'react';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Import styled components
import { Link, WithIcon, StyledButton } from './styles';

const Button = ({ icon, href, text, ...rest }) => {
  return (
    <Link href={href}>
      {icon
        ? <WithIcon {...rest}>
          <FontAwesomeIcon icon={['fas', icon]} />{text}
        </WithIcon>
        : <StyledButton {...rest}>{text}</StyledButton>
      }
    </Link>
  );
}

export default Button;
