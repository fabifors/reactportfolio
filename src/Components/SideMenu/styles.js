import styled from 'styled-components';

export const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99;
  background: #fff;
  background-color: ${p => p.theme.background.hsl};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Heading = styled.h2`
  margin-top: 1rem;
  font-size: 3em;
  color: ${p => p.theme.accent.hsl};
`;

export const Nav = styled.nav`
  width: 100%;
  flex-grow: 1;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0 3rem;
`;

export const Item = styled.li`
  margin-bottom: 1rem;
  width: 100%;
  border-radius: 5px;
  background: ${ p => p.theme.background_light.hsl};
  transition: background 300ms, border-radius 300ms;
  &:hover {
    background: ${ p => p.theme.background_light.darken(3)};
  }
`;

export const Link = styled.a`
  display: inline-block;
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  text-decoration: none;
  font-size: 1.25em;
  color: ${p => p.theme.text.hsl};
  &:hover {
    color: ${ p => p.theme.accent.hsl};
  }
`;