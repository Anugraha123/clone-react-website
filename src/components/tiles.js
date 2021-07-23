import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useTheme from "@material-ui/core/styles/useTheme";

import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined";

import Box from "@material-ui/core/Box";

import Grid from "@material-ui/core/Grid";

const TileMapper = ({ data, title }) => {
  const theme = useTheme();
  return (
    <Box pt="16px" pb={{ xs: "16px", md: "24px" }}>
      <Typography variant="h5" paragraph>
        <b>{title}</b>
      </Typography>

      <Box
        borderLeft={`1px solid ${theme.palette.divider}`}
        borderBottom={`1px solid ${theme.palette.divider}`}
        mt="24px"
      >
        <Grid container>
          {data.map(({ title, subtitle, link }, index) => {
            return (
              <Grid item xs={12} md={4} key={"card" + index}>
                <Box
                  borderTop={`1px solid ${theme.palette.divider}`}
                  borderRight={`1px solid ${theme.palette.divider}`}
                  padding="32px"
                >
                  <Typography gutterBottom>
                    <b>{title}</b>
                  </Typography>

                  <Typography gutterBottom>
                    <>{subtitle}</>
                  </Typography>

                  <Typography color="primary">
                    <>{link}</>
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

const data = [
  {
    title: "Advertisement",
    subtitle: "Advertisement page",
    link: "View demo",
  },
  {
    title: "Advertisement",
    subtitle: "Advertisement page",
    link: "View demo",
  },
  {
    title: "Advertisement",
    subtitle: "Advertisement page",
    link: "View demo",
  },
  {
    title: "Advertisement",
    subtitle: "Advertisement page",
    link: "View demo",
  },
  {
    title: "Advertisement",
    subtitle: "Advertisement page",
    link: "View demo",
  },
  {
    title: "Advertisement",
    subtitle: "Advertisement page",
    link: "View demo",
  },
  {
    title: "Advertisement",
    subtitle: "Advertisement page",
    link: "View demo",
  },
  {
    title: "Advertisement",
    subtitle: "Advertisement page",
    link: "View demo",
  },
  {
    title: "Advertisement",
    subtitle: "Advertisement page",
    link: "View demo",
  },
  {
    title: "Advertisement",
    subtitle: "Advertisement page",
    link: "View demo",
  },
  {
    title: "Advertisement",
    subtitle: "Advertisement page",
    link: "View demo",
  },
  {
    title: "Advertisement",
    subtitle: "Advertisement page",
    link: "View demo",
  },
];

const Component = () => {
  return (
    <Box bgcolor="background.default">
      <Container maxWidth="lg">
        <Box py={{ xs: "32px", md: "64px" }} px={{ xs: 0, md: '16px' }}>
          <Box textAlign="center">
            <Typography color="textSecondary" paragraph>
              DEMO PAGES
            </Typography>

            <Typography variant="h3" paragraph>
              <b>Webbee in action</b>
            </Typography>

            <Typography color="textSecondary" paragraph>
              All examples you find below are included in the download package.
            </Typography>

            <Box
              display="flex"
              style={{ gap: "16px" }}
              width={{ xs: "1", md: "auto" }}
              flexWrap="no-wrap"
              flexDirection={{ xs: "column", sm: "row" }}
              justifyContent="center"
              mt='32px'
            >
              <Button
                endIcon={<ArrowForwardOutlinedIcon />}
                color="primary"
                variant="contained"
              >
                Purchase
              </Button>

              <Button variant="outlined" color="primary">
                View Documentation
              </Button>
            </Box>
          </Box>

          <TileMapper data={data} title="Landing pages" />

          <TileMapper data={data} title="Supporting pages" />

          <TileMapper data={data} title="Auth pages" />
        </Box>
      </Container>
    </Box>
  );
};
export default Component;
