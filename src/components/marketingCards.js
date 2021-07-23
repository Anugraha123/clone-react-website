import React, { useContext } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import Box from "@material-ui/core/Box";

import Grid from "@material-ui/core/Grid";

import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import { ThemeWrapper } from "../App";

const CommonBox = ({ children }) => {
  const { darkMode } = useContext(ThemeWrapper);
  return (
    <Box
      borderRadius="16px"
      p="32px"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
      }}
      boxShadow={
        darkMode
          ? "rgb(0 0 0 / 25%) 0px 3px 6px 0px"
          : "rgb(140 152 164 / 25%) 0px 3px 6px 0px"
      }
    >
      {children}
    </Box>
  );
};

const CircleIcon = () => {
  return (
    <Box
      mb="16px"
      height="50px"
      width="50px"
      borderRadius="100%"
      bgcolor="primary.main"
      color="background.paper"
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
    >
      <FavoriteBorderOutlinedIcon color="inherit" fontSize="small" />
    </Box>
  );
};

const Component = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Box pb={{ xs: "32px", md: "64px" }} px={{ xs: 0, md: '16px' }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <CommonBox>
                <CircleIcon />

                <Typography variant="h6">Themeable</Typography>

                <Typography variant="subtitle1" color="textSecondary">
                  Customize any part of our components to match your design
                  needs.
                </Typography>
              </CommonBox>
            </Grid>

            <Grid item xs={12} md={4}>
              <CommonBox>
                <CircleIcon />

                <Typography variant="h6">Themeable</Typography>

                <Typography variant="subtitle1" color="textSecondary">
                  Customize any part of our components to match your design
                  needs.
                </Typography>
              </CommonBox>
            </Grid>

            <Grid item xs={12} md={4}>
              <CommonBox>
                <CircleIcon />

                <Typography variant="h6">Themeable</Typography>

                <Typography variant="subtitle1" color="textSecondary">
                  Customize any part of our components to match your design
                  needs.
                </Typography>
              </CommonBox>
            </Grid>

            <Grid item xs={12} md={4}>
              <CommonBox>
                <CircleIcon />

                <Typography variant="h6">Themeable</Typography>

                <Typography variant="subtitle1" color="textSecondary">
                  Customize any part of our components to match your design
                  needs.
                </Typography>
              </CommonBox>
            </Grid>

            <Grid item xs={12} md={4}>
              <CommonBox>
                <CircleIcon />

                <Typography variant="h6">Themeable</Typography>

                <Typography variant="subtitle1" color="textSecondary">
                  Customize any part of our components to match your design
                  needs.
                </Typography>
              </CommonBox>
            </Grid>

            <Grid item xs={12} md={4}>
              <CommonBox>
                <CircleIcon />

                <Typography variant="h6">Themeable</Typography>

                <Typography variant="subtitle1" color="textSecondary">
                  Customize any part of our components to match your design
                  needs.
                </Typography>
              </CommonBox>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Component;
