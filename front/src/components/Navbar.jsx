import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Stack,Button, TextField, IconButton } from '@mui/material'
import AcUnitIcon from '@mui/icons-material/AcUnit';
const Navbar = () => {
  return (
    <>
    <AppBar elevation={0} position="fixed" color="default">
      <Toolbar>
                
        <Typography variant="h6" flexGrow={1} >
          Ecom
        </Typography>

        <Stack spacing={2} direction={"row"} flexGrow={1} >
          <Button   variant='text' href='/' >Home</Button>
          <Button   variant='text' href='/' >Home</Button>
          <Button   variant='text' href='/' >Home</Button>
          <Button   variant='text' href='/' >Home</Button>
          <Button   variant='text' href='/' >Home</Button>


        </Stack>


        <Stack   direction={"row"}  >
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />

        <IconButton aria-label="icon to other application"  >
    <AcUnitIcon/>
 </IconButton><IconButton aria-label="icon to other application"  >
    <AcUnitIcon/>
 </IconButton>
 
        </Stack>
      </Toolbar>
    </AppBar>

    </>
  )
}

export default Navbar