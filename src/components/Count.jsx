import { Button } from '@mui/material';
import React, { useState } from 'react'

const Count = () => {
    const [count, setCount] = useState(0);
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
        <div><Button variant="contained" onClick={changeCount}>CountIncrement</Button><br /><br />
            <Button variant="contained" onClick={changeCountdecrement}>CountDecrement</Button><br /><br />
            <Button variant="contained" onClick={changeCountdereset}>CountReset</Button><br />
            <small> Button is pressed {count} times</small>
        </div>
    )
}

export default Count