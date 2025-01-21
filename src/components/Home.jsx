import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import React, { useState } from 'react'


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };

}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];



const Home = () => {
    const [name, setName] = useState('ABCD');
    const [count, setCount] = useState(0);
    const [name1, setText] = useState("");
    const changeValue = () => {

        setName('XYZ');
    }
    const changeCount = () => {
        setCount(count + 1);
    }
    const changeCountdecrement = () => {
        setCount(count - 1);
    }
    const changeCountdereset = () => {
        setCount(0);
    }




    return (
        <div>
            <h1>Welcome {name}</h1>
            <Button variant="contained" onClick={changeValue}>Click Here</Button>
            <Button variant="contained" onClick={changeCount}>Count</Button>
            <Button variant="contained" onClick={changeCountdecrement}>CountDecrement</Button>
            <Button variant="contained" onClick={changeCountdereset}>CountReset</Button>
            <small> Button is pressed {count} times</small>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" value={name1} onChange={(e) => setText(e.target.value)} />
            <p>Your Name is:{name1}</p>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">Protein&nbsp;(g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Home