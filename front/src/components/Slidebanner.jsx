import { Box, Button, Container, Grid, Rating, Stack, Typography, IconButton } from '@mui/material'
import productImg from '../assets/v.jpg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from 'react'
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';

const Slidebanner = () => {
    let arr=[1,1,1,1,1,1,1,1]
  return (
    <Container maxWidth={"xl"}>
        
        <Grid container  gap={4} >
          

          {
            arr.map((elem,i)=>{
             return   (
                    <Grid  key={i} item lg={2.6} sx={{
                        border:"1px solid blue",
                        minHeight:"25rem",
                        height:"auto",
                        textAlign:"center"
                    }} >
                    <img style={{
                        maxHeight:"20rem",
                        position:"relative"
                    }} src={productImg} alt="" />
                    <Box textAlign={"center"} >
                    <Typography variant="subtitle1" color="initial">Buttons tweed blazer</Typography>
                    <Typography variant="subtitle2" color="initial">$ 340</Typography>
                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5}   />

                    <Box sx={{
                        position:"absolute",
                         

                    }} >
                        <IconButton aria-label="buy now icon" >
                        <ShoppingCartIcon/>   
                        </IconButton>
                        <IconButton aria-label="buy now icon" >
                        <ZoomOutMapIcon/>  
                        </IconButton>
                    </Box>
    
                    </Box>
                    </Grid>
                )
              
            })
          }
       







        </Grid>
     

    </Container>
  )
}

export default Slidebanner