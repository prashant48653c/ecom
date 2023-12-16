import React from 'react'
import { Container, Link, Grid, Typography, IconButton, Box, TextField, Button, Divider } from '@mui/material'
import AcUnitIcon from '@mui/icons-material/AcUnit';
const Footer = () => {
  return (
    <Container   maxWidth="xl" sx={{
      padding: '4rem 0',
      border: "1px solid blue",
    }}  >
      <Grid  gap={4} container sx={{
        border: "1px solid blue",
        height: "auto",

      }} >

        <Grid item lg={3} >

          <Typography variant="h3" sx={{
            fontFamily: "'Dancing Script', cursive",
            fontWeight: 900
          }} gutterBottom color="initial">Ecom</Typography>
          <Typography gutterBottom variant="subtitle2" color="initial">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt cilisis.</Typography>
          <IconButton aria-label="icon to other application"  >
            <AcUnitIcon />
          </IconButton>
          <IconButton aria-label="icon to other application"  >
            <AcUnitIcon />
          </IconButton>
          <IconButton aria-label="icon to other application"  >
            <AcUnitIcon />
          </IconButton>



        </Grid>

        <Grid item lg={2}>
          <Typography variant="h6" gutterBottom color="initial">Quick Links</Typography>
          <Box display={"flex"} gap={1} flexDirection={"column"} >
            <Link >About</Link>
            <Link>About</Link>
            <Link>About</Link>
            <Link>About</Link>
          </Box>



        </Grid>

        <Grid item lg={2.1} >

          <Typography variant="h6" color="initial" gutterBottom>Accounts</Typography>
          <Box display={"flex"} gap={1} flexDirection={"column"} >
            <Link>My Account</Link>
            <Link>Order tracking</Link>
            <Link>Checkout</Link>
            <Link>Wishlist</Link>
          </Box>


        </Grid>

        <Grid item lg={4} >

          <Typography variant="h6" color="initial" gutterBottom >Newsletter</Typography>
          <TextField id="outlined-basic" label="Outlined" variant="outlined"  />
          <Button variant='contained'>Subscribe</Button>
          <Box>
            <IconButton aria-label="icon to other application"  >
              <AcUnitIcon />
            </IconButton>

            <IconButton aria-label="icon to other application"  >
              <AcUnitIcon />
            </IconButton>

            <IconButton aria-label="icon to other application"  >
              <AcUnitIcon />
            </IconButton>
          </Box>


        </Grid>



      </Grid>

      <Divider />
      <Typography pt={3} textAlign={"center"} variant="subtitle2" color="initial">Copyright © 2023 All rights reserved | This template is made with  by Colorlib</Typography>
    </Container>



  )
}

export default Footer