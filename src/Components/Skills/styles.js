import styled from 'styled-components';

export const SkillSection = styled.section`
  min-height: 100vh;
  padding: 4rem 0 5rem;
  background: ${props => props.theme.accent.darken(3)};
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const SkillCardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    max-width: unset;
    margin-left: unset;
    margin-right: unset;
  }
`;

export const SkillCard = styled.div`
  position: relative;
  padding: calc(70px + 1.5rem) 2rem 2rem;
  background: ${props => props.theme.background_light.lighten(4)};
  margin-bottom: 2rem;
  border-radius: 10px;
  flex-grow: 1;
  

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    margin-left: 1rem;
    margin-right: 1rem;
    ${props => props.middle ? `flex: 4 1 0` : `flex: 3 1 0;`}
    
  }
  @media screen and (min-width: 992px) {
    margin-left: 2rem;
    margin-right: 2rem;
  }
`;

export const SkillCardHeader = styled.div`
  height: 70px;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px 10px 0 0;
  background: ${props => props.theme.accent.lighten(7)};
  z-index: 50;
`;

export const SkillSectionLabel = styled.h3`
  color: ${props => props.theme.text_light.hsl};
  text-align: center;
  font-weight: 600;
`;

export const SkillbarGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-bottom: 2em;
  position: relative;
  * {
    pointer-events: none;
  }
`;

export const SkillLabel = styled.label`
  font-weight: 600;
  font-size: 16px;
  color: ${props => props.theme.text.hsl};
  margin-bottom: 0.5em;
  text-align: center;
`;

export const SkillBar = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
  border: 3px solid ${props => props.theme.accent.hsl};
  background: transparent;
  border-radius: 15px;
`;

export const SkillProgress = styled.div`
  height: 25px;
  padding: 0;
  margin-left: 0;
  margin-right: auto;
  background: ${props => props.theme.accent.hsl};
  border-radius: 15px;
  transform: scaleY(1.08) scaleX(1.01);
  width: ${props => (props.value * 100).toString()}%;
`;

export const SkillDescription = styled.span`
  position: absolute;
  display: inline-block;
  padding: 0.5rem;
  background: #fff;
  box-shadow: 0px 10px 20px hsla(0, 0%, 0%, 0.2);
  font-weight: 600;
  z-index: 99;
  border-radius: 5px;
  text-align: center;
  width: 200px;
  background: ${props => props.theme.accent.getNewHue(props.theme.accent.hue + 120)};
  color: ${props => props.theme.text_light.hsl};

  &.hidden {
    opacity: 0;
  }
`;
