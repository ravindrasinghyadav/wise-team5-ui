

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
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

export default function TopNav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="white">
        <Toolbar className={classes.bar}>
          <img src="images/logo.png" alt="Wise Financial" className={classes.image} />
        </Toolbar>
      </AppBar>
    </div>
  );
}