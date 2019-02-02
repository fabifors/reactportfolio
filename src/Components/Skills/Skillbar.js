import React, { Component } from 'react';

import { levels } from './data';

import { SkillbarGroup, SkillLabel, SkillBar, SkillProgress, SkillDescription } from './styles';

export default class Skillbar extends Component {

  state = {
    level: '',
    label: this.props.label,
    value: this.props.value
  }

  handleMouseEnter = () => {
    this.desc.classList.remove('hidden');
  }

  handleMouseLeave = () => {
    this.desc.classList.add('hidden');
  }

  findLevel = () => {
    const level = levels.find(lev => lev.value >= this.state.value);
    this.setState({
      level: level.text
    })
  }

  componentDidMount() {
    this.findLevel();
  }

  handleFollow(event) {
    let rect = event.target.getBoundingClientRect();
    let y = event.clientY - rect.top + 20 + "px";
    let x = event.clientX - rect.left - (this.desc.getBoundingClientRect().width / 2 - 10) + "px";
    this.desc.style.transform = `translate3d(${x} ,${y}, 0)`;
    // this.desc.style.transform = `translateX(${x})`;
  }

  render() {

    const { label, value, level } = this.state;

    return (
      <SkillbarGroup onMouseEnter={(event) => this.handleMouseEnter(event)} onMouseMove={(event) => this.handleFollow(event)} onMouseLeave={(event) => this.handleMouseLeave(event)}>
        <SkillLabel>{label}</SkillLabel>
        <SkillBar>
          <SkillProgress value={value} />
        </SkillBar>
        <SkillDescription ref={el => this.desc = el} className='hidden'>{level}</SkillDescription>
      </SkillbarGroup>
    );
  }
}
