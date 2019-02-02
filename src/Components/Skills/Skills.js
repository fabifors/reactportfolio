import React from 'react';

// Components
import { SkillSection, SkillCard, SkillCardHeader, SkillSectionLabel, SkillCardWrapper } from './styles.js';
import SkillBar from './Skillbar';
import { Heading, Text, Highlight } from '../Basic/styles';
import Container from '../Wrappers/Container';

// Data
import { creative, building, uiux } from './data';

const Skills = () => {
  return (
    <SkillSection>
      <Container>
        <Heading light center>Skills</Heading>
        <Text light center>I believe that great design <Highlight underline light semibold>inspires creativity</Highlight>. Because of this I aim to create modern, simplistic designs that inspire people. Every project can be very different yet they all starts with an Idea born out of creativity and ends with development. Using and developing my skills are essential to how I approach my projects.</Text>

        <SkillCardWrapper>
          <SkillCard center>
            <SkillCardHeader>
              <SkillSectionLabel>Creative</SkillSectionLabel>
            </SkillCardHeader>
            {creative.map((skill, index) => <SkillBar key={index} label={skill.label} value={skill.value} />)}
          </SkillCard>

          <SkillCard center middle>
            <SkillCardHeader>
              <SkillSectionLabel>Building</SkillSectionLabel>
            </SkillCardHeader>
            {building.map((skill, index) => <SkillBar key={index} label={skill.label} value={skill.value} />)}
          </SkillCard>

          <SkillCard center>
            <SkillCardHeader>
              <SkillSectionLabel>UX / Interactivity</SkillSectionLabel>
            </SkillCardHeader>
            {uiux.map((skill, index) => <SkillBar key={index} label={skill.label} value={skill.value} />)}
          </SkillCard>
        </SkillCardWrapper>
      </Container>
    </SkillSection>
  );
}

export default Skills;
