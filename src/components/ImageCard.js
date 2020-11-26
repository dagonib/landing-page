import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Collapse } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 545,
    background: 'rgba(0,0,0,0.5)',
    margin:'20px'
  },
  media: {
    height: 440,
  },
  title: {
       fontFamily: 'nunito',
       fontWeight: 'bold',
       fontSize: '2rem',
       color: '#fff'
  },
  description: {
     fontFamily: 'nunito',
     fontSize: '1.1rem',
     color: '#ddd'
  }
});

export default function ImageCard({ place, checked }) {
  const classes = useStyles();

  return (
    <Collapse 
      in={checked}
      { ...(checked ? { timeout: 1000 } : {})}
    >
      <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image= {place.imageUrl}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography 
                gutterBottom 
                variant="h5" 
                component="h2" 
                className={classes.title}
            >
            {place.title}
            </Typography>
            <Typography 
                variant="body2" 
                color="textSecondary" 
                component="p"
                className={classes.description}>
            {place.description}
            </Typography>
          </CardContent>
      </Card>
    </Collapse>
  );
}