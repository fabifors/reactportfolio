import React from 'react';
import Container from '../Wrappers/Container';
import { Heading, Section, Text } from '../Basic/styles';
import { Form, FormInput, FormLabel, FormGroup, FormComment, FormReset, ContactWrapper, ContactText, CopyrightWrapper } from './styles';
import Button from '../Button/Button';

import SocialButtons from '../SocialButtons';

export const Footer = () => {
  return (
    <Container background fluid hasNestedContainer height="100vh">
      <Container>
        <Section padding>
          <ContactWrapper>
            <ContactText>
              <Heading light >Contact</Heading>
              <Text light bold nomargin>Are you interested in learning more about me and my journey, hire me for your next project or just wanna buy me coffe?</Text>
              <Text light bold>Hit me up and <span>let's talk!</span></Text>
              <SocialButtons />
            </ContactText>
            <Form accept-charset="UTF-8" action="https://usebasin.com/f/d25d2e66f249" method="POST">
              <FormGroup>
                <FormLabel for="Name">Name:</FormLabel>
                <FormInput type="text" name="name" id="name" placeholder="John Doe" required />
              </FormGroup>
              <FormGroup>
                <FormLabel for="Email">Email:</FormLabel>
                <FormInput type="email" name="email" id="email" placeholder="john@example.se" required />
              </FormGroup>
              <FormGroup>
                <FormLabel for="comment">Message:</FormLabel>
                <FormComment min="25" max="350" rows="10" type="text" name="comment" id="comment" placeholder="Hi, my name is. . ." required />
              </FormGroup>
              <FormGroup row >
                <Button icon="paper-plane" type="submit" medium text="Send message" value="say_hi" />
                <FormReset type="reset">Reset</FormReset>
              </FormGroup>
            </Form>
          </ContactWrapper>

          <CopyrightWrapper>

          </CopyrightWrapper>
        </Section>
      </Container>
    </Container>
  );
}