import React from 'react';

// Libraries
import styled from 'styled-components';

// Components
import Portrait from '../Portrait/Portrait';
import Button from '../Button/Button';
import { Highlight } from '../Basic/styles';

const Container = styled.section`
  height: calc(90vh - 90px);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 2.5rem;
`;

const Content = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: ${p => p.theme.accent.hsl};
    font-size: 2.5em;
    font-weight: 600;
    margin: 0.7rem;

    @media screen and (min-width: 768px) {
      font-size: 3em;
    }
  }

  p {
    font-size: 1.25em;
    line-height: 1.4em;
    font-weight: 600;
    color: ${p => p.theme.text.hsl};
    margin-bottom: 3rem;

    @media screen and (min-width: 768px) {
      font-size: 1.25em;
    }
  }
`;

const Hero = ({ theme }) => {

  return (
    <Container>
      <Portrait theme={theme} />
      <Content theme={theme}>
        <h1>Front End Developer in Stockholm</h1>
        <p>I am a <Highlight semibold>Front-End Developer</Highlight> student learning React.js with a focus on <Highlight semibold>design</Highlight>. Together we can make your project <Highlight semibold>stand out</Highlight>!</p>
        <Button href="#contact" text="Let's talk!" icon="comments" large shadow />
      </Content>
    </Container>
  );
}

export default Hero;