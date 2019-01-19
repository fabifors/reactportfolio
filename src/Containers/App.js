import React, { PureComponent } from 'react';

// Libraries
import { ThemeProvider } from 'styled-components';

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


// Font awesome library
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/pro-solid-svg-icons'
library.add(fas)


class App extends PureComponent {

  state = {
    isMobile: false,
    theme: {
      accent: new Color(189, 60, 50, 1),
      text: new Color(189, 15, 30, 1),
      text_light: new Color(189, 60, 99, 1),
      boxshadow: new Color(189, 15, 30, 0.25),
      background_light: new Color(189, 15, 95, 1),
      background: new Color(189, 15, 100, 1)
    }
  }


  componentWillMount = () => {
    window.removeEventListener('resize', this.handleResize)
  }

  componentDidMount = () => {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
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

    return (
      <ThemeProvider theme={this.state.theme}>
        <div className="App">
          <GlobalStyles />

          <Container>
            <Header isMobile={this.state.isMobile} handleThemeChange={this.handleThemeChange} />
          </Container>

          <Container>
            <Hero />
          </Container>

          <Features />

          <Projects />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
