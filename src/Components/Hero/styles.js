// Libraries
import styled from 'styled-components';

export const Section = styled.section`
  height: calc(100vh - 100px);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 4rem;
`;

export const Content = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: ${p => p.theme.accent.hsl};
    font-size: 2em;
    font-weight: 600;
    padding-top: 0.5rem;
    line-height: 1.3em;
    margin: 0.75em 0 0;

    @media screen and (min-width: 768px) {
      font-size: 3em;
      margin: 0 0 0.5em;
    }
  }

  p {
    font-size: 1.25em;
    line-height: 1.4em;
    font-weight: 600;
    color: ${p => p.theme.text.hsl};
    margin-top: 0;
    margin-bottom: 3rem;

    @media screen and (min-width: 768px) {
      font-size: 1.25em;
    }
  }
`;