import React, { Component } from 'react';
import { ProjectContainer, TypesContainer, Icon, ProjectImg } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Project extends Component {

  render() {

    const types = this.props.type.map((t, index) => <Icon key={index} title={t.title}><FontAwesomeIcon icon={['fas', t.icon]} /></Icon>);

    return (
      <a href={this.props.url} target="_blank" rel="noopener noreferrer">
        <ProjectContainer workedOn={this.props.title}>
          <TypesContainer>
            {types}
          </TypesContainer>
          <ProjectImg src={this.props.img} />
        </ProjectContainer>
      </a>
    );
  }
}

export default Project;