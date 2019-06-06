import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import { ReactTypeformEmbed } from 'react-typeform-embed';
import Navigation from '../../components/navigation';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  main: {
    padding: 6,
    margin: 6
  },
  title: {
    // display: 'none',
    // [theme.breakpoints.up('xs')]: {
    //   display: 'block',
    // },
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

function Question() {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <Container maxWidth="sm" className="main">
        {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} /> */}
      </Container>
      <Navigation value="questions" />
    </div>
  );
}

export default Question;
