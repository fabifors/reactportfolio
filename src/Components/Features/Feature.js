import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Feature = styled.div`
  background-color: #fff;

  display: flex;
  flex-direction: column;
  text-align: center;

  padding: 4rem 2rem;
  border-radius: 5px;


  svg {
    color: ${props => props.theme.accent.hsl};
    font-size: 4em;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1.5rem;
  }

  .feature__heading {
    color: ${props => props.theme.accent.hsl};
    align-self: center;
    font-size: 1.25em;
    margin: 0;
  }

  .feature__text {
    color: ${props => props.theme.text.hsl};
    text-align: center;
    font-size: 1.0em;
    margin-top: 1rem;
    margin-bottom: 0;
  }

  @media screen and (min-width: 768px) {
    font-size: 15px;
    ${'' /* grid-template-rows: 80px 35px 95px; */}
  }

  @media screen and (min-width: 992px) {
    font-size: 16px;
    ${'' /* grid-template-rows: 70px 35px 85px; */}
  }
`;

const feature = ({ icon, title, content }) => {
  return (
    <Feature >
      <FontAwesomeIcon
        icon={['fas', icon]}
        className="icon" />
      <h3 className="feature__heading">{title}</h3>
      <p className="feature__text">{content}</p>
    </Feature>
  )
};

export default feature;