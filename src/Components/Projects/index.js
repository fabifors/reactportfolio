import React, { useState } from 'react';

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

const icons = {
  code: { title: 'Code', icon: 'laptop-code' },
  design: { title: 'Design', icon: 'paintbrush' },
  school: { title: 'School Project', icon: 'graduation-cap' },
};

const projects = [
  {
    name: 'Hitta Webbhotellet',
    title: 'Design',
    type: [icons.design],
    img: `${webbhotel}`,
    url: 'https://hittawebbhotellet.se',
  },
  {
    name: 'Refine-It',
    title: 'Design / Code',
    type: [icons.code, icons.design],
    img: `${refineit}`,
    url: '',
  },
  {
    name: 'Hittasmslån',
    title: 'Design',
    type: [icons.design],
    img: `${smsloan}`,
    url: 'https://hittasmslån.se',
  },
  {
    name: 'Quire',
    title: 'Design / Code',
    type: [icons.school, icons.design, icons.code],
    img: `${quire}`,
    url: '',
  },
];

const Projects = ({ id }) => {
  const [active, setActive] = useState([]);
  const [filters] = useState({ ...icons });

  const handleFilterChange = (newFilter) => {
    if (active.includes(newFilter)) {
      const updatedActive = active.filter((filter) => filter !== newFilter);
      setActive(updatedActive);
    } else {
      setActive([...active, newFilter]);
    }
  };

  const projectsFilter = projects.filter((project) => {
    if (active.length === 0) {
      return true;
    }
    return project.type.some((type) => active.includes(type.title));
  });

  return (
    <Container id={id}>
      <Section full-screen>
        <Heading style={{ marginBottom: '1rem' }} center>
          What I've Done
        </Heading>
        <Filter
          activeFilters={active}
          filters={filters}
          handleFilterChange={handleFilterChange}
        />
        <ProjectsWrapper>
          {projectsFilter.map((project, index) => (
            <Project
              key={index}
              activeFilters={active}
              handleFilterChange={handleFilterChange}
              {...project}
            />
          ))}
        </ProjectsWrapper>

        <HeadsUp>
          <FontAwesomeIcon icon={['fas', 'exclamation-circle']} />
          <Text center>
            I have just started a <Highlight bold>new project</Highlight> with a
            friend and I'm also going to build some of my own{' '}
            <Highlight bold>React apps</Highlight>.{' '}
            <Highlight bold>Stay tuned for updates</Highlight>
          </Text>
        </HeadsUp>
      </Section>
    </Container>
  );
};

export default Projects;
