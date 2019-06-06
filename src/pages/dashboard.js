import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withSnackbar } from 'notistack'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Navigation from '../components/navigation';
import TopNav from '../components/appbar';
import { Link as RouterLink } from 'react-router-dom';
// import { Redirect } from 'react-router'

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

class Dashboard extends React.Component {
  state = {
    redirect: true,
    // data: {}
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

  onSubmit(){
    console.log('submit');
    window.location.href = '/question';
  }

  render() {
    const { classes, node } = this.props;
    // if (this.state.redirect) {
    //   return <Redirect to='/question'/>;
    // }
    return (
      <React.Fragment>
        {/* <TopNav/> */}
        <Grid container component="main" className={classes.root}>
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
          </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={this.onSubmit}
              >
                Sign In
            </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                </Link>
                </Grid>
                <Grid item>
                  {/* <RouterLink to="/signup"> */}

                    <Link href="/signup" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  {/* </RouterLink> */}
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>
        <Navigation/>
      </React.Fragment>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withSnackbar(Dashboard));
