import React, { createContext } from "react";

import { createTheme, ThemeProvider } from "@material-ui/core/styles";

import Topbar from "./components/topbar";
import HeroContent from "./components/heroContent";
import FeatureContent from "./components/feature";
import BuilderContent from "./components/builderContent";

import MarketingCards from "./components/marketingCards";

import Tiles from "./components/tiles";

import Footer from "./components/footer";
import "./App.css";

export const ThemeWrapper = createContext("theme");

class App extends React.Component {
  state = {
    darkMode: false,
  };

  get primaryTheme() {
    return {
      palette: {
        primary: {
          light: 'rgba(0, 171, 85, 0.1)',
          main: "#00ab55",
        },

        background: {
          default: "#f7f9fc",
        },

        text: {
          primary: 'rgb(45, 55, 72)'
        }
      },

      typography: {
        fontFamily: "'Inter', sans-serif",
        h3: {
          fontSize: "3.75rem"
        }
      },
    };
  }

  get darkTheme() {
    return {
      palette: {
        type: 'dark',
        primary: {
          light: 'rgba(0, 171, 85, 0.1)',
          main: "#00ab55",
        },

        text: {
          primary: "#ffffff",
        },

        background: {
          paper: "#222b45",
          default: "#1a2138",
        },
      },

      typography: {
        fontFamily: "'Inter', sans-serif",
        h3: {
          fontSize: "3.75rem"
        }
      },
    };
  }

  toggleTheme = () => {
    this.setState({
      darkMode: !this.state.darkMode,
    }, () => {
      const DOM = document.querySelector('body');

      if (this.state.darkMode) {
        DOM.classList.add('darkMode')
      } else {
        DOM.classList.remove('darkMode')
      }
    });
  };

  render() {
    const theme = createTheme(
      this.state.darkMode ? this.darkTheme : this.primaryTheme
    );

    return (
      <ThemeWrapper.Provider
        value={{
          toggleTheme: this.toggleTheme,
          darkMode: this.state.darkMode,
          theme,
        }}
      >
        <ThemeProvider theme={theme}>
          <Topbar />
          <HeroContent />
          <FeatureContent />
          <BuilderContent />
          <MarketingCards />
          <Tiles />
          <Footer/>
        </ThemeProvider>
      </ThemeWrapper.Provider>
    );
  }
}

export default App;
