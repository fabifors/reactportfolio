import styled from 'styled-components';

export const StyledButton = styled.button`
  border: none;
  border-radius: 5px;

  ${(p) =>
    p.small
      ? `
      padding: 0.5rem 0.75rem;
      font-size: 1em;
      border-radius: 5px;
    `
      : null};

  ${(p) =>
    p.medium
      ? `
      padding: 0.9rem 1.25rem;
      font-size: 1.1em;
      border-radius: 5px;
    `
      : null};

  ${(p) =>
    p.large
      ? `
      padding: 1rem 1.6rem;
      font-size: 1.5em;
      border-radius: 8px;
    `
      : null};

  font-weight: 600;
  transition: background 300ms;

  ${(p) =>
    p.secondary
      ? `
    background: ${p.theme.background_light.hsl};
    color: ${p.theme.accent.hsl};
  `
      : `
    background: ${p.theme.accent.hsl};
    color: ${p.theme.text_light.hsl};
  `};

  cursor: pointer;
  ${(p) => (p.nested ? 'pointer-events: none;' : null)};

  ${(p) =>
    p.shadow ? `box-shadow: 0px 10px 20px ${p.theme.boxshadow.hsl}` : null};

  &:hover {
    background: ${(p) => p.theme.accent.lighten(10)};
  }
`;

export const WithIcon = styled(StyledButton)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  svg {
    margin-right: 0.75rem;
  }
`;

export const Link = styled.a`
  display: block;
  text-decoration: none;
`;
