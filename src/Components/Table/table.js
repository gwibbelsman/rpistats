import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Link} from 'react-router-dom'
import json from './json.json'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(3),
    overflowX: 'auto',
    margin: theme.spacing(4)
  },
  table: {
    minWidth: 600,
  },
}));

function createData(id, node, calories, fat, carbs, protein) {
  return { id, node, calories, fat, carbs, protein };
}
/*
const nodes = [
  createData(0, 'Node 0', 159, 6.0, 24, 4.0),
  createData(1, 'Node 1', 237, 9.0, 37, 4.3),
  createData(2, 'Node 2', 262, 16.0, 24, 6.0),
  createData(3, 'Node 3', 305, 3.7, 67, 4.3),
  createData(4, 'Node 4', 305, 3.7, 67, 4.3),
  createData(5, 'Node 5', 356, 16.0, 49, 3.9),
  createData(6, 'Node 6', 356, 16.0, 49, 3.9),
  createData(7, 'Node 7', 356, 16.0, 49, 3.9),
];
*/

const nodes = json;
export default function SimpleTable() {
  const classes = useStyles();
  //console.log(nodes);
  return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Node</TableCell>
              <TableCell align="right">Architecture</TableCell>
              <TableCell align="right">Machine</TableCell>
              <TableCell align="right">System</TableCell>
              <TableCell align="right">Distribution</TableCell>
              <TableCell align="right">Average Load</TableCell>
              <TableCell align="right">Memory Total</TableCell>
              <TableCell align="right">Memory Free</TableCell>
              <TableCell align="right">Uptime</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {nodes.map(node => (
              <TableRow key={node.id}>
                <TableCell component="th" scope="row">
                  <Link to={{ pathname:`/node/${node.id}`}}>
                      {node.Node} 
                  </Link>
                </TableCell>
                <TableCell align="right">{node.Architecture}</TableCell>
                <TableCell align="right">{node.Machine}</TableCell>
                <TableCell align="right">{node.System}</TableCell>
                <TableCell align="right">{node.Distribution}</TableCell>
                <TableCell align="right">{node.AverageLoad}</TableCell>
                <TableCell align="right">{node.MemTotal}</TableCell>
                <TableCell align="right">{node.MemFree}</TableCell>
                <TableCell align="right">{node.Uptime}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
  );
}