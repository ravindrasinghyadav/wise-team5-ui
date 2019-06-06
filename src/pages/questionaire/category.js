import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import deepOrange from '@material-ui/core/colors/deepOrange';
import deepPurple from '@material-ui/core/colors/deepPurple';
import Grid from '@material-ui/core/Grid';
import { ReactTypeformEmbed } from 'react-typeform-embed';


const useStyles = makeStyles({
  card: {
    maxWidth: 150,
    margin: 20
  },
  avatar: {
    margin: 10,
  },
  orangeAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepOrange[500],
  },
  purpleAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepPurple[500],
  },
});

function Category() {
  const classes = useStyles();
  
  const onClick = (cat) => {
    console.log('test');
    // this
  }

  return (
    <div className="Examples__widget-section">
      <ReactTypeformEmbed  popup={false} autoOpen={true} url="https://tomasgutierrez.typeform.com/to/s1OfSl" />
    </div>
  );
}

export default Category;
