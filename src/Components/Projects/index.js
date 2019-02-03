import React, { PureComponent } from 'react';

// Styled Components
import { Heading, Section, Text, Highlight, HeadsUp } from '../General/styles';
import { ProjectsWrapper } from './styles';

// Components
import Container from '../Container';
import Project from './Project';
import Filter from '../Filter';

// Project img
import webbhotel from './img/hittawebbhotellet.jpg';
import refineit from './img/refineit.jpg';
import smsloan from './img/hittasmslan.jpg';
import quire from './img/quire.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Projects extends PureComponent {

  icons = {
    code: { title: 'Code', icon: 'laptop-code' },
    design: { title: 'Design', icon: 'pencil-paintbrush' },
    school: { title: 'School Project', icon: 'graduation-cap' }
  };

  state = {
    active: [],
    filters: { ...this.icons },
    projects: [
      {
        name: 'Hitta Webbhotellet',
        title: 'Design',
        type: [this.icons.design],
        img: `${webbhotel}`,
        url: 'https://hittawebbhotellet.se'
      },
      {
        name: 'Refine-It',
        title: 'Design / Code',
        type: [this.icons.code, this.icons.design],
        img: `${refineit}`,
        url: 'https://refine-it.se'
      },
      {
        name: 'Hittasmslån',
        title: 'Design',
        type: [this.icons.design],
        img: `${smsloan}`,
        url: 'https://hittasmslån.se'
      },
      {
        name: 'Quire',
        title: 'Design / Code',
        type: [this.icons.school, this.icons.design, this.icons.code],
        img: `${quire}`,
        url: 'http://quire.brorarmand.com'
      }
    ],
  }

  handleFilterChange = (newFilter) => {
    if (this.state.active.includes(newFilter)) {
      let active = [...this.state.active];
      let index = active.indexOf(newFilter);
      active.splice(index, 1);
      this.setState({
        active: active
      })
    } else {
      let active = [...this.state.active, newFilter];
      this.setState({
        active: active
      })
    }
  }

  render() {

    const { active, projects, filters } = this.state;
    const { id } = this.props;

    const projectsFilter = projects.filter(project => {
      if (active.length === 0) {
        return project;
      } else {
        for (let i = 0; i < project.type.length; i++) {
          if (active.includes(project.type[i].title)) {
            return project;
          } else {
            return null;
          }
        }
      }
      return null;
    })

    return (
      <Container id={id}>
        <Section fullScreen>
          <Heading style={{ marginBottom: '1rem' }} center>What I've Done</Heading>
          <Filter activeFilters={active} filters={filters} handleFilterChange={this.handleFilterChange} />
          <ProjectsWrapper>
            {projectsFilter.map((project, index) => (
              <Project
                key={index}
                activeFilters={active}
                handleFilterChange={this.handleFilterChange}
                {...project}
              />
            ))}
          </ProjectsWrapper>

          <HeadsUp>
            <FontAwesomeIcon icon={['fas', 'exclamation-circle']} />
            <Text center>I have just started a <Highlight bold>new project</Highlight> with a friend and I'm also going to build some of my own <Highlight bold>React apps</Highlight>. <Highlight bold>Stay tuned for updates</Highlight></Text>
          </HeadsUp>
        </Section>
      </Container>
    );
  }
}

export default Projects;