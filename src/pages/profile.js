import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withSnackbar } from 'notistack'
import Navigation from '../components/navigation';

const styles = theme => ({
  // submit: {
  //   margin: 0,
  // },
});

class Profile extends React.Component {

  render() {
    // const { classes, node } = this.props;
    return (
      <React.Fragment>
        <Navigation value="profile"/>
      </React.Fragment>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withSnackbar(Profile));
