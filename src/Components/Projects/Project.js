import React, { Component } from 'react';

// Styled components
import {
  ProjectContainer,
  TypesContainer,
  ProjectImg,
  HiddenLabel,
} from './styles';
import FilterIcon from '../Filter/FilterIcon';

export default class Project extends Component {
  render() {
    const {
      name,
      type,
      url,
      title,
      img,
      handleFilterChange,
      activeFilters,
      ...rest
    } = this.props;

    const types = type.map((type, index) =>
      activeFilters.includes(type.title) ? (
        <FilterIcon
          isActive
          click={handleFilterChange}
          key={index}
          title={type.title}
          icon={type.icon}
        />
      ) : (
        <FilterIcon
          click={handleFilterChange}
          key={index}
          title={type.title}
          icon={type.icon}
        />
      )
    );

    return (
      <ProjectContainer workedOn={title} {...rest}>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'flex' }}
        >
          <ProjectImg src={img} alt={name} />
          <HiddenLabel>{name}</HiddenLabel>
        </a>
        <TypesContainer>{types}</TypesContainer>
      </ProjectContainer>
    );
  }
}
