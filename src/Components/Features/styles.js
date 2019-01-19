import styled from 'styled-components';

export const Feature = styled.div`
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

  @media screen and (min-width: 768px) {
    font-size: 15px;
    ${'' /* grid-template-rows: 80px 35px 95px; */}
  }

  @media screen and (min-width: 992px) {
    font-size: 16px;
    ${'' /* grid-template-rows: 70px 35px 85px; */}
  }
`;

export const FeatureList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;


  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
  }
`;

export const FeatureHeading = styled.h3`
  color: ${props => props.theme.accent.hsl};
  align-self: center;
  font-size: 1.25em;
  margin: 0;
`;

export const FeatureText = styled.p`
  color: ${props => props.theme.text.hsl};
  text-align: center;
  font-size: 1.0em;
  margin-top: 1rem;
  margin-bottom: 0;
  `;