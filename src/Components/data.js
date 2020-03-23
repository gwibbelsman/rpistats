import React from 'react';
import { Table } from '@material-ui/core';
import SimpleTable from './Table/table';

function createData(id, node, calories, fat, carbs, protein) {
    return { id, node, calories, fat, carbs, protein };
}
  
const rows = [
    createData(0, 'Node 0', 159, 6.0, 24, 4.0),
    createData(1, 'Node 1', 237, 9.0, 37, 4.3),
    createData(2, 'Node 2', 262, 16.0, 24, 6.0),
    createData(3, 'Node 3', 305, 3.7, 67, 4.3),
    createData(4, 'Node 4', 305, 3.7, 67, 4.3),
    createData(5, 'Node 5', 356, 16.0, 49, 3.9),
    createData(6, 'Node 6', 356, 16.0, 49, 3.9),
    createData(7, 'Node 7', 356, 16.0, 49, 3.9),
];

let arrayRows = [
    {
        id: 0,
        node: 'Node 0',
        memory: 100,
        process: 5,
        rank: 1
    },
    {
        id: 1,
        node: 'Node 1',
        memory: 100,
        process: 7,
        rank: 2
    },
    {
        id: 2,
        node: 'Node 2',
        memory: 90,
        process: 5,
        rank: 3
    },
    {
        id: 3,
        node: 'Node 3',
        memory: 60,
        process: 5,
        rank: 4
    },
] 


 export default class Data extends React.Component{
    constructor(props){
        super(props);
        this.state = {rows: arrayRows};
    }
    

    render(){
        return(
            <div>
                <SimpleTable {...this.state.rows}/>
            </div>
            
        )
    }
}