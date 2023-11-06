import { Box, Button, Container, Grid, Rating, Stack, Typography, IconButton } from '@mui/material'
import productImg from '../assets/v.jpg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from 'react'
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';

const Slidebanner = () => {
    let arr=[1,1,1,1,1,1,1,1]
  return (
    <Container >
        
        <Grid container justifyContent={"center"} sx={{
          border:"2px solid green"
        }} gap={4} >
          

          {
            arr.map((elem,i)=>{
             return   (
                    <Grid className='product-box' key={i} item lg={2.6} sx={{
                        border:"1px solid blue",
                        minHeight:"25rem",
                        height:"auto",
                        textAlign:"center",
                        position:"relative"
                    }} >
                    <img style={{
                        maxHeight:"20rem",
                        position:"relative"
                    }} src={productImg} alt="" />
                    <Box sx={{
                        display:"flex",
                        alignItems:"center",
                        flexDirection:"column",
                        
                    }} textAlign={"center"} >
                    <Typography variant="subtitle1" color="initial">Ideal Sunglasses</Typography>
                    <Typography variant="subtitle2" color="initial">$40</Typography>
                    <Rating name="half-rating-read" defaultValue={4.5} precision={0.5}   />

                    <Box className="icon-box" sx={{
                        position:"absolute",
                        bottom:"6.7rem",
                        display:"flex",
                        gap:"1rem",
                        visibility:"hidden",
                        opacity:0.2,
                        transition:".2s ease-in"
                      
                    }} >
                        <IconButton  disableRipple sx={{
                          background:"white",
                          padding:"1rem",
                           
                        }} aria-label="buy now icon" >
                        <ShoppingCartIcon color='primary' />   
                        </IconButton  >
                        <IconButton disableRipple sx={{
                          background:"white",
                          padding:"1rem"
                        }} aria-label="buy now icon" >
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