import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withSnackbar } from 'notistack'
import Navigation from '../components/navigation';
import TopNav from '../components/appbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {

    width: '100%',
    // maxWidth: 360,
    // backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
});

class Feeds extends React.Component {

  render() {
    const { classes, node } = this.props;
    return (
      <React.Fragment>
        {/* <TopNav/> */}
        <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/images/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="New Article by RANGER4 In Mclean, VA?"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
        <br/>
      </ListItem>
        <img src="/images/nerd.jpeg" width="300" align="bottom"/>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/images/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="29 mins ago - In New York, NY Just got an interview at Deutsche Bank! So Excited! Anybody of my CPL Alums have advice on how best to prepare?"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                JOSH85
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/images/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="1 mins ago -  In BOSTON, MA Check out this site for Sample Interview Questions."
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                GINACOOL
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/images/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="New Article by RANGER4 In Mclean, VA?"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
        <br/>
      </ListItem>
        <img src="/images/some.jpeg" width="300" align="bottom"/>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/images/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="29 mins ago - In New York, NY Just got an interview at Deutsche Bank! So Excited! Anybody of my CPL Alums have advice on how best to prepare?"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                JOSH85
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/images/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="1 mins ago -  In BOSTON, MA Check out this site for Sample Interview Questions."
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                GINACOOL
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      <Navigation value="feeds"/>
      </React.Fragment>
    );
  }
}

Feeds.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withSnackbar(Feeds));
