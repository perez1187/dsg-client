import React from 'react'
import { Box, Typography, Grid } from '@mui/material'
import Slider from "react-slick";

export default function PersonalizedSolution() {
    const settings = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    arrows: true,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
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
            <Box className="homeSectionFour">
                <Box className="costomContainer">
                    <Box className="txtFlexBox">
                        <Typography component="h1">A Personalized Solution</Typography>
                        <Typography className='def_peragraph'>Our team will hear your needs and we will point you better spots to play according to <span className='f-w-600'>your poker goals!</span></Typography>
                    </Box>
                    <Slider {...settings} className="logo-slider">
                        <div>
                            <a href='#' className='logo_allImg'>
                                <img src='/img/logo_ic01.svg' alt='' />
                            </a>
                        </div>
                        <div>
                            <a href='#' className='logo_allImg'>
                                <img src='/img/logo_ic02.svg' alt='' />
                            </a>
                        </div>
                        <div>
                            <a href='#' className='logo_allImg'>
                                <img src='/img/logo_ic03.svg' alt='' />
                            </a>
                        </div>
                        <div>
                            <a href='#' className='logo_allImg'>
                                <img src='/img/logo_ic04.svg' alt='' />
                            </a>
                        </div>
                        <div>
                            <a href='#' className='logo_allImg'>
                                <img src='/img/logo_ic05.svg' alt='' />
                            </a>
                        </div>
                        <div>
                            <a href='#' className='logo_allImg'>
                                <img src='/img/logo_ic05.svg' alt='' />
                            </a>
                        </div>
                    </Slider>
                </Box>
            </Box>
        </>
    )
}
