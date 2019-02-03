import React, { PureComponent, Fragment } from 'react';

// Libraries
import { ThemeProvider } from 'styled-components';
import { Motion, spring } from 'react-motion';

// Globally assigned styles
import GlobalStyles from '../Components/Global/Styles';

// Color class 
import Color from '../Components/Color';

// Components
import Container from '../Components/Wrappers/Container';
import Header from './Header';
import Hero from '../Components/Hero/Hero';
import Features from '../Components/Features/Features';
import Projects from '../Components/Projects/Projects';
import Skills from '../Components/Skills/Skills';
import SideMenu from '../Components/SideMenu';

// Navigation Links
import { navLinks } from '../navLinks';

// Font awesome library
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/pro-solid-svg-icons';
import { Footer } from '../Components/Footer/Footer';
library.add(fas, fab)


class App extends PureComponent {

  state = {
    isMobile: false,
    theme: {
      accent: new Color(256, 45, 60, 1),
      text: new Color(256, 15, 30, 1),
      text_light: new Color(256, 60, 99, 1),
      boxshadow: new Color(256, 15, 30, 0.25),
      background_light: new Color(256, 15, 95, 1),
      background: new Color(256, 15, 100, 1)
    },
    isMenuOpen: false
  }


  componentWillMount = () => {
    window.removeEventListener('resize', this.handleResize)
  }

  componentDidMount = () => {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  handleOpenMenu = () => {
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen
    }))
  }

  handleThemeChange = (newHue) => {
    const newTheme = { ...this.state.theme };
    for (let color in newTheme) {
      newTheme[color].setNewHue(newHue);
    }
    console.table(newTheme);
    this.setState({
      theme: newTheme
    })
  }

  handleResize = () => {
    const windowSize = window.innerWidth;
    if (windowSize > 768 && this.state.isMobile) {
      this.setState({
        isMobile: false
      })
    } else if (windowSize < 768 && !this.state.isMobile) {
      this.setState({
        isMobile: true
      })
    } else {
      return;
    }
  }

  render() {

    const { theme, isMenuOpen, isMobile } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <Fragment>
          <GlobalStyles />
          <Container>
            <Motion
              defaultStyle={{ x: 100 }}
              style={(this.state.isMenuOpen ? { x: spring(0) } : { x: spring(100) })}
            >
              {(style) => {
                return (
                  <SideMenu
                    handleOpenMenu={this.handleOpenMenu}
                    style={{
                      opacity: style.opacity,
                      transform: `translateX(${style.x}%)`
                    }}
                  />
                )
              }}
            </Motion>
            <Header
              navLinks={navLinks}
              isMenuOpen={isMenuOpen}
              isMobile={isMobile}
              handleOpenMenu={this.handleOpenMenu}
              handleThemeChange={this.handleThemeChange} />
          </Container>

          <Hero />

          <Features id="about-me" />

          <Projects id="projects" />

          <Skills id="skills" />

          <Footer id="contact" />
        </Fragment>
      </ThemeProvider>
    );
  }
}

export default App;