import { AppBar, Container, Toolbar, Typography } from "@mui/material";

const WelcomeBanner = () => {
  return (
    <AppBar posotion="static" style={{ background: "red" }}>
      <Container>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome to my Portfolio
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default WelcomeBanner;
