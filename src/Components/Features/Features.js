import React from 'react';

// Components
import Feature from './Feature';
import Data from './data.js';
import Container from '../Wrappers/Container';

// Styled components
import { Text, Heading, Background, Section, Highlight } from '../Basic/styles';
import { FeatureList } from './styles';

const featureList = Data.map(feature => {
  return (<Feature key={feature.id} title={feature.title} content={feature.content} icon={feature.icon} alt={feature.alt} />)
});

const Features = ({ id }) => {

  const flex = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  }

  return (
    <Background id={id}>
      <Container style={flex}>
        <Section>
          <Heading center>What I do</Heading>
          <Text center>Currently a student learning <Highlight semibold>Front-End Development</Highlight> at KYH in Stockholm. Prior to this I have worked with <Highlight semibold>HTML</Highlight>, <Highlight semibold>CSS</Highlight> and <Highlight semibold>JavaScript</Highlight> to build websites for my friends and family. I have designed both websites and assets. Being interested in both coding and design gives me a deeper understanding of how everything come together.</Text>
          <FeatureList>
            {featureList}
          </FeatureList>
        </Section>
      </Container>
    </Background>
  );
}

export default React.memo(Features);