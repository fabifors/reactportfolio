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
          <h1>Bror Armand Fabian Forsström</h1>
          <p>
            Front-End Engineer with <Highlight semibold>4 years</Highlight> of
            professional expertise in <Highlight semibold>React</Highlight>,{' '}
            <Highlight semibold>TypeScript</Highlight>, and cutting-edge web
            tech. Adept at <Highlight semibold>crafting seamless</Highlight>{' '}
            user interfaces.
          </p>
          <Button
            href="#contact"
            text="Let's talk!"
            icon="comments"
            large
            shadow
          />
        </Content>
      </Section>
    </Container>
  );
};

export default Hero;
