import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Box from "@material-ui/core/Box";

import Grid from "@material-ui/core/Grid";

import Typewriter from "typewriter-effect";

import { ReactComponent as Rocket } from "../assets/vectors/vector-rocket.svg";

const Component = () => {
  return (
    <Box bgcolor='background.default' color='text.primary'>
      <Container maxWidth="lg">
        <Box py={{xs: '32px', md: '64px'}}>
          <Grid container alignItems="center">
            <Grid item xs={12} lg={6}>
              <Box width={{ lg: "80%" }}>
                <Typography variant="h3" paragraph>
                  <b>
                    Turn your ideas into a&nbsp;
                    <Box
                      component="span"
                      color="primary.main"
                      display='inline-block'
                    >
                      <Typewriter
                        options={{
                          strings: ["success.", "startup.", "future."],
                          autoStart: true,
                          loop: true,
                          delay: 50,
                          deleteSpeed: 0,
                        }}
                      />
                    </Box>
                  </b>
                </Typography>
              </Box>

              <Typography color="textSecondary" variant='h6' paragraph>
                Webbee will make your product look modern and professional while
                saving you precious time.
              </Typography>

              <Box
                display="flex"
                style={{ gap: "16px" }}
                width={{ xs: "1", md: "auto" }}
                flexWrap="no-wrap"
                flexDirection={{ xs: "column", sm: "row" }}
                mt='24px'
              >
                <Button variant="contained" color="primary">
                  Purchase now
                </Button>

                <Button variant="outlined" color="primary">
                  View Documentation
                </Button>
              </Box>
            </Grid>

            <Grid item xs={12} lg={6}>
              <Box m='0 auto' maxWidth={{xs: '500px', md: 'unset'}} py={{xs: '32px', lg: 0}} px='16px' textAlign="center">
                <Rocket />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Component;
