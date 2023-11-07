import { Box, Button, Container, Grid, Rating, Stack, Typography, IconButton } from '@mui/material'
import productImg from '../assets/v.jpg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, { useState } from 'react'
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import HeroPoster4 from '../assets/dd.webp'
import AddIcon from '@mui/icons-material/Add';

const Slidebanner = () => {
  const [show, setShow] = useState(false)
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
                        maxHeight:"25rem",
                        position:"relative",
                        marginBottom:"1rem"
                    }} src={HeroPoster4} alt="" />
                    <Box sx={{
                        display:"flex",
                        alignItems:"center",
                        flexDirection:"column",
                        
                    }} textAlign={"center"} >
                    <Typography variant="p" fontSize={".8rem"} gutterBottom color="initial">IFit micro corduroy shirt</Typography>
                    <Rating name="half-rating-read"  gutterBottom size='small' defaultValue={4.5} precision={0.5}   />
                    <Typography variant="subtitle2" my={1} color="initial"> <b> $ 29.0 </b> </Typography>


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
                        <IconButton  onClick={()=>setShow(true)} disableRipple sx={{
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

        <div className='img-wide-box'>
          <img src={HeroPoster4} className='img-wide' alt="" />
          <IconButton sx={{
            top:"-2%",
            left:"18%",
            zIndex:111,
            position:"absolute" 
          }} color='info'  aria-label="plus counter"   >
                 <AddIcon color='action' />
                </IconButton>
        </div>
     

    </Container>
  )
}

export default Slidebanner