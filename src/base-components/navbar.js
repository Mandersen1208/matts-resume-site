import Button from "@mui/material/Button";
import { red } from "@mui/material/colors";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar style={{ background: red[400] }}>
      <Container style={{ background: red[400] }}>
        <Toolbar sx={{ background: red[400] }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, background: red[400] }}
          >
            Welcome to my Portfolio
          </Typography>
        </Toolbar>
      </Container>
      <Container style={{ display: "flex", justifyContent: "space-between" }}>
        <Button color="inherit" href="/">
          Home
        </Button>
        <Button color="inherit" href="/AboutMe">
          About Me
        </Button>
        <Button color="inherit" href="/Resume">
          Resume
        </Button>
        <Button color="inherit" href="/Contact">
          Contact
        </Button>
      </Container>
    </AppBar>
  );
};

export default Navbar;
