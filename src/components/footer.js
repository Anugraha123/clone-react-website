import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Divider from "@material-ui/core/Divider";
import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined";

import Box from "@material-ui/core/Box";
import { ReactComponent as Logo } from "../assets/icons/icon-logo.svg";

const Spacing = () => <>&nbsp;&nbsp; &nbsp;&nbsp;</>;

const Component = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Box
          py={{ xs: "32px", md: "64px" }}
          px={{ xs: 0, md: 0 }}
          textAlign="center"
        >
          <Typography color="textSecondary" paragraph>
            GET STARTED
          </Typography>

          <Typography variant="h3" color="textPrimary" paragraph>
            <b>Get started with Webbee today</b>
          </Typography>

          <Typography color="textSecondary" variant='h6'>
            Build a beautiful, modern website with flexible, fully customizable,
            atomic Material-UI components.
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
      </Container>

      <Divider />

      <Container maxWidth="lg">
        <Box py="32px" px="16px" textAlign="center">
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            alignItems="center"
            justifyContent="space-between"
            mb="16px"
          >
            <Box display="flex" alignItems="center" m={{ xs: 2 }}>
              <Logo height="30px" width="30px" />
            </Box>

            <Box
              display="flex"
              flex="1 auto"
              justifyContent="flex-end"
              alignItems={{ md: "center" }}
              flexDirection={{ xs: "column", sm: "row" }}
              style={{
                gap: "16px",
              }}
            >
              <Box display="flex" alignItems="center">
                <Typography variant="body2">Home</Typography>

                <Spacing />

                <Typography variant="body2">Documentation</Typography>
              </Box>

              <Button color="primary" variant="outlined" size="small">
                Purchase now
              </Button>
            </Box>
          </Box>

          <Typography
            variant="body2"
            color="textSecondary"
            paragraph
            align="center"
          >
            © Webbee. 2021, Maccarian. All rights reserved
          </Typography>

          <Typography variant="body2" color="textSecondary" align="center">
            When you visit or interact with our sites, services or tools, we or
            our authorised service providers may use cookies for storing
            information to help provide you with a better, faster and safer
            experience and for marketing purposes.
          </Typography>
        </Box>
      </Container>
    </>
  );
};
export default Component;
