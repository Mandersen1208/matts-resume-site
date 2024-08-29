import Button from "@mui/material/Button";
import { purple } from "@mui/material/colors";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    textShadow: "2px 2px 4px #000000"
  };

  return (
    <AppBar style={{ background: 'rgba(120, 39, 200, .2)'  }}>
      <Container>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            style={{ textShadow: "2px 2px 4px #000000",  textJustify: "center", color: "black", FontFaceSetLoadEvent: "bold" }}
          >
            Welcome to my Portfolio
          </Typography>
        </Toolbar>
      </Container>
      <Container style={containerStyle}>
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
