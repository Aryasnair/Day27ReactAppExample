import { Button, TextField } from '@mui/material'
import { Box, margin } from '@mui/system'
import React, { useState } from 'react'
import axios from 'axios';

const Form = ({ user }) => {
    const [form, setForm] = useState({
        name: user.name,
        email: user.email,
        password: '',
        confirmpassword: '',
        phonenumber: user.phonenumber,
        address: user.address
    })
    const capValue = () => {
        // console.log(form);
        axios.post('https://dummyjson.com/users/add',form).then((res)=>{
            // console.log(res)
            alert(res.data.id);
        })
    }
    return (
        <div>
            <Box style={{ textAlign: "center" }}>
                <h1>Student RegistrationForm</h1>
                <div>
                    <TextField
                        label="Name"
                        value={form.name}
                        onChange={(e) => {
                            setForm({ ...form, name: e.target.value })
                        }
                        }
                    />
                    <TextField
                        label="Email"
                        value={form.email}
                        onChange={(e) => {
                            setForm({ ...form, email: e.target.value })
                        }
                        }
                    /><br></br><br />
                    <TextField
                        label="password"
                        type="password"
                        autoComplete="current-password"
                        value={form.password}
                        onChange={(e) => {
                            setForm({ ...form, password: e.target.value })
                        }
                        }

                    />
                    <TextField
                        id="outlined-password-input"
                        label="confirmpassword"
                        type="confirmpassword"
                        autoComplete="current-password"
                        value={form.confirmpassword}
                        onChange={(e) => {
                            setForm({ ...form, confirmpassword: e.target.value })
                        }
                        }
                    /><br></br><br />
                    <TextField
                        label="Phone"
                        type="number"
                        value={form.phonenumber}
                        onChange={(e) => {
                            setForm({ ...form, phonenumber: e.target.value })
                        }
                        }
                    />


                    <TextField
                        required
                        id="outlined-required"
                        label="Address"
                        defaultValue="Address"
                        value={form.address}
                        onChange={(e) => {
                            setForm({ ...form, address: e.target.value })
                        }
                        }
                    /><br></br><br /><br />
                    <Button variant="contained" onClick={capValue}>Register</Button>

                </div>
            </Box>

        </div>
    )
}

export default Form