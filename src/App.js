// use strict;
import React, { Fragment, useEffect, useState } from 'react';

// Libraries
import { ThemeProvider } from 'styled-components';
import SnowStorm from 'react-snowstorm';
import { useSpring, animated } from '@react-spring/web';

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
import { fas } from '@fortawesome/free-solid-svg-icons';

// Spotify button
import { SpotifyButton } from './Components/Spotify/styles';

library.add(fas, fab);

const App = () => {
  const [state, setState] = useState({
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
      isBelowZero: false,
    },
  });

  const handleResize = () => {
    const windowSize = window.innerWidth;
    if (windowSize > 768 && state.isMobile) {
      console.log('desktop');
      setState((prevState) => ({
        ...prevState,
        isMobile: false,
      }));
    } else if (windowSize < 768 && !state.isMobile) {
      console.log('mobile');
      setState((prevState) => ({
        ...prevState,
        isMobile: true,
      }));
    }
  };

  // Handle resize
  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleOpenMenu = () => {
    setState((prevState) => ({
      ...prevState,
      isMenuOpen: !prevState.isMenuOpen,
    }));
  };

  const handleSnowDemo = () => {
    setState((prevState) => ({
      ...prevState,
      weather: {
        ...prevState.weather,
        isBelowZero: !prevState.weather.isBelowZero,
      },
    }));
  };

  const handleThemeChange = (newHue) => {
    const newTheme = { ...state.theme };
    for (let color in newTheme) {
      newTheme[color].setNewHue(newHue);
    }
    setState((prevState) => ({
      ...prevState,
      theme: newTheme,
    }));
  };

  // const handleSpotifyOpen = () => {
  //   setState((prevState) => ({
  //     spotifyIsOpen: !prevState.spotifyIsOpen,
  //   }));
  // };

  const AnimatedSideMenu = animated(SideMenu);

  const animationProps = useSpring({
    x: state.isMenuOpen ? 0 : 100,
  });

  return (
    <ThemeProvider theme={state.theme}>
      <Fragment>
        <MakeItSnow click={handleSnowDemo} />
        {state.isBelowZero === true ? (
          <SnowStorm
            snowStick={false}
            snowColor={state.theme.background_light.darken(10)}
          />
        ) : null}
        <GlobalStyles />
        <Container style={{ position: 'relative' }}>
          {/* <Spotify spotifyIsOpen={state.spotifyIsOpen} /> */}
          <AnimatedSideMenu
            handleOpenMenu={handleOpenMenu}
            style={{
              transform: animationProps.x.to((x) => `translateX(${x}%)`),
            }}
          />
          <Header
            navLinks={navLinks}
            isMenuOpen={state.isMenuOpen}
            isMobile={state.isMobile}
            handleOpenMenu={handleOpenMenu}
            handleThemeChange={handleThemeChange}
          />
          {/*<SpotifyButton onClick={() => handleSpotifyOpen()}>
              <FontAwesomeIcon icon={['fab', 'spotify']} />
            </SpotifyButton>*/}
        </Container>
        <Hero />

        <Features id="about-me" />

        <Projects id="projects" />

        <Skills id="skills" />

        <Footer id="contact" />
      </Fragment>
    </ThemeProvider>
  );
};

export default App;
