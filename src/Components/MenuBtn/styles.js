import styled from 'styled-components';

const barHeight = 3;

export const MenuButton = styled.button`
  z-index: 100;
  position: fixed;
  right: 1rem;
  cursor: pointer;

  width: 3rem; // 16px 32px 48px 56px
  height: 3rem;
  padding: 0.75rem;
  border: 1px solid ${(p) => p.theme.accent.hsl};
  border-radius: 5px;
  background: #fff;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  justify-content: space-between;
  align-items: center;

  &:hover {
    div:nth-of-type(2) {
      transform: translateX(-2px);
    }

    div:nth-of-type(1),
    div:nth-of-type(3) {
      transform: translateX(3px);
    }
  }

  &.open {
    div:nth-of-type(2) {
      transform: translateX(20px);
      opacity: 0;
    }
    div:nth-of-type(1) {
      transform: rotate(-45deg) translate3d(-1px, -2px, 3px) scaleX(1.2);
    }
    div:nth-of-type(3) {
      transform: rotate(45deg) translate3d(-1px, 2px, 0px) scaleX(1.2);
    }
  }
`;

export const Bar = styled.div`
  box-sizing: border-box;
  width: 24px;
  height: ${barHeight}px;
  border-radius: ${barHeight - 1}px;

  transform-origin: 100%;

  background: ${(p) => p.theme.accent.hsl};

  ${(p) =>
    p.middle ? `transform: translateX(3px);` : `transform: translateX(0px);`};

  transition: transform 200ms, opacity 100ms;
`;
