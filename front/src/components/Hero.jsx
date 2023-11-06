import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import HeroPoster from '../assets/g.jpg'
import HeroPoster2 from '../assets/a.jpg'
import HeroPoster3 from '../assets/x.jpg'
import HeroPoster4 from '../assets/z.jpg'
import HeroPoster5 from '../assets/b.jpg'


const Hero = () => {
    return (
        <Box mb={"3rem"} >
 
            <Grid container sx={{
                userSelect: "none",
                background: "pink",
                width: "100%",
                minHeight: "80vh",
                overflow: "hidden"
            }} height={"80vh"} >

                <Grid sx={{
                    position: "relative",
                    background: "black",
                    maxHeight: "80rem",
                    width: "50%"
                }} item lg={6}>

                    <img src={HeroPoster} style={{
                        minHeight: "100%",
                        opacity: ".7"

                    }} alt="" />

                    <Box sx={{
                        position: "absolute",
                        top: "50%",
                        left: "43%",
                        transform: "translate(-50%,-50%)",
                        color: "white",
                        zIndex: "11",
                        maxWidth: "90%"
                    }}>
                        <Typography variant="h4" sx={{
                            zIndex: "33",
                            fontSize: "3rem",
                            fontWeight: "800",
                            fontFamily: "Dancing Script,cursive"
                        }} color="white">Women’s fashion</Typography>

                        <Typography variant="subtitle1" sx={{
                            zIndex: "33",

                        }} color="white">Sitamet, consectetur adipiscing elit, sed do eiusmod tempor incidid-unt labore edolore magna aliquapendisse ultrices gravida.</Typography>

                    </Box>





                </Grid>

                {/* ////////////////////////////////////////// */}
                <Grid sx={{
                    background: "black",
                    maxHeight: "80vh",

                }} container lg={6} >


                    <Grid sx={{
                        background: "black",
                        maxHeight: "40vh",
                        position: "relative"
                    }} item lg={6}  >
                        <img src={HeroPoster2} style={{
                            width: "100%",
                            minHeight: "100%",
                            opacity: ".5"
                        }} alt="" />

                        <Box sx={{
                            position: "absolute",
                            top: "50%",
                            left: "30%",
                            transform: "translate(-50%,-50%)",
                            color: "white",
                            zIndex: "11",

                        }}>
                            <Typography variant="h4" sx={{
                                zIndex: "33",
                                fontSize: "1.5rem",
                                fontWeight: "800",
                                fontFamily: "Dancing Script,cursive"
                            }} color="white">Women’s fashion</Typography>

                            <Typography variant="subtitle1" sx={{
                                zIndex: "33",
                                fontSize: "1rem"

                            }} color="white">334 items</Typography>

                        </Box>

                    </Grid>

                    <Grid sx={{
                        background: "black",
                        maxHeight: "40vh",
                        position: "relative"
                    }} item lg={6}  >
                        <img src={HeroPoster2} style={{
                            width: "100%",
                            minHeight: "100%",
                            opacity: ".5"
                        }} alt="" />

                        <Box sx={{
                            position: "absolute",
                            top: "50%",
                            left: "30%",
                            transform: "translate(-50%,-50%)",
                            color: "white",
                            zIndex: "11",

                        }}>
                            <Typography variant="h4" sx={{
                                zIndex: "33",
                                fontSize: "1.5rem",
                                fontWeight: "800",
                                fontFamily: "Dancing Script,cursive"
                            }} color="white">Women’s fashion</Typography>

                            <Typography variant="subtitle1" sx={{
                                zIndex: "33",
                                fontSize: "1rem"

                            }} color="white">334 items</Typography>

                        </Box>

                    </Grid>
                    <Grid sx={{
                        background: "black",
                        maxHeight: "40vh",
                        position: "relative"
                    }} item lg={6}  >
                        <img src={HeroPoster2} style={{
                            width: "100%",
                            minHeight: "100%",
                            opacity: ".5"
                        }} alt="" />

                        <Box sx={{
                            position: "absolute",
                            top: "50%",
                            left: "30%",
                            transform: "translate(-50%,-50%)",
                            color: "white",
                            zIndex: "11",

                        }}>
                            <Typography variant="h4" sx={{
                                zIndex: "33",
                                fontSize: "1.5rem",
                                fontWeight: "800",
                                fontFamily: "Dancing Script,cursive"
                            }} color="white">Women’s fashion</Typography>

                            <Typography variant="subtitle1" sx={{
                                zIndex: "33",
                                fontSize: "1rem"

                            }} color="white">334 items</Typography>

                        </Box>

                    </Grid>
                    <Grid sx={{
                        background: "black",
                        maxHeight: "40vh",
                        position: "relative"
                    }} item lg={6}  >
                        <img src={HeroPoster2} style={{
                            width: "100%",
                            minHeight: "100%",
                            opacity: ".5"
                        }} alt="" />

                        <Box sx={{
                            position: "absolute",
                            top: "50%",
                            left: "30%",
                            transform: "translate(-50%,-50%)",
                            color: "white",
                            zIndex: "11",

                        }}>
                            <Typography variant="h4" sx={{
                                zIndex: "33",
                                fontSize: "1.5rem",
                                fontWeight: "800",
                                fontFamily: "Dancing Script,cursive"
                            }} color="white">Women’s fashion</Typography>

                            <Typography variant="subtitle1" sx={{
                                zIndex: "33",
                                fontSize: "1rem"

                            }} color="white">334 items</Typography>

                        </Box>

                    </Grid>



                </Grid>

            </Grid>


        </Box>
    )
}

export default Hero