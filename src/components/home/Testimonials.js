import React from 'react'
import { Box, Typography, Grid, Rating } from '@mui/material'
import Slider from "react-slick";

export default function Testimonials() {
    const settings = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                }
            }
        ]
    };
    return (
        <>
            <Box className="homeSectionSeven">
                <Box className="costomContainer costomContainerV2">
                    <Typography component="h1">Testimonials</Typography>
                    <Slider {...settings} className="logo-slider">
                        <div className='sem_marnPernt'>
                            <Box className="tstmols_bg_box">
                                <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                                <Typography className='contntText'>
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                                    tristique. Duis cursus, mi quis viverra ornare duis cursus, mi quis viverra."
                                </Typography>
                                <Box className="userBxx">
                                    <img src='/img/dommy_avatar_ic.svg' alt='' />
                                    <Box>
                                        <Typography component="h6">Jerome Bell</Typography>
                                        <Typography>Position, Company name</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </div>
                        <div className='sem_marnPernt'>
                            <Box className="tstmols_bg_box">
                                <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                                <Typography className='contntText'>
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                                    tristique. Duis cursus, mi quis viverra ornare duis cursus, mi quis viverra."
                                </Typography>
                                <Box className="userBxx">
                                    <img src='/img/dommy_avatar_ic.svg' alt='' />
                                    <Box>
                                        <Typography component="h6">Jerome Bell</Typography>
                                        <Typography>Position, Company name</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </div>
                        <div className='sem_marnPernt'>
                            <Box className="tstmols_bg_box">
                                <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                                <Typography className='contntText'>
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                                    tristique. Duis cursus, mi quis viverra ornare duis cursus, mi quis viverra."
                                </Typography>
                                <Box className="userBxx">
                                    <img src='/img/dommy_avatar_ic.svg' alt='' />
                                    <Box>
                                        <Typography component="h6">Jerome Bell</Typography>
                                        <Typography>Position, Company name</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </div>
                        <div className='sem_marnPernt'>
                            <Box className="tstmols_bg_box">
                                <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                                <Typography className='contntText'>
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                                    tristique. Duis cursus, mi quis viverra ornare duis cursus, mi quis viverra."
                                </Typography>
                                <Box className="userBxx">
                                    <img src='/img/dommy_avatar_ic.svg' alt='' />
                                    <Box>
                                        <Typography component="h6">Jerome Bell</Typography>
                                        <Typography>Position, Company name</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </div>
                    </Slider>
                </Box>
            </Box>
        </>
    )
}
