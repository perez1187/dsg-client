import { Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react'
import { Link } from 'react-router-dom'
// local Data
import { SidebarData } from '../../data/data'

// using context
import { useAuth } from '../../hooks/useAuth'

export default function Sidebar() {
    const { selected, setSelected } = useAuth()
    return (
        <Box>
            <Box className="logo-box">
                <Link to="/">
                    <img src='/img/logo.svg' alt='' />
                </Link>
            </Box>
            <Box className="menu-box">
                <ul>
                    {
                        SidebarData.map((item, index) => {
                            return (
                                <li
                                    // className="menuItem active" // to zamiienamy na:
                                    
                                    key={index}
                                    onClick={() => setSelected(index)} // zmiana active
                                >
                                    {/* <item.icon/> */}
                                    <a className={selected === index ? ' active' : ''}>
                                        {item.heading}
                                    </a>
                                </li>
                            )
                        }
                        )
                    }
                    {/* <li>
                        <Link to="/">Dashboard</Link>
                    </li>
                    <li>
                        <Accordion className='menu-acc'>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                Reports
                            </AccordionSummary>
                            <AccordionDetails>
                                <Link to="/">Item One</Link>
                                <Link to="/">Item Two</Link>
                                <Link to="/">Item Three</Link>
                            </AccordionDetails>
                        </Accordion>
                    </li>
                    <li>
                        <Link to="/">OFFERS</Link>
                    </li>
                    <li>
                        <Link to="/">PAYMENTS</Link>
                    </li> */}
                </ul>
            </Box>
        </Box>
    )
}
