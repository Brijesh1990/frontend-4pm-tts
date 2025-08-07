import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'
function App()
{
  return (
    <>

      <Stack spacing={2} direction="row">
        <Button variant='text'>Click Me</Button>
        <Button variant='contained'>Click Me</Button>
        <Button variant='outlined'>Click Me</Button>

        <Button>Primary</Button>
        <Button disabled>Disabled</Button>
        <Button href="#text-buttons">Link</Button>
      
      
        <Button variant="contained">Contained</Button>
        <Button variant="contained" disabled>
        Disabled
        </Button>
        <Button variant="contained" href="#contained-buttons">
         Link
        </Button>
      
      </Stack>

    </>
  )
}

export default App