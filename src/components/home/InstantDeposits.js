import React from 'react'
import { Box, Typography, Grid } from '@mui/material'
import Slider from "react-slick";

export default function InstantDeposits() {
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
            <Box className="homeSectionFour homeSectionSix">
                <Box className="costomContainer">
                    <Box className="txtFlexBox">
                        <Typography component="h1">Instant Deposits and <br />Withdrawals</Typography>
                        <Typography className='def_peragraph'>We are able to handle most of the <br />wallets and make super easy to play <br />in all partner clubs!</Typography>
                    </Box>
                    <Slider {...settings} className="logo-slider">
                        <div>
                            <a href='#' className='logo_allImg'>
                                <img src='/img/logo_ic06.svg' alt='' />
                            </a>
                        </div>
                        <div>
                            <a href='#' className='logo_allImg'>
                                <img src='/img/logo_ic07.svg' alt='' />
                            </a>
                        </div>
                        <div>
                            <a href='#' className='logo_allImg'>
                                <img src='/img/logo_ic08.svg' alt='' />
                            </a>
                        </div>
                        <div>
                            <a href='#' className='logo_allImg'>
                                <img src='/img/logo_ic09.svg' alt='' />
                            </a>
                        </div>
                        <div>
                            <a href='#' className='logo_allImg'>
                                <img src='/img/logo_ic09.svg' alt='' />
                            </a>
                        </div>
                    </Slider>
                </Box>
            </Box>
        </>
    )
}
