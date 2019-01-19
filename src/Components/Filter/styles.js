import styled from 'styled-components';

export const Filters = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1rem 0 3rem;
`;

export const FilterWrapper = styled.div`
`;

export const Icon = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  margin-left: 1rem;

  border: 1px solid ${props => props.theme.accent.hsl};
  border-radius: 3px;

  background: ${props => props.isActive ? props.theme.accent.hsl : props.theme.text_light.hsl};
  color: ${props => props.isActive ? props.theme.text_light.hsl : props.theme.accent.hsl};

  transition: color 300ms, background 300ms;

  ::after {
    content: '${props => props.iconTitle}';
    padding-left: ${props => props.iconTitle ? '0.5rem' : null};
  }

  &:hover {
    background: ${props => props.isActive ? props.theme.accent.darken(10) : props.theme.text_light.darken(10)};
  }
`;
