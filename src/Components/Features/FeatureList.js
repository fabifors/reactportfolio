import styled from 'styled-components';

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