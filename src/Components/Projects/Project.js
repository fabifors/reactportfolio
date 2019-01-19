import React, { Component } from 'react';

// Styled components
import { ProjectContainer, TypesContainer, ProjectImg } from './styles';
import FilterIcon from '../Filter/FilterIcon';


export default class Project extends Component {

  render() {
    const { type, url, title, img, handleFilterChange, activeFilters } = this.props;

    const types = type.map((type, index) => (activeFilters.includes(type.title)
      ? <FilterIcon isActive click={handleFilterChange} key={index} title={type.title} icon={type.icon} />
      : <FilterIcon click={handleFilterChange} key={index} title={type.title} icon={type.icon} />
    ));

    return (

      <ProjectContainer workedOn={title}>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <ProjectImg src={img} />
        </a>
        <TypesContainer>
          {types}
        </TypesContainer>
      </ProjectContainer>

    );
  }
}

