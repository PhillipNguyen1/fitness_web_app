import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
} from "@material-ui/core";

const Header = props => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          Exercise Database
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
