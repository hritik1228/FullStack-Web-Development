import {React,useState} from 'react'
import { Box,FormControl,FormLabel,FormControlLabel,RadioGroup,Radio,FormHelperText } from '@mui/material'

function MuiRadioButton() {

    const [value,setValue]=useState()

    const handleChange=(e)=>{
        setValue(e.target.value)
    }
    
    console.log(value)

    return (
        <Box>
            <FormControl>
                <FormLabel id='job-experience-group-label'>Years of Experience</FormLabel>
                <RadioGroup value={value} row onChange={handleChange} name='job-experience-group' aria-labelledby='job-experience-group-label'>
                    <FormControlLabel control={<Radio size='small' color='secondary'/>} label='0-2' value='0-2'/>
                    <FormControlLabel control={<Radio/>} label='3-5' value='3-5'/>
                    <FormControlLabel control={<Radio/>} label='5-8' value='5-8'/>

                </RadioGroup>
            </FormControl>
        </Box>
    )
}

export default MuiRadioButton
