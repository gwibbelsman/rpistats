import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import {Link} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    
    flexGrow: 1,
  },
}));

export default function TopAppBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to={{ pathname: '/'}}>
            <IconButton edge="start" className={classes.homeButton} color="inherit" aria-label="home" >
              <HomeIcon />
            </IconButton>
          </Link>
          <Typography align="left" variant="h6" className={classes.title}>
            Raspberry Pis
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}