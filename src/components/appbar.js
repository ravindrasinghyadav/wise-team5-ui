import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';

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

export default function HideAppBar(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6">Scroll to Hide App Bar</Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Container>
      <Router>
          <div className="App">
            <Switch>
              {/* TODO add home handler */}
              {/* <Route path="/" component={Login}/> */}
              <Route path="/login" component={Login}/>
              <Route path="/signup" component={Signup}/>
              <Route path="/home" component={Home}/>
              <Route path="/dashboard" component={Dashboard}/>
              <Route path="/questions" component={Question}/>
              <Route path="/feeds" component={Feeds}/>
              <Route path="/profile" component={Profile}/>
            </Switch>
          {/* <Signup/> */}
          </div>
        </Router>
      </Container>
    </React.Fragment>
  );
}




// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles({
//   root: {
//     flexGrow: 1,
//   },
//   bar: {
//     height: 25,
//     // padding: 0
//   },

//   image: {
//     width: 'auto',
//     height: 25
//   }
// });

// export default function TopNav() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <AppBar position="static" color="white">
//         <Toolbar className={classes.bar}>
//           <img src="images/logo.png" alt="Wise Financial" className={classes.image} />
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }