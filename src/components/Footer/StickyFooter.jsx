import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: 'black',
        p: 6,
      }}
      component="footer"
    >
      <Container maxWidth="sm">
        <Typography variant="body2" color="white" align="center">
          {"Copyright © "}
          <Link color="#FFFF" href="https://your-website.com/">
            Digital Stack Group
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </Box>
  );
}