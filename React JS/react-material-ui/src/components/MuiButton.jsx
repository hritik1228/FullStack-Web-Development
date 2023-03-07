import {React,useState} from 'react'
import { Button, Stack,ButtonGroup,ToggleButton,ToggleButtonGroup } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

function MuiButton() {

  const [formats, setFormats] = useState(() => ['bold', 'italic']);

  const handleFormatChange = (event, newFormats) => {
    console.log(newFormats)
    setFormats(newFormats);
  };

  return (
    <Stack spacing={4}>
      
      <Stack direction='row' spacing={2}>
        <Button variant='text'>Text</Button>
        <Button variant='contained'>Contained</Button>
        <Button variant='outlined'>Outlined</Button>
        <Button variant='text' href='https://google.com'>Link to Google</Button>
      </Stack>

      <Stack spacing={2} direction='row'>
        <Button variant='contained' color='primary'>Primary</Button>
        <Button variant='contained' color='secondary'>Secondary</Button>
        <Button variant='contained' color='error'>Error</Button>
        <Button variant='contained' color='warning'>Warning</Button>
        <Button variant='contained' color='info'>Info</Button>
        <Button variant='contained' color='success'>Success</Button>
      </Stack>

      <Stack display='block' spacing={2} direction='row'>
        <Button variant='contained' size='small'>Small</Button>
        <Button variant='contained' size='medium'>Medium</Button>
        <Button variant='contained' size='large'>Large</Button>
      </Stack>

      <Stack spacing={2} direction='row'>
        <Button variant='contained' startIcon={<SendIcon/>}>Send</Button>
        <Button variant='contained' endIcon={<SendIcon/>} disableElevation disableRipple onClick={()=>alert('Clicked')}>Send</Button>
        <IconButton aria-label='send'>
          <SendIcon/>
        </IconButton>
      </Stack>
      
      <Stack direction='row'>
        <ButtonGroup variant='contained' orientation='vertical' size='small' color='secondary'>
          <Button onClick={()=>alert('Left Clicked')}>Left</Button>
          <Button>Right</Button>
          <Button>Center</Button>
        </ButtonGroup>
      </Stack>
      
      <Stack direction='row'>
        <ToggleButtonGroup aria-label='text-formatting' value={formats} onChange={handleFormatChange}
        size='small' color='success' orientation='vertical' exclusive> 
          <ToggleButton value='bold' aria-label='bold'><FormatBoldIcon/></ToggleButton>
          <ToggleButton value='italic' aria-label='italic'><FormatItalicIcon/></ToggleButton>
          <ToggleButton value='underlined' aria-label='underlined'><FormatUnderlinedIcon/></ToggleButton>
        </ToggleButtonGroup>
      </Stack>

    </Stack>
  )
}

export default MuiButton
