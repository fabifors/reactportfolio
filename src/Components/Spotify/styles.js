import styled from 'styled-components';

export const SpotifyWrapper = styled.div`
  position: fixed;
  bottom: 0;
  right: 1rem;
  border-radius: 5px 5px 0 0;
  max-height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0.25rem 0.5rem;
  background: #141414;
  color: ${ p => p.theme.text_light.hsl};
  
  opacity: 0.9;

  z-index: 9999;
`;

export const SpotifySection = styled.div`
  height: 100%;
`;

export const SpotifyText = styled.p`
  display: inline-block;
  padding: 0;
  margin: 0 0.5rem 0.5rem 0;
  ${ p => p.bold ? `font-weight: bold;` : null}
`;

export const SpotifyLink = styled.a`
  text-decoration: none;
  color: ${p => p.theme.accent.lighten(30)};
`;

export const SpotifyAlbumCover = styled.img`
  height: calc(70px - 1rem);
  margin-right: 1rem;
`;

export const SpotifyButton = styled.button`
  opacity: 0.9;
  cursor: pointer;
  position:fixed;
  bottom: 0;
  left: 1rem;
  border: none;
  outline: 0;
  background: #141414;
  color: ${p => p.theme.text_light.hsl};
  transition: background 300ms, transform 300ms, padding 300ms;
  padding-bottom: 1rem;

  border-radius: 10px 10px 0 0; 
  box-shadow: 0 3px 10px hsla(0, 0%, 0%, 0.25);

  font-size: 1.5em;

  transform: translateY(0);

  svg{
    opacity: 1;
    transition: transform 400ms, color 200ms;
  }

  :hover {
    transform: translateY(5);
    padding-bottom: 2rem;
    svg{
      transform: rotate(360deg);
      color: #84bd00;
    }
  }
`;