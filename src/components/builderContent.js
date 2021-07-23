import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined";

import Box from "@material-ui/core/Box";

import { ReactComponent as Builders } from "../assets/vectors/vector-builders.svg";

const Component = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Box
          py={{ xs: "32px", md: "64px" }}
          px={{ xs: 0, md: '16px' }}
          textAlign="center"
        >
          <Box px={{ xs: 0, md: 12 }} display='inline-block'>
          <Typography color="textSecondary" paragraph>
            FEATURES
          </Typography>

          <Typography variant="h2" paragraph>
            <b>The powerful and flexible theme for all kinds of businesses</b>
          </Typography>

          <Typography color="textSecondary">
            Build a beautiful, modern website with flexible, fully customizable,
            atomic Material-UI components. An experience you'd expect from a
            design system.
          </Typography>

          <br />
          <Button
            endIcon={<ArrowForwardOutlinedIcon />}
            color="primary"
            variant="contained"
          >
            Purchase
          </Button>
          </Box>

          <Box mt="24px">
            <Builders width='50%' />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Component;
