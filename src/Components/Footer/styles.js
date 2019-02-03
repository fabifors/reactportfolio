import styled from 'styled-components';

export const Form = styled.form`
  background: ${props => props.theme.background_light.lighten(4)};
  
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem 1.5rem;
  border-radius: 0px 0px 10px 10px;
  width: 100%;

  @media screen and (min-width: 552px) {
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and (min-width: 768px) {
    border-radius: 0 10px 10px 0;
    width: calc(552px - 1.5rem);
  }
`;

export const FormGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${p => p.row ? `row` : `column`};
  ${p => p.center
    ? `justify-content:center; align-items: center;`
    : null
  };

  ${p => p.center
    ? `justify-content:flex-start; align-items: center;`
    : null
  };

  padding: 0.5rem;

  border: none;

  input, textarea {
    font-size: 0.875em;
    font-weight: 500;
    line-height: 1.2em;
  }

`;

export const FormInput = styled.input`
  width: 100%;
  background: ${p => p.theme.background_light.hsl};
  color: ${p => p.theme.text.hsl};
  border: none;
  border-radius: 5px;
  padding: 1rem;
  border-bottom: 3px solid transparent;
  outline: none;

  transition: border 300ms;

  :focus {
    border-bottom: 3px solid ${p => p.theme.accent.hsl};
  }
`;

export const FormLabel = styled.label`
  color: ${p => p.theme.text.hsl};
  text-align: left;
  padding-bottom: 0.5rem;
  font-weight: 600;
  font-size: 1em;
`;

export const FormComment = styled.textarea`
  width: 100%;
  background: ${p => p.theme.background_light.hsl};
  color: ${p => p.theme.text.hsl};
  border: none;
  border-radius: 5px;
  outline: none;
  
  font-family: 'Proxima Soft';

  padding: 1rem;
`;

export const FormReset = styled.button`
  background: none;
  border: none;
  font-weight: 600;
  color: ${p => p.theme.text.lighten(20)};
  cursor: pointer;
  margin-left: 1rem;
  padding: 1rem;
  outline: none;
  font-size: 0.9em;
  position: relative;

  ::after{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    content: '';
    opacity: 0;
    display: block;
    width: 60%;
    height: 70%;
    transition: opacity 200ms;
  }
  :hover {
    ::after {
      opacity: 1;
      border-bottom: 3px solid ${p => p.theme.accent.lighten(20)}
    }
  }
`;

export const ContactWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  margin-bottom: 4rem;

  @media screen and (min-width:768px) {
    box-shadow: 0px 15px 60px hsla(0, 0%, 0%, 0.2);
    flex: 0 2 2;
    flex-direction: row;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ContactText = styled.div`
  border-radius: 10px 10px 0 0;
  background: ${p => p.theme.accent.hsl};
  padding: 2rem;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    border-radius: 10px 0 0 10px;
    width: 60%;
  }

  h2 {
    display: inline-block;
    margin-top: 1rem;
    margin-bottom: 1rem;
    position: relative;

    &::after {
      content: '';
      display: block;
      position: absolute;
      background: #fff;
      width: 125%;
      height: 25px;
      border-radius: 25px;
      opacity: 0.3;
      transform: translateY(-25px) translateX(-5px);
    }
  }

  p {
    position: relative;
    z-index: 20;
    
    > span {
      display: inline-block;
      position: relative;
      z-index: 25;
      
      &::after {
        content: '';
        display: block;
        position: absolute;
        background: ${p => p.theme.accent.getNewHue(p.theme.accent.hue + 120)};
        width: 125%;
        height: 20px;
        border-radius: 25px;
        opacity: 0.2;
        z-index: 20;
        transform: translateY(-14px) translateX(-2px);
      }
    }
  }
`;

export const CopyrightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CopyrightText = styled.p`
  padding: 3rem 0rem 1rem;
  color: ${p => p.theme.text_light.hsl};
  font-size: 1em;
  font-weight: 600;

  margin-bottom: 1rem;
  margin-top: 0;

  :nth-last-of-type(1) {
    padding: 0;
  }

  svg {
    color: ${p => p.theme.accent.getNewHue(p.theme.accent.hue + 120)};
  }
`;