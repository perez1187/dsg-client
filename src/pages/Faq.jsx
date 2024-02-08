import React from 'react'
import LayoutOne from '../components/Layouts/LayoutOne'
import { Box, Typography } from '@mui/material'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Faq = () => {
  return (
    <>
      <LayoutOne>
        <Box class="def_p MuiBox-root css-0"></Box>
        <Box className="faq_main">
          <Box className="costomContainer">
            <Box className="faq_innr">
              <Typography component="h1" className='def_hed_faq_about'>Frequently Asked Questions</Typography>
              <Box className="faq_body">
                <div>
                  <Accordion className='accornMainn'>
                    <AccordionSummary className='accorn_summry'>
                      <Typography className='nombrTxt'>01</Typography>
                      <Typography>Lorem ipsum dolor sit amet consectetur. Sagittis id.</Typography>
                      <Box className="button_tap">
                        <AddIcon className='add_icon' />
                        <RemoveIcon className='remove_icon' />
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails className='accornInnr'>
                      <Typography>
                        Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices. Ac pharetra ultrices consectetur consequat tellus massa.
                        Nec aliquam cras sagittis duis sed euismod arcu hac. Ornare amet ligula ornare lacus aliquam aenean.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion className='accornMainn'>
                    <AccordionSummary className='accorn_summry'>
                      <Typography className='nombrTxt'>02</Typography>
                      <Typography>Lorem ipsum dolor sit amet consectetur. Viverra.</Typography>
                      <Box className="button_tap">
                        <AddIcon className='add_icon' />
                        <RemoveIcon className='remove_icon' />
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails className='accornInnr'>
                      <Typography>
                        Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices. Ac pharetra ultrices consectetur consequat tellus massa.
                        Nec aliquam cras sagittis duis sed euismod arcu hac. Ornare amet ligula ornare lacus aliquam aenean.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion className='accornMainn'>
                    <AccordionSummary className='accorn_summry'>
                      <Typography className='nombrTxt'>03</Typography>
                      <Typography>Lorem ipsum dolor sit amet consectetur. Viverra.</Typography>
                      <Box className="button_tap">
                        <AddIcon className='add_icon' />
                        <RemoveIcon className='remove_icon' />
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails className='accornInnr'>
                      <Typography>
                        Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices. Ac pharetra ultrices consectetur consequat tellus massa.
                        Nec aliquam cras sagittis duis sed euismod arcu hac. Ornare amet ligula ornare lacus aliquam aenean.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion className='accornMainn'>
                    <AccordionSummary className='accorn_summry'>
                      <Typography className='nombrTxt'>04</Typography>
                      <Typography>Lorem ipsum dolor sit amet consectetur. Viverra.</Typography>
                      <Box className="button_tap">
                        <AddIcon className='add_icon' />
                        <RemoveIcon className='remove_icon' />
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails className='accornInnr'>
                      <Typography>
                        Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices. Ac pharetra ultrices consectetur consequat tellus massa.
                        Nec aliquam cras sagittis duis sed euismod arcu hac. Ornare amet ligula ornare lacus aliquam aenean.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion className='accornMainn'>
                    <AccordionSummary className='accorn_summry'>
                      <Typography className='nombrTxt'>05</Typography>
                      <Typography>Lorem ipsum dolor sit amet consectetur. Viverra.</Typography>
                      <Box className="button_tap">
                        <AddIcon className='add_icon' />
                        <RemoveIcon className='remove_icon' />
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails className='accornInnr'>
                      <Typography>
                        Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices. Ac pharetra ultrices consectetur consequat tellus massa.
                        Nec aliquam cras sagittis duis sed euismod arcu hac. Ornare amet ligula ornare lacus aliquam aenean.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </Box>
            </Box>
          </Box>
        </Box>
      </LayoutOne>
    </>
  )
}

export default Faq