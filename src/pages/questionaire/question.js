import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(/images/classroom-chalkboard.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'left top',
  },
  paper: {
    margin: theme.spacing.unit,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    margin: 0,
  },
});

class Questions extends React.Component {
  state = {
    showQuestions: false,
    question: {
      label: '',
      choices: []
    }
  };



  // componentWillReceiveProps(nextProps){
  //   let node = this.props.node || {};
  //   if (nextProps.node && nextProps.node.id !== node.id) {
  //     this.loadData(nextProps.node);
  //   } else {
  //     this.setState({ data: {}});
  //   }
  // }

  // loadData(node) {
  //   this.setState({ loading: true });
  //   // Temp: do not fetch the link type for now
  //   if (node.type === 'link') return;
  //   axios.get(`${CONFIG.API}`, { params: {uids: node.data.uids.join(',')} })
  //     .then(res => this.setState({ data: res}))
  //     .catch((error) => {
  //       this.props.enqueueSnackbar('Failed to load detail', {variant: 'error'});
  //     })
  //     .finally(() => this.setState({ loading: false }));
  // }

  onSubmit() {
    console.log('submit');
    window.location.href = '/question';
  }

  render() {
    const { classes, node } = this.props;
    // if (this.state.redirect) {
    //   return <Redirect to='/question'/>;
    // }
    return (
      <Grid container component="main" className={classes.root}>
        {/* <Grid item xs={false} sm={4} md={7} className={classes.image} /> */}
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>

          <Typography variant="h6" gutterBottom>
            h6. Heading
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

Questions.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Questions);
