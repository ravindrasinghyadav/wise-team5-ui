import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AccountCircle from '@material-ui/icons/AccountCircle';
import FeedIcon from '@material-ui/icons/RssFeed';
import QuestionsIcon from '@material-ui/icons/QuestionAnswer';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    background: 'lightgray'
  },
});

export default function Navigation({value}) {
  const classes = useStyles();
  // const [value, setValue] = React.useState('recents');

  // function handleChange(event, newValue) {
  //   setValue(newValue);
  //   console.log(newValue);
    
  // }

  return (
    // <BottomNavigation value={value} onChange={handleChange} className={classes.root} value={value}>
    <BottomNavigation value={value}className={classes.root}>
      <BottomNavigationAction label="Home" value="home" to="/home" component={Link} icon={<HomeIcon/>}  />
      <BottomNavigationAction label="Q and A" value="questions" component={Link} to="/questions" icon={<QuestionsIcon />} />
      <BottomNavigationAction label="News Feed" value="feeds" to="/feeds" component={Link}  icon={<FeedIcon />} />
      <BottomNavigationAction label="Profile" value="profile" to="/profile" component={Link} icon={<AccountCircle />} />
    </BottomNavigation>
  );
}
