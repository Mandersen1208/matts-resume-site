import { AppBar, Container, Toolbar, Typography } from "@mui/material";

const WelcomeBanner = () => {
  return (
    <AppBar posotion="static" style={{background: 'rgba(120, 39, 170, .3)' }} elevation={0}>
      <Container>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default WelcomeBanner;
