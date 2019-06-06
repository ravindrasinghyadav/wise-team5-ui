import React from 'react';
import './App.css';
import { SnackbarProvider } from 'notistack';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { blue, lime } from '@material-ui/core/colors'
import Login from './pages/login/login'
import Signup from './pages/login/signup'
import Question from './pages/questions'
import Home from './pages/home'
import Dashboard from './pages/dashboard'
import Feeds from './pages/feeds'
import Profile from './pages/profile'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import PropTypes from 'prop-types';

const theme = createMuiTheme({
  // TODO: Define palette later
  palette: {
    secondary: lime,
    primary: blue
  },
  typography: {
    useNextVariants: true,
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '"Lato"',
      'sans-serif'
    ].join(',')
  },

});

const styles = theme => ({
  header: {
    // zIndex: theme.zIndex.drawer + 1,
  },
  bar: {
    height: 25,
    // padding: 0
  },
  image: {
    width: 'auto',
    height: 25
  }
});

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.node.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  window: PropTypes.func,
};

function App(props) {
  const classes = styles();
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarProvider
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        maxSnack={5}>
        <HideOnScroll {...props}>
          <AppBar color="white">
            <Toolbar className={classes.bar}>
              <img src="images/logo.png" alt="Wise Financial" className={classes.image}  height="25"/>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Toolbar />
        {/* <Container> */}
          <Router>
            <div className="App">
              <Switch>
                {/* TODO add home handler */}
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/home" component={Home} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/questions" component={Question} />
                <Route path="/feeds" component={Feeds} />
                <Route path="/profile" component={Profile} />
              </Switch>
              {/* <Signup/> */}
            </div>
          </Router>
        {/* </Container> */}
      </SnackbarProvider>
    </MuiThemeProvider >
  );
}

export default withStyles(styles)(App);
