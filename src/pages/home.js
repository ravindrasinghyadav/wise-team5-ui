import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withSnackbar } from 'notistack'
import Navigation from '../components/navigation';
import TopNav from '../components/appbar';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  smAvatar: {
    margin: 2,
    width: 20,
    height: 20,

  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,

  },
  button: {
    margin: theme.spacing(1),
  },
});

const rows = [
  createData('1', 'Mary Poppins', 'Cary, NC', '$250', '3.jpg'),
  createData('2', 'Jack D Ripper', 'Raleigh, NC', '$100', '2.jpg'),
  createData('3', 'Dr Jeckle', 'Edison, NJ', '$55', '4.jpg'),
  createData('4', 'Mr. Hyde', 'Roanoake, VA', '$25', '4.jpg'),
  createData('5', 'John Doe', 'Iselin, NJ', '$10', '1.jpg'),
];

function createData(name, calories, fat, carbs, img) {
  return { name, calories, fat, carbs, img };
}

class Home extends React.Component {

  render() {
    const { classes, node } = this.props;
    return (
      <React.Fragment>
        {/* <TopNav /> */}
        <Grid container justify="center" alignItems="center">
          <Avatar alt="Remy Sharp" src="/images/1.jpg" className={classes.bigAvatar} />
          <Typography variant="h4" gutterBottom>
            Welcome John Doe
      </Typography>
          <p>
            <Typography variant="h6" align="left" gutterBottom color="textSecondary">
              MONEY BUZZ LEADERBOARD
      </Typography>
          </p>
          <br />
          <br />
          <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Rank</TableCell>
                  <TableCell align="right">Player</TableCell>
                  <TableCell align="right">Location</TableCell>
                  <TableCell align="right">Score</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="left "><Avatar alt="Remy Sharp" src={"/images/" + row.img} className={classes.smAvatar} />{row.calories}</TableCell>
                    <TableCell align="left">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Button variant="outlined" color="primary" className={classes.button}>
              Buy more questions
      </Button>
          </Paper>
          <p>
            <Typography variant="h6" align="left" color="textSecondary">
              My CPL Practice Tests
      </Typography>

          </p>
          <br />
          <br />
          <br />
        </Grid>
        <Navigation value="home" />
      </React.Fragment>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withSnackbar(Home));
