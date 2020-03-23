import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import json from '../Table/json.json'
import { useParams } from "react-router-dom"
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      marginTop: theme.spacing(3),
      /*width: theme.spacing(16),
      height: theme.spacing(16),*/
      margin: "auto",
    },
  },
}));

const nodes = json;



export default function Details() {
  const classes = useStyles();
  const id = useParams();
  const thisNode = nodes[id.nodeId]
  console.log(nodes[id.nodeId])
  console.log(thisNode.Node)
  return (
    <div className={classes.root}>
      <Paper elevation={3} >
        <Typography variant="h5" component="h2" align="left">
          ID: {thisNode.id}
        </Typography>
        <Typography variant="h5" component="h2" align="left">
          Architecture: {thisNode.Architecture}
        </Typography>
        <Typography variant="h5" component="h2" align="left">
          Machine: {thisNode.Machine}
        </Typography>
        <Typography variant="h5" component="h2" align="left">
          Node: {thisNode.Node}
        </Typography>
        <Typography variant="h5" component="h2" align="left">
          System: {thisNode.System}
        </Typography>
        <Typography variant="h5" component="h2" align="left">
          Distribution: {thisNode.Distribution}
        </Typography>
        <Typography variant="h5" component="h2" align="left">
          Average Load: {thisNode.AverageLoad}
        </Typography>
        <Typography variant="h5" component="h2" align="left">
          Total Memory: {thisNode.MemTotal}
        </Typography>
        <Typography variant="h5" component="h2" align="left">
          Memory Free: {thisNode.MemFree}
        </Typography>
        <Typography variant="h5" component="h2" align="left">
          Uptime: {thisNode.Uptime}
        </Typography>
      </Paper>
    </div>
  );
}


/*
export class Details extends React.Component{
  render(){
    
    return(
     
      <div>
        <Paper>
          {this.props.location.state.node.id}
          <br/>
          {this.props.location.state.node.node}
          <br/>
          {this.props.location.state.node.calories}
          <br/>
          {this.props.location.state.node.fat}
          <br/>
          {this.props.location.state.node.carbs}
          <br/>
          {this.props.location.state.node.protein}
          <br/>
        </Paper>
        
      </div>
    );
  }
}
*/