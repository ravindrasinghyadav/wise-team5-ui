import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { SnackbarProvider } from 'notistack';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { blue, indigo } from '@material-ui/core/colors'
import Login from './pages/login/login'
import Signup from './pages/login/signup'
import Question from './pages/questionaire/container'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


const theme = createMuiTheme({
  // TODO: Define palette later
  palette: {
    secondary: {
      main: blue[900]
    },
    primary: {
      main: indigo[700]
    }
  },
  typography: {
    useNextVariants: true,
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '"Lato"',
      'sans-serif'
    ].join(',')
  }
});

const styles = theme => ({
  header: {
    zIndex: theme.zIndex.drawer + 1,
  },
});


function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarProvider
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        maxSnack={5}>
        <Router>
          <div className="App">
            <Switch>
              {/* TODO add home handler */}
              {/* <Route path="/" component={Login}/> */}
              <Route path="/login" component={Login}/>
              <Route path="/signup" component={Signup}/>
              <Route path="/question" component={Question}/>
            </Switch>
          {/* <Signup/> */}
          </div>
        </Router>
      </SnackbarProvider>
    </MuiThemeProvider >
  );
}

export default withStyles(styles)(App);
