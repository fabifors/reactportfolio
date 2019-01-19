import React from 'react';

// Components
import { FilterWrapper, Filters } from './styles';
import { Text, Highlight } from '../Basic/styles';
import FilterIcon from './FilterIcon';

const Filter = ({ filters, handleFilterChange, activeFilters }) => {
  const filtersArr = [];
  for (let filter in filters) {
    filtersArr.push(filters[filter]);
  };

  const MapFilters = filtersArr.map((filter, index) => (activeFilters.includes(filter.title)
    ? <FilterIcon withTitle isActive key={index} icon={filter.icon} title={filter.title} click={handleFilterChange} />
    : <FilterIcon withTitle key={index} icon={filter.icon} title={filter.title} click={handleFilterChange} />));

  return (
    <FilterWrapper>
      <Text style={{ marginBottom: '1rem' }}>What kind of <Highlight semibold>projects</Highlight> do you want to see?</Text>
      <Filters>
        {MapFilters}
      </Filters>
    </FilterWrapper>
  );
}


export default Filter;