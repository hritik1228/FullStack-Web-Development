import {React, useState} from 'react'
import { Box, TextField,MenuItem } from '@mui/material'


function MuiSelect() {

    const [country,setCountry]=useState('')
    const [countries,setCountries]=useState([])

    const handleChange=(e)=>{
        setCountry(e.target.value)
    }

    const handleMultipleChange=(e)=>{
        const value=e.target.value
        setCountries(typeof value==='string' ? value.split(',') : value)
    }

    // console.log(country);

    return (
        <>
            <Box width='250px'>

                <TextField label='Select country' select value={country} onChange={handleChange} fullWidth>
                    <MenuItem value='IN'>India</MenuItem>
                    <MenuItem value='US'>USA</MenuItem>
                    <MenuItem value='AU'>Australia</MenuItem>
                </TextField>
            </Box>

            {/* Multiple Select Values */}
            <Box width='250px'>
                <TextField label='Select country' select value={countries} onChange={handleMultipleChange} fullWidth SelectProps={{
                    multiple:true
                }} size='small' color='secondary' helperText='Please select your country' error>
                    <MenuItem value='IN'>India</MenuItem>
                    <MenuItem value='US'>USA</MenuItem>
                    <MenuItem value='AU'>Australia</MenuItem>
                </TextField>
            </Box>
        </>
    )
}

export default MuiSelect
