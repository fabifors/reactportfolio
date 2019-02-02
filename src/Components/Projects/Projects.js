import React, { PureComponent } from 'react';

// Styled Components
import { Heading, Section } from '../Basic/styles';
import { ProjectsWrapper } from './styles';

// Components
import Container from '../Wrappers/Container';
import Project from './Project';
import Filter from '../Filter/Filter';

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
  };

  state = {
    active: [],
    filters: { ...this.icons },
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
        </Section>
      </Container>
    );
  }
}

export default Projects;