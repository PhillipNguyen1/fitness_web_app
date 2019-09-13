import React, { useState } from "react";
import { Paper, Tabs, Tab} from '@material-ui/core'

const Footer = props => {
  const [value, setValue] = useState(0);

  const onChange = (event, newvalue) => {
    setValue(newvalue);
  }

  return (
    <Paper>
      <Tabs
        value={value}
        onChange={onChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    </Paper>
  );
};

export default Footer;
