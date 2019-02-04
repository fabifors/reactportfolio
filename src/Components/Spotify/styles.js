import styled from 'styled-components';

export const SpotifyWrapper = styled.div`
  height: 90px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: ${p => p.theme.background_light.hsl};
  color: ${ p => p.theme.accent.hsl};
`;
