import { Button, Container, Grid, Rating, Stack, Typography, IconButton } from '@mui/material'
import React, { useState } from 'react'
import HeroPoster5 from '../assets/clock.webp'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Slidebanner from './Slidebanner';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Link, useParams } from 'react-router-dom';
import {
  useQuery,
 
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import axios from 'axios'



const Product = () => {


  const params=useParams()
  

     


const fetchSingleProduct=async()=>{
  const res=await axios.get(`https://fakestoreapi.com/products/${params.id}`)
  console.log(res)
  return res.data
}


const singleProduct=useQuery({
  queryKey:["product",params.id],
  queryFn:fetchSingleProduct
})
console.log(params)






  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

 
 


 
 


  if(singleProduct.isLoading){
    return <div>Product Details are loading...</div>
  }

if(singleProduct.data){
  return (
    <Container >

        <Grid sx={{
            border:"1px solid blue"
        }} container maxHeight={"30rem"}>

            <Grid item lg={5} >

            <img src={singleProduct.data.image} style={{
               maxHeight:"25rem"
            }} alt="" />


            </Grid>

            <Grid item lg={6}>
                <Typography variant="h5" gutterBottom color="initial">
                  
                {singleProduct.data.title}
                </Typography>
                <Typography variant="body1" color="initial">Brand:Logitech</Typography>

                
                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5}   />
                <Typography variant="h6"  color="initial">${singleProduct.data.price}</Typography>
                <Typography variant="body1"  color="initial">Inclusive of all taxes</Typography>
              
              
                <Button disableElevation variant='contained' startIcon={<ShoppingCartIcon/>} size='large' >Add to cart</Button>


                <Typography variant="body1"  color="initial">Available sizes</Typography>
                <Stack  >
                <ToggleButtonGroup
      
      exclusive
      value={alignment}
      
      onChange={handleAlignment}
      aria-label="text alignment"
      sx={{
        gap:1,
        margin:"1rem 0"
      }}
    >
      <ToggleButton value="left" aria-label="left aligned">
        XS
      </ToggleButton>
      <ToggleButton value="center" aria-label="centered">
        S
      </ToggleButton>
      <ToggleButton value="justidfy" aria-label="justified" >
        M
      </ToggleButton>
    
      <ToggleButton value="right" aria-label="right aligned">
      XL
      </ToggleButton>
      <ToggleButton value="justify" aria-label="justified" >
        XXL
      </ToggleButton>
    </ToggleButtonGroup>


                </Stack>

                


            </Grid>


        </Grid>

      


    </Container>
  )
}
 
}

export default Product