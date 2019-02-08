import React, { PureComponent, Fragment } from 'react';

// Api Key OPEN WEATHER MAP
import { key } from './apikey';

// Libraries
import { ThemeProvider } from 'styled-components';
import { Motion, spring } from 'react-motion';

// Globally assigned styles
import GlobalStyles from './Components/Global/Styles';

// Color class 
import Color from './Functions/Color';

// Components
import Container from './Components/Container';
import Header from './Components/Header';
import Spotify from './Components/Spotify';
import Hero from './Components/Hero';
import Features from './Components/Features';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import SideMenu from './Components/SideMenu';
import Footer from './Components/Footer';

// Navigation Links
import { navLinks } from './navLinks';

// Font awesome library
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Spotify button
import { SpotifyButton } from './Components/Spotify/styles';

library.add(fas, fab)

// API
const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?q=stockholm,se&APPID=${key}`;

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
    isMenuOpen: false,
    spotifyIsOpen: false
  }

  componentWillMount = () => {
    window.removeEventListener('resize', this.handleResize);
  }

  componentDidMount = () => {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);

    fetch(WEATHER_API)
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        const { main: { temp }, name } = json;
        this.setState({ temp: ((temp - 273.15).toFixed(2)), city: name })
      })
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

  handleSpotifyOpen = () => {
    this.setState(prevState => ({
      spotifyIsOpen: !prevState.spotifyIsOpen
    }))
  }

  render() {

    const { theme, isMenuOpen, isMobile, spotifyIsOpen } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <Fragment>
          <GlobalStyles />
          <Container style={{ position: 'relative' }}>

            <Spotify spotifyIsOpen={spotifyIsOpen} />
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
            <SpotifyButton onClick={() => this.handleSpotifyOpen()}>
              <FontAwesomeIcon icon={['fab', 'spotify']} />
            </SpotifyButton>
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