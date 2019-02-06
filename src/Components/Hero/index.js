import React from 'react';

// Components
import Portrait from '../Portrait/Portrait';
import Button from '../Button';
import { Highlight } from '../General/styles';
import Container from '../Container';

// Import Styled Components
import { Section, Content } from './styles';

const Hero = () => {

  return (
    <Container>
      <Section>
        <Portrait />
        <Content>
          <h1>Front End Developer in Stockholm</h1>
          <p>I am a <Highlight semibold>Front-End Developer</Highlight> student learning React.js with a focus on <Highlight semibold>design</Highlight>. Together we can make your project <Highlight semibold>stand out</Highlight>!</p>
          <Button href="#contact" text="Let's talk!" icon="comments" large shadow />
        </Content>
      </Section>
    </Container>
  );
}

export default Hero;