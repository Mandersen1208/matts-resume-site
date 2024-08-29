import Button from "@mui/material/Button";
import { AppBar, Toolbar, Typography } from "@mui/material";
import "./Navbar.css";

const Navbar = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "space",
    textShadow: "2px 2px 4px #000000",
  };

  const buttons = [
    { label: "Home", href: "/", isDisabled: false },
    { label: "About Me", href: "/AboutMe", isDisabled: true },
    { label: "Resume", href: "/Resume", isDisabled: true },
    { label: "Contact Me", href: "/Contact", isDisabled: true },
  ];

  const renderButtons = (buttons) => {
    return buttons.map((button, index) => {
      if (button.isDisabled === true) {
        return null;
      }
      return (
        <Button key={index} color="inherit" href={button.href} className="buttons">
          {button.label}
        </Button>
      );
    });
  };

  return (
    <AppBar style={{ background: "rgba(120, 39, 200, .2)" }}>
      <Toolbar className="navbar">
        <Typography variant="h6" component="div" className="navbarText">
          Welcome to my Portfolio
        </Typography>
      </Toolbar>
      <div className="navbarItems" style={containerStyle}>
        {renderButtons(buttons)}
      </div>
    </AppBar>
  );
};

export default Navbar;
