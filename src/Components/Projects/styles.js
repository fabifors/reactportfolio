import styled from 'styled-components';

export const TypesContainer = styled.div`
  height: 3.5rem;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  z-index: 100;
  top: 0rem;
  right: 0.5rem;
`;

export const ProjectsWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 2rem;
  padding: 0;
  margin-bottom: 3rem;
`;

export const ProjectContainer = styled.li`
  position: relative;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  border: none;
  transition: transform 300ms, box-shadow 400ms;
  transform: scale(1);
  cursor: pointer;
  list-style: none;

  &::before {
    content: '${(props) => props.workedOn}';
    text-transform: uppercase;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 300ms, transform 500ms;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    letter-spacing: 0.1em;
    color: #fff;
    font-size: 2em;
    z-index: 9;
    transform: scale(1.1) skewY(5deg);
    pointer-events: none;
  }

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.16);

    &::before {
      opacity: 1;
      transform: scale(0.97) skewY(0deg);
    }
  }

  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;

export const ProjectImg = styled.img`
  width: 100%;
  align-self: center;
`;

export const HiddenLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;
