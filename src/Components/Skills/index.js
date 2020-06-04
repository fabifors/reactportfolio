import React from 'react';

// Components
import {
  SkillSection,
  SkillCard,
  SkillCardHeader,
  SkillSectionLabel,
  SkillCardWrapper,
} from './styles.js';
import SkillBar from './Skillbar';
import { Heading, Text, Highlight } from '../General/styles';
import Container from '../Container';

// Data
import { creative, building, uiux } from './data';

const Skills = ({ id }) => {
  return (
    <Container id={id} background fluid hasNestedContainer>
      <SkillSection>
        <Container>
          <Heading light center>
            Skills
          </Heading>
          <Text light center>
            I believe that great design is essential in any product or service.
            I aim to create{' '}
            <Highlight light underline>
              modern
            </Highlight>
            ,{' '}
            <Highlight light underline>
              simplistic
            </Highlight>{' '}
            designs that inspire people and turn your{' '}
            <Highlight light underline>
              customers
            </Highlight>{' '}
            into{' '}
            <Highlight light underline>
              followers
            </Highlight>
            . Every project I take on is very carefully planned and set-up built
            for the needs of my employer. Developing my skills are an essential
            part of this. I plow head first into projects that I have no prior
            experience in and treat each part of the process as a opportunity to{' '}
            <Highlight light underline>
              grow
            </Highlight>{' '}
            and{' '}
            <Highlight light underline>
              develop.
            </Highlight>
          </Text>

          <SkillCardWrapper>
            <SkillCard center>
              <SkillCardHeader>
                <SkillSectionLabel>Creative</SkillSectionLabel>
              </SkillCardHeader>
              {creative.map((skill, index) => (
                <SkillBar key={index} label={skill.label} value={skill.value} />
              ))}
            </SkillCard>

            <SkillCard center middle>
              <SkillCardHeader>
                <SkillSectionLabel>Building</SkillSectionLabel>
              </SkillCardHeader>
              {building.map((skill, index) => (
                <SkillBar key={index} label={skill.label} value={skill.value} />
              ))}
            </SkillCard>

            <SkillCard center>
              <SkillCardHeader>
                <SkillSectionLabel>UX / Interactivity</SkillSectionLabel>
              </SkillCardHeader>
              {uiux.map((skill, index) => (
                <SkillBar key={index} label={skill.label} value={skill.value} />
              ))}
            </SkillCard>
          </SkillCardWrapper>
        </Container>
      </SkillSection>
    </Container>
  );
};

export default Skills;
