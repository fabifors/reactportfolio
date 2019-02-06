import styled from 'styled-components';

export const SocialWrapper = styled.div`
  width: 100%;
  height: 5rem;
  padding: 1rem 0rem;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: auto;

  @media screen and (min-width:768px) {
    height: 4rem;
    justify-content: flex-start;
  }
`;

export const SocialLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  color: ${p => p.theme.text_light.hsl};

  font-size: 3rem;
  padding: 0.5rem;

  transition: color 200ms, transform 200ms;

  @media screen and (min-width:768px) {
    font-size: 2rem;
  }
  svg{
    transition: filter 200ms;
  }

  :hover {
    color: ${p => p.theme.accent.getNewHue(p.theme.accent.hue + 120)};
    transform: translateY(0) translateY(-5px) scale(1.1);
    
    svg{
      filter: drop-shadow(0px 5px 5px ${p => p.theme.boxshadow.getNewAlpha(0.4)});
      
    }
  }
`;