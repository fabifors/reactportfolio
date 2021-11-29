import React, { PureComponent, Fragment } from 'react';

// Libraries
import { ThemeProvider } from 'styled-components';
import SnowStorm from 'react-snowstorm';
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
import MakeItSnow from './Components/MakeItSnow';

// Navigation Links
import { navLinks } from './navLinks';

// Font awesome library
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Spotify button
import { SpotifyButton } from './Components/Spotify/styles';

library.add(fas, fab);

// API
const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?q=stockholm,se&APPID=${process.env.OPENWEATHER_API_KEY}`;

class App extends PureComponent {
  state = {
    isMobile: false,
    theme: {
      accent: new Color(256, 45, 50, 1),
      text: new Color(256, 15, 30, 1),
      text_light: new Color(256, 60, 99, 1),
      boxshadow: new Color(256, 15, 30, 0.25),
      background_light: new Color(256, 15, 95, 1),
      background: new Color(256, 15, 100, 1),
    },
    isMenuOpen: false,
    spotifyIsOpen: false,
    weather: {
      belowZero: false,
    },
  };

  componentWillMount = () => {
    this.getWeatherInfo();
    window.removeEventListener('resize', this.handleResize);
  };

  componentDidMount = () => {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  };

  getWeatherInfo = () => {
    fetch(WEATHER_API)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error(res.status);
        }
      })
      .then((json) => {
        const {
          main: { temp },
          name,
        } = json;
        if (temp - 273.15 < 0) {
          this.setState({
            weather: {
              belowZero: true,
              temp: (temp - 273.15).toFixed(2),
              city: name,
            },
          });
        } else {
          this.setState({
            weather: {
              belowZero: false,
              temp: (temp - 273.15).toFixed(2),
              city: name,
            },
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleOpenMenu = () => {
    this.setState((prevState) => ({
      isMenuOpen: !prevState.isMenuOpen,
    }));
  };

  handleSnowDemo = () => {
    this.setState((prevState) => ({
      weather: {
        ...prevState.weather,
        belowZero: !prevState.weather.belowZero,
      },
    }));
  };

  handleThemeChange = (newHue) => {
    const newTheme = { ...this.state.theme };
    for (let color in newTheme) {
      newTheme[color].setNewHue(newHue);
    }
    console.table(newTheme);
    this.setState({
      theme: newTheme,
    });
  };

  handleResize = () => {
    const windowSize = window.innerWidth;
    if (windowSize > 768 && this.state.isMobile) {
      this.setState({
        isMobile: false,
      });
    } else if (windowSize < 768 && !this.state.isMobile) {
      this.setState({
        isMobile: true,
      });
    } else {
      return;
    }
  };

  handleSpotifyOpen = () => {
    this.setState((prevState) => ({
      spotifyIsOpen: !prevState.spotifyIsOpen,
    }));
  };

  render() {
    const {
      theme,
      isMenuOpen,
      isMobile,
      spotifyIsOpen,
      weather: { belowZero },
    } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <Fragment>
          <MakeItSnow click={this.handleSnowDemo} />
          {belowZero === true ? (
            <SnowStorm
              snowStick={false}
              snowColor={theme.background_light.darken(10)}
            />
          ) : null}
          <GlobalStyles />
          <Container style={{ position: 'relative' }}>
            <Spotify spotifyIsOpen={spotifyIsOpen} />
            <Motion
              defaultStyle={{ x: 100 }}
              style={
                this.state.isMenuOpen ? { x: spring(0) } : { x: spring(100) }
              }
            >
              {(style) => {
                return (
                  <SideMenu
                    handleOpenMenu={this.handleOpenMenu}
                    style={{
                      opacity: style.opacity,
                      transform: `translateX(${style.x}%)`,
                    }}
                  />
                );
              }}
            </Motion>
            <Header
              navLinks={navLinks}
              isMenuOpen={isMenuOpen}
              isMobile={isMobile}
              handleOpenMenu={this.handleOpenMenu}
              handleThemeChange={this.handleThemeChange}
            />
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
