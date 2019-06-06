import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withSnackbar } from 'notistack'
import Navigation from '../components/navigation';
import TopNav from '../components/appbar';

const styles = theme => ({
  // submit: {
  //   margin: 0,
  // },
});

class Profile extends React.Component {

  render() {
    const { classes, node } = this.props;
    return (
      <React.Fragment>
        {/* <TopNav/> */}
        <Navigation value="profile"/>
      </React.Fragment>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withSnackbar(Profile));
