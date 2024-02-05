import * as React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";
// logo
import Logo from "../../imgs/LogoDark.svg"

export default function Footer() {
  return (
    <>

      <Box className="footer">
        <Box className="costomContainer">
          <Box className="foterInnrFlx">
            <Link>
              <img src ={Logo} alt="logo" className='HeaderLogo' />
            </Link>
            <Typography>© 2023 Insira aqui. All rights reserved.</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}