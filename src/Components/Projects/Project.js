import React from 'react';

// Styled components
import {
  ProjectContainer,
  TypesContainer,
  ProjectImg,
  HiddenLabel,
} from './styles';
import FilterIcon from '../Filter/FilterIcon';

const Project = ({
  name,
  type,
  url,
  title,
  img,
  handleFilterChange,
  activeFilters,
  ...rest
}) => {
  const types = type.map((type, index) => (
    <FilterIcon
      isActive={activeFilters.includes(type.title)}
      click={handleFilterChange}
      key={index}
      title={type.title}
      icon={type.icon}
    />
  ));

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
};

export default Project;
