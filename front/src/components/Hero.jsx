import { Grid } from '@mui/material'
import React from 'react'
import HeroPoster from '../assets/g.jpg'
const Hero = () => {
  return (
    <>

    <Grid container sx={{
        background:"black",
        width:"100%"
    }} height={"80vh"} gap={1}>

        <Grid sx={{
            background:"red"
        }} item lg={5.9}>
 <img src={HeroPoster} style={{
    height:"100%"
 }} alt="" />
        </Grid>

{/* ////////////////////////////////////////// */}
        <Grid sx={{
            background:"red"
        }}   container lg={6} >


<Grid sx={{
            background:"green"
        }} item   lg={6}  >
 <img src={HeroPoster}  alt="" />
        </Grid>

        <Grid sx={{
            background:"blue"
        }} item   lg={6}>
d
        </Grid>

        <Grid sx={{
            background:"green"
        }} item   lg={6}>
d
        </Grid>
        <Grid sx={{
            background:"green"
        }} item   lg={6}>
d
        </Grid>

        </Grid>

    </Grid>


    </>
  )
}

export default Hero