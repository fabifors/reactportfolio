import React, { PureComponent } from 'react';

import { Heading, Text, Section } from '../Basic/styles';
import Container from '../Wrappers/Container';
import Project from './Project';
import { ProjectsWrapper } from './styles';

// Project img
import webbhotel from './img/hittawebbhotellet.jpg';
import refineit from './img/refineit.jpg';
import smsloan from './img/hittasmslan.jpg';
import quire from './img/quire.jpg';

class Projects extends PureComponent {

  icons = {
    code: { title: 'Code', icon: 'laptop-code' },
    design: { title: 'Design', icon: 'pencil-paintbrush' },
    school: { title: 'School Project', icon: 'graduation-cap' }
  }

  state = {
    projects: [
      {
        title: 'Design',
        type: [this.icons.design],
        img: `${webbhotel}`,
        url: 'https://hittawebbhotellet.se'
      },
      {
        title: 'Design / Code',
        type: [this.icons.code, this.icons.design],
        img: `${refineit}`,
        url: 'https://refine-it.se'
      },
      {
        title: 'Design',
        type: [this.icons.design],
        img: `${smsloan}`,
        url: 'https://hittasmslån.se'
      },
      {
        title: 'Design / Code',
        type: [this.icons.school],
        img: `${quire}`,
        url: 'https://quire.brorarmand.com'
      }
    ],
  }

  render() {

    const projects = this.state.projects.map((project, index) => (
      <Project key={index} url={project.url} img={project.img} type={project.type} click={this.handleMouseOver} title={project.title}></Project>
    ))

    const styles = {
      textAlign: 'center',
      paddingTop: '4rem',
      paddingBottom: '5rem'
    }

    return (
      <Container>
        <Section style={styles}>
          <Heading>Projects</Heading>
          <Text>What kind of projects do you want to see?</Text>
          <ProjectsWrapper>
            {projects}
          </ProjectsWrapper>
        </Section>
      </Container>
    );
  }
}

export default Projects;