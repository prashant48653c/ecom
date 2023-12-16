import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Stack,Button, TextField, IconButton } from '@mui/material'
import AcUnitIcon from '@mui/icons-material/AcUnit';
 import {motion} from 'framer-motion'
import { NavLink } from 'react-router-dom'
 
const Navbar = () => {
  return (
    <>
    <AppBar   elevation={0} position="sticky"  color="default">
      <Toolbar>
                
    
        
       

        <Stack spacing={2} direction={"row"} flexGrow={1} >
         
          <NavLink to="/product">Product</NavLink>
          <NavLink to="/">home</NavLink>
          <NavLink to="/sdf">random</NavLink>


  


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