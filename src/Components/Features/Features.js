import React from 'react';

// Components
import Feature from './Feature';
import Data from './data.js';
import Container from '../Wrappers/Container';

// Styled components
import { Text, Heading, Background, Section } from '../Basic/styles';
import { FeatureList } from './FeatureList';

const featureList = Data.map(feature => {
  return (<Feature key={feature.id} title={feature.title} content={feature.content} icon={feature.icon} alt={feature.alt} />)
});

const Features = () => {

  const flex = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  }

  return (
    <Background>
      <Container style={flex}>
        <Section align="center">
          <Heading>What I do</Heading>
          <Text>Currently a student learning Front-End Development at KYH in Stockholm. Prior to this I have worked with HTML, CSS and JavaScript to build websites for my friends and family. I have designed both websites and assets. Being interested in both coding and design gives me a deeper understanding of how everything come together.</Text>
          <FeatureList>
            {featureList}
          </FeatureList>
        </Section>
      </Container>
    </Background>
  );
}

export default React.memo(Features);