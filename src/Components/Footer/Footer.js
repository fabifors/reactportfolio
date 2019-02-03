import React from 'react';
import Container from '../Wrappers/Container';
import { Heading, Section, Text, Highlight } from '../Basic/styles';
import { Form, FormInput, FormLabel, FormGroup, FormComment, FormReset, ContactWrapper, ContactText, CopyrightWrapper, CopyrightText, FooterLink } from './styles';
import Button from '../Button/Button';

import SocialButtons from '../SocialButtons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../Logo/Logo';

export const Footer = ({ id }) => {
  return (
    <Container id={id} background fluid hasNestedContainer>
      <Container>
        <Section padding style={{ paddingBottom: '2rem' }}>
          <ContactWrapper>
            <ContactText>
              <Heading light >Contact</Heading>
              <Text light bold nomargin>Are you interested in learning more about me and my journey, hire me for your next project or just wanna <FooterLink href="https://www.buymeacoffee.com/wJZagVhYt" target="_blank" rel="noopener noreferrer">buy me coffe</FooterLink>?</Text>
              <Text light bold>Hit me up and <span>let's talk!</span></Text>
              <SocialButtons />
            </ContactText>
            <Form accept-charset="UTF-8" action="https://usebasin.com/f/d25d2e66f249" method="POST" id="invisible-recaptcha-form">
              <FormGroup>
                <FormLabel htmlFor="name">Name:</FormLabel>
                <FormInput type="text" name="name" id="name" placeholder="John Doe" required />
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="email">Email:</FormLabel>
                <FormInput type="email" name="email" id="email" placeholder="john@example.se" required />
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="comment">Message:</FormLabel>
                <FormComment min="25" max="350" rows="10" type="text" name="comment" id="comment" placeholder="Hi, my name is. . ." required />
              </FormGroup>
              <FormGroup row >
                <Button className="g-recaptcha" data-sitekey="6Lew3SMUAAAAAJ82QoS7gqOTkRI_dhYrFy1f7Sqy" data-callback='onSubmit' data-badge="inline" icon="paper-plane" type="submit" medium text="Send message" value="say_hi" />
                <FormReset type="reset">Reset</FormReset>
              </FormGroup>
            </Form>
          </ContactWrapper>

          <CopyrightWrapper>
            <Logo height="64px" footer />
            <CopyrightText>
              Handmade by <Highlight light bold underline>Fabian Forsström</Highlight> with <FontAwesomeIcon icon={['fas', 'heart']} />
            </CopyrightText>
            <a href="https://www.buymeacoffee.com/wJZagVhYt" target="_blank" rel="noopener noreferrer">
              <img src="https://www.buymeacoffee.com/assets/img/custom_images/white_img.png" alt="Buy Me A Coffee" style={{ height: 'auto !important', width: 'auto !important', marginBottom: '1rem' }} />
            </a>
            <CopyrightText style={{ fontSize: '0.75em', fontWeight: '300' }}>copyright <FontAwesomeIcon icon={['fas', 'copyright']} /> twentynineteen</CopyrightText>
          </CopyrightWrapper>
        </Section>
      </Container>
    </Container>
  );
}